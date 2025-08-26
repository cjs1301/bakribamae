# {{APP_NAME}}

{{APP_DESCRIPTION}}

## 새로운 앱 생성 방법

이 템플릿을 사용해서 새로운 앱을 만드는 방법:

### 자동 생성 스크립트 사용 (권장)

```bash
# 루트 폴더에서 실행
./create-new-app.sh <app-name> [app-title] [app-description]

# 예시
./create-new-app.sh todo-app "할일 관리" "간편한 할일 관리 서비스"
```

### 수동 생성

```bash
# 루트 폴더에서 실행
cp -r apps/app-template apps/your-new-app-name
cd apps/your-new-app-name

# 플레이스홀더 교체
# - package.json: {{APP_NAME}} → 실제 앱 이름
# - app/layout.tsx: {{APP_TITLE}}, {{APP_DESCRIPTION}}
# - app/page.tsx: {{APP_TITLE}}, {{APP_DESCRIPTION}}
# - README.md: 모든 플레이스홀더

# 의존성 설치 및 실행 (루트에서)
cd ../../
pnpm install
pnpm dev --filter=your-new-app-name
```

## 포함된 기능

- ✅ Next.js 15 with App Router
- ✅ TypeScript 설정
- ✅ Tailwind CSS
- ✅ shadcn/ui 컴포넌트
- ✅ 다크 테마 기본 설정
- ✅ ESLint 설정
- ✅ 반응형 디자인 시스템
- ✅ 반응형 훅 및 유틸리티
- ✅ 적응형 레이아웃 컴포넌트
- ✅ 한국어 지원

## 폴더 구조

```
your-new-app-name/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # 루트 레이아웃
│   ├── page.tsx        # 홈페이지
│   └── favicon.ico     # 파비콘
├── components/         # React 컴포넌트
│   └── providers.tsx   # 테마 프로바이더
├── hooks/              # 커스텀 훅스
├── lib/                # 유틸리티 함수들
├── package.json        # 의존성 설정
├── tsconfig.json       # TypeScript 설정
├── next.config.mjs     # Next.js 설정
├── eslint.config.js    # ESLint 설정
└── postcss.config.mjs  # PostCSS 설정
```

## 개발 가이드

### 새로운 페이지 추가

`app/` 폴더에 새로운 폴더와 `page.tsx` 파일을 추가하세요.

### 새로운 컴포넌트 추가

`components/` 폴더에 새로운 컴포넌트를 추가하세요.

### shadcn/ui 컴포넌트 추가

```bash
# 루트에서 실행 - 공통 UI 패키지에 컴포넌트 추가
pnpm dlx shadcn@latest add button -c packages/ui

# 예시: 여러 컴포넌트 한번에 추가
pnpm dlx shadcn@latest add button input card dialog -c packages/ui
```

> 💡 **참고**: 컴포넌트는 `packages/ui/src/components`에 추가되며, 모든 앱에서 `@workspace/ui/components/컴포넌트명`으로 사용할 수 있습니다.

### 반응형 훅 사용법

```tsx
import { useResponsive, useIsMobile, useBreakpoint } from "@/hooks";
import { ShowOnMobile, Container } from "@/components/responsive-utils";

function MyComponent() {
    const { isMobile, breakpoint } = useResponsive();
    const isLarge = useBreakpoint("lg");

    return (
        <Container>
            <h1 className={isMobile ? "text-2xl" : "text-4xl"}>제목</h1>

            <ShowOnMobile>
                <p>모바일에서만 보임</p>
            </ShowOnMobile>
        </Container>
    );
}
```

### 반응형 컴포넌트

- `Container`: 반응형 컨테이너
- `ResponsiveGrid`: 반응형 그리드 레이아웃
- `ResponsiveStack`: 수직/수평 전환 스택
- `ShowOnMobile/ShowOnTablet/ShowOnDesktop`: 조건부 렌더링
- `HideOnMobile`: 모바일에서 숨김

### 환경 변수

`.env.local` 파일을 생성해서 환경 변수를 설정하세요.

## 빌드 및 배포

```bash
# 빌드
pnpm build --filter=your-new-app-name

# 프로덕션 실행
pnpm start --filter=your-new-app-name
```
