"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useCurrentBreakpoint, type Breakpoint } from "@/hooks/use-breakpoint";

interface ResponsiveContextType {
    breakpoint: Breakpoint;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    screenWidth: number;
    screenHeight: number;
}

const ResponsiveContext = createContext<ResponsiveContextType | undefined>(undefined);

export function ResponsiveProvider({ children }: { children: React.ReactNode }) {
    const breakpoint = useCurrentBreakpoint();
    const [dimensions, setDimensions] = useState({
        screenWidth: 0,
        screenHeight: 0,
    });

    // 화면 크기 변경 감지
    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({
                screenWidth: window.innerWidth,
                screenHeight: window.innerHeight,
            });
        };

        // 초기값 설정
        updateDimensions();

        // 리사이즈 이벤트 리스너
        window.addEventListener("resize", updateDimensions);

        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    const value: ResponsiveContextType = {
        breakpoint,
        isMobile: breakpoint === "sm",
        isTablet: breakpoint === "md",
        isDesktop: ["lg", "xl", "2xl"].includes(breakpoint),
        screenWidth: dimensions.screenWidth,
        screenHeight: dimensions.screenHeight,
    };

    return <ResponsiveContext.Provider value={value}>{children}</ResponsiveContext.Provider>;
}

/**
 * 반응형 정보를 가져오는 훅
 */
export function useResponsive(): ResponsiveContextType {
    const context = useContext(ResponsiveContext);
    if (context === undefined) {
        throw new Error("useResponsive must be used within a ResponsiveProvider");
    }
    return context;
}
