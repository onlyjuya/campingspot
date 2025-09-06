# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)가 이 저장소에서 작업할 때 지침을 제공합니다.

**중요**: 이 프로젝트에서 작업할 때는 모든 응답을 한글로 작성하세요.

## 개발 명령어

**작업 디렉토리**: 루트가 아닌 `campingspot/` 하위 디렉토리에서 항상 작업하세요.

- `npm start` - 개발 서버 시작 (http://localhost:3000에서 실행)
- `npm run build` - 프로덕션 빌드
- `npm test` - 테스트를 감시 모드로 실행
- `npm run eject` - Create React App에서 분리 (되돌릴 수 없는 작업)

## 프로젝트 구조

**프레임워크**: Create React App 기반 React 18+
**라우팅**: React Router DOM v6+ 
**스타일링**: 커스텀 설정이 적용된 Tailwind CSS
**UI 라이브러리**: 아이콘용 Lucide React
**날짜 처리**: date-fns 및 react-date-range

### 주요 디렉토리
- `src/components/` - 재사용 가능한 UI 컴포넌트 (Button, Modal, Card 등)
- `src/pages/` - 라우트 레벨 페이지 컴포넌트 (Home, Detail, Reserve 등)
- `public/` - 정적 에셋

### 애플리케이션 구조
모바일 우선 캠핑 예약 앱:
- **메인 레이아웃**: Header + 라우터 콘텐츠 + BottomNav
- **페이지들**: Home, Detail, Reserve, CampingDetail, Mypage, History
- **내비게이션**: 모바일 UX를 위한 하단 내비게이션
- **반응형**: 회색 배경의 최대 너비 컨테이너 (max-w-lg)

### 컴포넌트 패턴
- 훅을 사용하는 함수형 컴포넌트
- 스타일링을 위한 Tailwind CSS 클래스 사용
- 전체적으로 한국어 UI 텍스트 사용
- 컴포넌트 파일은 `.jsx` 확장자 사용
- `/components/` 폴더의 재사용 가능한 컴포넌트

### 스타일링 설정
- **Tailwind**: 커스텀 `max-w-content` 클래스 (72rem/1152px)
- **PostCSS**: Tailwind 및 Autoprefixer로 구성
- **색상 테마**: 에메랄드 주색상, 회색 배경