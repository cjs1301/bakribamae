"use client";

import { useMediaQuery } from "./use-media-query";

/**
 * Tailwind CSS 브레이크포인트
 */
export const breakpoints = {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
} as const;

export type Breakpoint = keyof typeof breakpoints;

/**
 * 현재 화면 크기가 특정 브레이크포인트 이상인지 확인하는 훅
 */
export function useBreakpoint(breakpoint: Breakpoint): boolean {
    return useMediaQuery(`(min-width: ${breakpoints[breakpoint]})`);
}

/**
 * 현재 화면 크기가 특정 브레이크포인트 이하인지 확인하는 훅
 */
export function useBreakpointDown(breakpoint: Breakpoint): boolean {
    return useMediaQuery(`(max-width: ${breakpoints[breakpoint]})`);
}

/**
 * 모바일 디바이스인지 확인하는 훅
 */
export function useIsMobile(): boolean {
    return useBreakpointDown("md");
}

/**
 * 태블릿 디바이스인지 확인하는 훅
 */
export function useIsTablet(): boolean {
    const isMd = useBreakpoint("md");
    const isLg = useBreakpointDown("lg");
    return isMd && isLg;
}

/**
 * 데스크톱 디바이스인지 확인하는 훅
 */
export function useIsDesktop(): boolean {
    return useBreakpoint("lg");
}

/**
 * 현재 활성 브레이크포인트를 반환하는 훅
 */
export function useCurrentBreakpoint(): Breakpoint {
    const is2xl = useBreakpoint("2xl");
    const isXl = useBreakpoint("xl");
    const isLg = useBreakpoint("lg");
    const isMd = useBreakpoint("md");
    const isSm = useBreakpoint("sm");

    if (is2xl) return "2xl";
    if (isXl) return "xl";
    if (isLg) return "lg";
    if (isMd) return "md";
    if (isSm) return "sm";
    return "sm"; // 기본값
}
