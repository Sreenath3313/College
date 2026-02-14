import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export interface DepartmentSection {
  id: string;
  title: string;
  content: React.ReactNode;
}