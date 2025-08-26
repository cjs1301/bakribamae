#!/bin/bash

# 새로운 앱 생성 스크립트 (루트에서 실행)

if [ -z "$1" ]; then
    echo "사용법: ./create-new-app.sh <app-name> [app-title] [app-description]"
    echo "예시: ./create-new-app.sh todo-app '할일 관리' '간편한 할일 관리 서비스'"
    exit 1
fi

APP_NAME=$1
APP_TITLE=${2:-$APP_NAME}
APP_DESCRIPTION=${3:-"새로운 서비스입니다."}

echo "🚀 새로운 앱 생성 중: $APP_NAME"

# 1. 템플릿 복사
if [ -d "apps/$APP_NAME" ]; then
    echo "❌ 이미 존재하는 앱 이름입니다: $APP_NAME"
    exit 1
fi

cp -r apps/app-template "apps/$APP_NAME"
cd "apps/$APP_NAME"

echo "✅ 템플릿 복사 완료"

# 2. 플레이스홀더 교체 (macOS용 sed)
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    sed -i '' "s/{{APP_NAME}}/$APP_NAME/g" package.json
    sed -i '' "s/{{APP_TITLE}}/$APP_TITLE/g" app/layout.tsx app/page.tsx README.md
    sed -i '' "s/{{APP_DESCRIPTION}}/$APP_DESCRIPTION/g" app/layout.tsx app/page.tsx README.md
else
    # Linux
    sed -i "s/{{APP_NAME}}/$APP_NAME/g" package.json
    sed -i "s/{{APP_TITLE}}/$APP_TITLE/g" app/layout.tsx app/page.tsx README.md
    sed -i "s/{{APP_DESCRIPTION}}/$APP_DESCRIPTION/g" app/layout.tsx app/page.tsx README.md
fi

echo "✅ 플레이스홀더 교체 완료"

# 3. 루트 package.json에 dev 스크립트 추가
cd ../../
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS - dev 스크립트를 추가 (JSON 형식 유지)
    sed -i '' "s/\"dev:template\": \"turbo dev --filter=app-template\",/\"dev:template\": \"turbo dev --filter=app-template\",\n    \"dev:${APP_NAME}\": \"turbo dev --filter=${APP_NAME}\",/" package.json
else
    # Linux
    sed -i "s/\"dev:template\": \"turbo dev --filter=app-template\",/\"dev:template\": \"turbo dev --filter=app-template\",\n    \"dev:${APP_NAME}\": \"turbo dev --filter=${APP_NAME}\",/" package.json
fi

# 4. 생성 스크립트 제거
cd "apps/$APP_NAME"
rm create-new-app.sh

echo "🎉 새로운 앱 생성 완료!"
echo ""
echo "다음 단계:"
echo "1. pnpm install (의존성 설치)"
echo "2. pnpm dev:$APP_NAME (개발 서버 실행) ✨"
echo ""
echo "✅ 자동으로 'dev:$APP_NAME' 스크립트가 package.json에 추가되었습니다!"
echo ""
echo "앱 위치: apps/$APP_NAME"
