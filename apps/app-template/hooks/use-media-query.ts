"use client";

import { useEffect, useState } from "react";

/**
 * 미디어 쿼리 상태를 추적하는 훅
 * @param query - CSS 미디어 쿼리 문자열
 * @returns boolean - 미디어 쿼리가 매치되는지 여부
 */
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);

        // 초기값 설정
        setMatches(media.matches);

        // 변경 감지 리스너
        const listener = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        // 이벤트 리스너 등록
        if (media.addEventListener) {
            media.addEventListener("change", listener);
        } else {
            // 구형 브라우저 지원
            media.addListener(listener);
        }

        // 클린업 함수
        return () => {
            if (media.removeEventListener) {
                media.removeEventListener("change", listener);
            } else {
                media.removeListener(listener);
            }
        };
    }, [query]);

    return matches;
}
