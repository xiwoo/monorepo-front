# monorepo-front

Turborepo 기반 프론트엔드 모노레포 구성. 관리자와 서비스 앱이 설정·에러 처리를 각자
복제하지 않도록 공용 패키지로 분리했다.

- `apps/admin` · `apps/service` — 독립 배포되는 두 앱
- `packages/error` — 공용 에러 타입·처리
- `packages/eslint-config-custom` · `packages/tsconfig` — 린트·타입 설정 단일화

## 실행

```bash
npm install
npm run dev   # turbo run dev
```

## 스택

Turborepo · Prettier(prettier-plugin-tailwindcss) · TypeScript
