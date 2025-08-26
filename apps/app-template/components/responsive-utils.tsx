"use client";

import React from "react";
import { useResponsive } from "./responsive-provider";
import { useBreakpoint, useBreakpointDown, type Breakpoint } from "@/hooks/use-breakpoint";

interface ShowProps {
    above?: Breakpoint;
    below?: Breakpoint;
    only?: Breakpoint;
    children: React.ReactNode;
}

/**
 * 조건부로 컴포넌트를 표시하는 유틸리티 컴포넌트
 */
export function Show({ above, below, only, children }: ShowProps) {
    const shouldShowAbove = above ? useBreakpoint(above) : true;
    const shouldShowBelow = below ? useBreakpointDown(below) : true;
    const shouldShowOnly = only ? useBreakpoint(only) && useBreakpointDown(only) : true;

    const shouldShow = shouldShowAbove && shouldShowBelow && shouldShowOnly;

    return shouldShow ? <>{children}</> : null;
}

/**
 * 모바일에서만 표시
 */
export function ShowOnMobile({ children }: { children: React.ReactNode }) {
    return <Show below="md">{children}</Show>;
}

/**
 * 태블릿에서만 표시
 */
export function ShowOnTablet({ children }: { children: React.ReactNode }) {
    return (
        <Show above="md" below="lg">
            {children}
        </Show>
    );
}

/**
 * 데스크톱에서만 표시
 */
export function ShowOnDesktop({ children }: { children: React.ReactNode }) {
    return <Show above="lg">{children}</Show>;
}

/**
 * 모바일이 아닐 때만 표시
 */
export function HideOnMobile({ children }: { children: React.ReactNode }) {
    return <Show above="md">{children}</Show>;
}

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    fluid?: boolean;
}

/**
 * 반응형 컨테이너 컴포넌트
 */
export function Container({ children, className = "", fluid = false }: ContainerProps) {
    const { isMobile, isTablet } = useResponsive();

    const containerClass = fluid
        ? "w-full px-4 sm:px-6 lg:px-8"
        : `container mx-auto px-4 sm:px-6 lg:px-8 ${
              isMobile ? "max-w-full" : isTablet ? "max-w-4xl" : "max-w-7xl"
          }`;

    return <div className={`${containerClass} ${className}`}>{children}</div>;
}

interface GridProps {
    children: React.ReactNode;
    className?: string;
    cols?: {
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
}

/**
 * 반응형 그리드 컴포넌트
 */
export function ResponsiveGrid({
    children,
    className = "",
    cols = { sm: 1, md: 2, lg: 3, xl: 4 },
}: GridProps) {
    const gridClass = `grid gap-4 ${cols.sm ? `grid-cols-${cols.sm}` : ""} ${
        cols.md ? `md:grid-cols-${cols.md}` : ""
    } ${cols.lg ? `lg:grid-cols-${cols.lg}` : ""} ${cols.xl ? `xl:grid-cols-${cols.xl}` : ""}`;

    return <div className={`${gridClass} ${className}`}>{children}</div>;
}

/**
 * 반응형 스택 컴포넌트 (수직/수평 전환)
 */
export function ResponsiveStack({
    children,
    className = "",
    direction = "vertical",
    breakpoint = "md",
}: {
    children: React.ReactNode;
    className?: string;
    direction?: "vertical" | "horizontal";
    breakpoint?: Breakpoint;
}) {
    const isLarge = useBreakpoint(breakpoint);

    const stackClass =
        direction === "vertical"
            ? `flex flex-col ${breakpoint}:flex-row gap-4`
            : `flex flex-row ${breakpoint}:flex-col gap-4`;

    return <div className={`${stackClass} ${className}`}>{children}</div>;
}
