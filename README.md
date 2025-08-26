# Terbo Next.js Shadcn 모노레포

shadcn/ui를 활용한 터보레포 템플릿으로 여러 서비스를 빠르게 개발할 수 있습니다.

## 🚀 새로운 앱 생성

```bash
# 자동 생성 스크립트 사용 (권장)
./create-new-app.sh <app-name> [app-title] [app-description]

# 예시
./create-new-app.sh todo-app "할일 관리" "간편한 할일 관리 서비스"
```

## 📦 현재 서비스들

- **salary-calculator**: 연봉 계산기 서비스
- **app-template**: 새로운 앱 생성용 보일러플레이트

## 🛠️ 개발 환경 설정

```bash
# 의존성 설치
pnpm install

# 개별 앱 개발 서버 실행
pnpm dev:salary        # 연봉 계산기
pnpm dev:template      # 템플릿 (개발용)

# 또는 직접 필터 사용
pnpm dev --filter=your-app-name

# 빌드
pnpm build             # 모든 앱 빌드
pnpm build --filter=salary-calculator  # 특정 앱만 빌드

# 기타 유용한 명령어
pnpm lint              # 모든 앱 린트
pnpm typecheck         # 타입 체크
pnpm clean             # 빌드 파일 정리
```

## 🎨 shadcn/ui 컴포넌트 추가

```bash
# 공통 UI 패키지에 컴포넌트 추가 (권장)
pnpm dlx shadcn@latest add button -c packages/ui

# 여러 컴포넌트 한번에 추가
pnpm dlx shadcn@latest add button input card dialog -c packages/ui
```

컴포넌트는 `packages/ui/src/components` 디렉토리에 저장되며, 모든 앱에서 공통으로 사용할 수 있습니다.

## 🤖 AI 코딩 어시스턴트

### Cursor Rules

프로젝트에는 Cursor IDE를 위한 규칙들이 설정되어 있습니다:

- `.cursor/rules/`: 프로젝트별 개발 규칙
- `AGENTS.md`: AI 어시스턴트 전용 지침

### Claude Code

`CLAUDE.md` 파일에 Claude Code 연동을 위한 프로젝트 가이드가 포함되어 있습니다.

## 📁 프로젝트 구조

```
bakridamae/
├── .cursor/rules/           # Cursor IDE 규칙들
├── apps/                    # 개별 앱들
│   ├── salary-calculator/   # 연봉 계산기
│   └── app-template/        # 보일러플레이트
├── packages/                # 공유 패키지들
│   ├── ui/                  # shadcn/ui 컴포넌트
│   ├── eslint-config/       # ESLint 설정
│   └── typescript-config/   # TypeScript 설정
├── AGENTS.md               # AI 어시스턴트 지침
├── CLAUDE.md               # Claude Code 가이드
└── create-new-app.sh       # 새 앱 생성 스크립트
```

## 💡 컴포넌트 사용 방법

```tsx
import { Button } from "@workspace/ui/components/button";

export default function MyComponent() {
    return <Button>클릭하세요</Button>;
}
```

## 🎯 기본 기능

- ✅ Next.js 15 + App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ shadcn/ui 컴포넌트
- ✅ 다크 테마 기본 설정
- ✅ 반응형 디자인 시스템
- ✅ ESLint 설정
- ✅ 터보레포 최적화
- ✅ Cursor Rules & AGENTS.md 설정
- ✅ 한국어 지원
