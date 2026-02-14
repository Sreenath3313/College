import React, { useRef, useEffect } from 'react';

const NeuralBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d', { alpha: true }); // Optimize for alpha if needed, or false if opaque
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let mouse = { x: -1000, y: -1000 };

        // Throttle resize
        let resizeTimeout: NodeJS.Timeout;
        const resize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (!container || !canvas) return;
                canvas.width = container.clientWidth;
                canvas.height = container.clientHeight;
                initParticles();
            }, 100);
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.vx = (Math.random() - 0.5) * 0.3; // Slower movement = smoother look
                this.vy = (Math.random() - 0.5) * 0.3;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;

                // Mouse interaction - Simplified distance check
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;

                // Quick bounding box check before expensive square root
                if (Math.abs(dx) < 150 && Math.abs(dy) < 150) {
                    const distanceSq = dx * dx + dy * dy;
                    if (distanceSq < 22500) { // 150^2
                        const angle = Math.atan2(dy, dx);
                        const force = (150 - Math.sqrt(distanceSq)) / 150;
                        const pushX = Math.cos(angle) * force * 1; // Reduced force
                        const pushY = Math.sin(angle) * force * 1;
                        this.vx -= pushX * 0.05;
                        this.vy -= pushY * 0.05;
                    }
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(249, 115, 22, 0.5)';
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            // Cap max particles for performance on large screens
            const calculatedParticles = (canvas.width * canvas.height) / 15000;
            const particleCount = Math.min(calculatedParticles, 100); // Cap at 100
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const connect = () => {
            // Optimization: Grid-based spatial partitioning is overkill for <100 particles,
            // but we can break early or limit connections per particle if needed.
            // For now, standard O(N^2) is fine for N=100.
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;

                    // Quick check
                    if (Math.abs(dx) > 120 || Math.abs(dy) > 120) continue;

                    const distanceSq = dx * dx + dy * dy;

                    if (distanceSq < 14400) { // 120^2 connection distance
                        const opacity = 1 - distanceSq / 14400;
                        ctx.strokeStyle = `rgba(249, 115, 22, ${opacity * 0.15})`; // Low opacity
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            connect();
            animationFrameId = requestAnimationFrame(animate);
        };

        // Throttled mouse move likely not needed for simple coordinate update, 
        // but nice to have if logic gets complex.
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        }

        window.addEventListener('resize', resize);
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);

        // Initial setup
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        initParticles();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
            clearTimeout(resizeTimeout);
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-auto">
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
};

export default NeuralBackground;
