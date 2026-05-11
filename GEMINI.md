# GEMINI.md

이 파일은 `redwing773.github.io` 프로젝트의 구조와 개발 지침을 제공합니다.

## 프로젝트 개요

사용자 채지민의 경력 기술 위주 포트폴리오 웹사이트이자 Hacker News API를 활용한 뉴스 뷰어 서비스입니다. Vue.js 2와 관련 생태계 기술을 사용하여 구축된 단일 페이지 애플리케이션(SPA)입니다.

- **주요 기술:** Vue.js v2.7, Vuex v3, Vue Router v3, Axios, Chart.js, Sass
- **빌드 도구:** Vue CLI v5
- **저장소:** [GitHub Repository](https://github.com/redwing773/redwing773.github.io.git)

## 아키텍처 및 개발 컨벤션

### 1. 라우팅 및 데이터 프리페칭 (Navigation Guards)

사용자 경험 향상을 위해 페이지 이동이 완료되기 전 데이터를 미리 로드합니다.

- **파일:** `src/routes/index.js`
- **로직:** `beforeEnter` 가드 내에서 `FETCH_LIST` 액션을 호출하고, 성공 시에만 페이지를 전환합니다. 데이터 로딩 중에는 `bus`를 통해 스피너를 제어합니다.

### 2. 상태 관리 (Vuex)

상태 변화 로직을 모듈화하여 관리합니다.

- **State:** `news`, `ask`, `jobs`, `user`, `item`, `list` 등의 데이터를 중앙 집중식으로 관리.
- **Actions (`src/store/actions.js`):** 비동기 API 호출 처리. 최신 코드에서는 `async/await` 패턴을 사용하여 가독성을 높였습니다.
- **Mutations (`src/store/mutations.js`):** 상태를 직접 변경하는 동기적 작업 수행.

### 3. API 통신

- **Base URL:** `https://api.hnpwa.com/v0/`
- **구조:** `src/api/index.js`에서 모든 API 함수를 정의하고 익스포트하여 사용합니다.

### 4. 공통 로직 및 유틸리티

- **Event Bus (`src/utils/bus.js`):** 전역 스피너 제어 등 컴포넌트 간 통신에 사용됩니다.
- **Mixins (`src/mixins/ListMixin.js`):** 재사용 가능한 라이프사이클 훅이나 메서드를 관리합니다. 현재 스피너 종료 로직 등이 포함되어 있습니다.

## 빌드 및 실행 가이드

- **의존성 설치:**
  ```bash
  npm install
  ```
- **개발 서버 실행:**
  ```bash
  npm run serve
  ```
  _참고: `sass` 감시 모드와 `vue-cli-service`를 병렬로 실행합니다._
- **프로덕션 빌드:**
  ```bash
  npm run build
  ```
- **린트 체크 및 자동 수정:**
  ```bash
  npm run lint
  ```

## 주의 사항

- **Legacy 파일:** `legacy/` 디렉토리는 과거 버전의 데이터(2019~2020)를 포함하고 있으므로 수정 시 주의가 필요합니다.
- **SCSS:** 스타일 수정 시 `public/css/scss/style.scss`를 편집하며, 빌드 시 압축된 CSS로 변환됩니다.
- **브라우저 지원:** `browserslist` 설정에 따라 최신 2개 버전 및 점유율 1% 이상의 브라우저를 지원합니다.
