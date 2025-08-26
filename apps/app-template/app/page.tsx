"use client";

import { Button } from "@workspace/ui/components/button";
import { useResponsive } from "@/components/responsive-provider";
import {
    Container,
    ShowOnMobile,
    ShowOnDesktop,
    ResponsiveStack,
} from "@/components/responsive-utils";

export default function Page() {
    const { breakpoint, isMobile, isDesktop } = useResponsive();

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Container className="py-8">
                <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8">
                    <div className="text-center space-y-4">
                        <h1
                            className={`font-bold tracking-tight ${
                                isMobile ? "text-2xl" : isDesktop ? "text-5xl" : "text-4xl"
                            }`}
                        >
                            {"{{APP_TITLE}}"}
                        </h1>
                        <p
                            className={`text-muted-foreground max-w-2xl ${
                                isMobile ? "text-base px-4" : "text-xl"
                            }`}
                        >
                            {"{{APP_DESCRIPTION}}"}
                        </p>

                        {/* 디버그 정보 (개발용) */}
                        <ShowOnDesktop>
                            <p className="text-xs text-muted-foreground/50">
                                현재 브레이크포인트: {breakpoint}
                            </p>
                        </ShowOnDesktop>
                    </div>

                    <ResponsiveStack
                        direction="horizontal"
                        breakpoint="sm"
                        className="w-full max-w-sm"
                    >
                        <Button size={isMobile ? "default" : "lg"} className="flex-1">
                            시작하기
                        </Button>
                        <Button
                            size={isMobile ? "default" : "lg"}
                            variant="outline"
                            className="flex-1"
                        >
                            <ShowOnMobile>더보기</ShowOnMobile>
                            <ShowOnDesktop>더 알아보기</ShowOnDesktop>
                        </Button>
                    </ResponsiveStack>
                </div>
            </Container>
        </div>
    );
}
