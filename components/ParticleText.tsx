import React, { useEffect, useRef, useState } from 'react';

interface ParticleTextProps {
    text: string;
    className?: string;
    particleColor?: string;
    particleSize?: number;
}

interface Particle {
    x: number;
    y: number;
    originX: number;
    originY: number;
    vx: number;
    vy: number;
    size: number;
}

const ParticleText: React.FC<ParticleTextProps> = ({
    text,
    className = '',
    particleColor = '#f97316',
    particleSize = 2
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [particles, setParticles] = useState<Particle[]>([]);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const animationFrameRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const updateCanvasSize = () => {
            const rect = container.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
            initParticles();
        };

        const initParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw text to get pixel data
            ctx.fillStyle = particleColor;
            ctx.font = 'bold 60px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(text, canvas.width / 2, canvas.height / 2);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const newParticles: Particle[] = [];

            // Sample pixels to create particles
            const gap = 4;
            for (let y = 0; y < canvas.height; y += gap) {
                for (let x = 0; x < canvas.width; x += gap) {
                    const index = (y * canvas.width + x) * 4;
                    const alpha = imageData.data[index + 3];

                    if (alpha > 128) {
                        newParticles.push({
                            x,
                            y,
                            originX: x,
                            originY: y,
                            vx: 0,
                            vy: 0,
                            size: particleSize
                        });
                    }
                }
            }

            setParticles(newParticles);
        };

        updateCanvasSize();
        window.addEventListener('resize', updateCanvasSize);

        return () => {
            window.removeEventListener('resize', updateCanvasSize);
            if (animationFrameRef.current !== undefined) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [text, particleColor, particleSize]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                // Calculate distance from mouse
                const dx = mousePos.x - particle.x;
                const dy = mousePos.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 100;

                if (isHovered && distance < maxDistance) {
                    // Repel from mouse
                    const force = (maxDistance - distance) / maxDistance;
                    particle.vx -= (dx / distance) * force * 2;
                    particle.vy -= (dy / distance) * force * 2;
                }

                // Return to origin
                const returnForce = 0.05;
                particle.vx += (particle.originX - particle.x) * returnForce;
                particle.vy += (particle.originY - particle.y) * returnForce;

                // Apply friction
                particle.vx *= 0.9;
                particle.vy *= 0.9;

                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Draw particle
                ctx.fillStyle = particleColor;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [particles, mousePos, isHovered, particleColor]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = canvasRef.current?.getBoundingClientRect();
        if (rect) {
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    return (
        <div
            ref={containerRef}
            className={`relative ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ minHeight: '100px' }}
        >
            <canvas
                ref={canvasRef}
                className="w-full h-full"
            />
        </div>
    );
};

export default ParticleText;
