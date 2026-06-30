# 바이브코딩 항해일지 (The Vibe Coding Log) — 랜딩 페이지

『바이브코딩 항해일지』를 소개하는 공식 랜딩 페이지입니다. 방문자가 **책의 가치 이해 → 목차 확인 → 학습 효과 이해 → GitHub 예제 확인 → 완성 앱 체험 → 교보문고 구매**로 자연스럽게 이어지도록 설계된 CTA 중심 정적 웹사이트입니다.

순수 **HTML5 / CSS3 / Vanilla JavaScript**로만 제작되어, 별도의 프레임워크나 빌드 도구 없이 브라우저만 있으면 실행됩니다.

🔗 저장소: <https://github.com/junsang-dong/vibocoding-260630-book-landing-page>

## 프로젝트 구조

```
.
├── index.html          # 전체 섹션 마크업
├── css/
│   └── style.css       # Reset · 변수 · 타이포 · 레이아웃 · 컴포넌트 · 애니메이션 · 반응형
├── js/
│   └── script.js       # 스무스 스크롤 · 아코디언 · 스크롤 애니메이션 · 카운터 · Back to Top 등
├── images/             # 로고, 표지, 스크린샷 등 SVG 플레이스홀더
├── .editorconfig       # 에디터 인코딩(UTF-8) 강제
└── README.md
```

## 화면 구성

Navigation · Hero · 책 소개 · 왜 이 책인가 · 학습 로드맵 · 예제 프로젝트 · GitHub 리소스 · 목차(아코디언) · 저자 소개 · 구매 CTA · Footer

## 주요 기능

- **Sticky Navigation** + 스크롤 시 그림자, 모바일 햄버거 메뉴
- **Smooth Scroll** (`scrollIntoView`)
- **Active Menu Highlight** (IntersectionObserver)
- **Scroll Reveal 애니메이션** (IntersectionObserver, Fade In + Slide Up)
- **Hero 진입 애니메이션** (CSS only: Fade / Slide / Scale)
- **Counter Animation** (0 → 30 프로젝트 카운트업)
- **Accordion 목차** (`classList.toggle`)
- **Back to Top** 버튼
- **반응형** (Desktop 1200px / Tablet 768px / Mobile 480px, Grid 4열 → 2열 → 1열)
- **SEO** (title / description / keywords / Open Graph / favicon)
- **접근성** (이미지 alt, 키보드 포커스, 명암비, 시맨틱 heading, `prefers-reduced-motion` 지원)

## 실행 방법

`index.html`을 더블 클릭해 브라우저로 열거나, 로컬 서버로 실행합니다.

```bash
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

## 색상 / 폰트

| 구분 | 값 |
| --- | --- |
| Primary | `#1E3A8A` |
| Secondary | `#3B82F6` |
| Accent | `#F59E0B` |
| Background | `#F8FAFC` |
| Text | `#1F2937` |

폰트: **Pretendard** → Noto Sans KR → sans-serif (fallback)

## 주요 링크

| 구분 | 링크 |
| --- | --- |
| 책 소개 페이지 | https://nextplatform.net/book-the-vibe-coding-log-a-30-day-voyage/ |
| GitHub 소스코드 모음 | https://nextplatform.net/book-the-vibe-coding-log-a-30-day-voyage-github-repos/ |
| Day 1 랜딩 페이지 예제 | https://github.com/junsang-dong/vibecoding-day01-landing-page |
| 교보문고 도서 페이지 | https://product.kyobobook.co.kr/detail/S000219726261 |

## 작업 내역 (Changelog)

### 주요 작업 내용

- 기술명세서를 기반으로 11개 섹션(Navigation ~ Footer)을 갖춘 랜딩 페이지를 신규 제작했습니다.
- 명세의 컬러 팔레트 5종과 Pretendard 폰트 체계를 그대로 적용했습니다.
- 명세에 정의된 6가지 핵심 JavaScript 기능을 모두 구현했습니다.
  1. Smooth Scroll (`scrollIntoView`)
  2. Fade Animation (IntersectionObserver)
  3. Accordion (`classList.toggle`)
  4. Back to Top 버튼
  5. Active Menu Highlight
  6. Counter Animation (0 → 30)
  - 추가로 모바일 햄버거 메뉴, Sticky Nav 그림자 효과를 보강했습니다.
- Hero 진입 애니메이션을 명세 요구대로 **CSS만** 사용하여 Fade In + Slide Up + Scale로 구현했습니다.
- 반응형 Grid(4열 → 2열 → 1열)와 SEO 메타 태그(Open Graph, favicon 포함), 웹 접근성을 적용했습니다.
- 책 표지·스크린샷·저자·로고·GitHub 아이콘을 가벼운 **SVG 플레이스홀더**로 제작해 외부 의존성 없이 즉시 실행 가능하도록 했습니다.
- 명세의 참고 링크(교보문고, GitHub 저장소, 블로그, Day 1 예제)를 모든 CTA 버튼에 연결했습니다.

### 오류 수정 / 개선 사항

- **README 한글 인코딩 깨짐 수정**: README.md가 UTF-8이 아닌 단일바이트 인코딩으로 저장되어 한글이 모두 `?`로 손실되던 문제를 UTF-8로 다시 작성해 복구했습니다. 재발 방지를 위해 `.editorconfig`(charset = utf-8)를 추가했습니다.
- **프로젝트 디렉터리 구조 정리**: 초기 `vibe-book-landing/` 하위에 있던 파일들을 저장소 **root 위치**로 이동하여, GitHub Pages 등에서 별도 경로 설정 없이 바로 배포되도록 수정했습니다.
- **Hero 애니메이션 충돌 해결**: Hero 섹션 요소는 로드 시 CSS 애니메이션으로 나타나는데, 스크롤 리빌(`.reveal`)용 `opacity:0` 규칙과 겹쳐 보이지 않던 문제를 `.hero .reveal { opacity:1 }` 예외 처리로 해결했습니다.
- **접근성 보강**: 모든 이미지 `alt` 제공, 버튼 `:focus-visible` 포커스 링, `prefers-reduced-motion` 사용자 환경에서 애니메이션 비활성화 처리를 추가했습니다.
- **아코디언 동작 정리**: 한 번에 하나의 항목만 열리도록 하고, `aria-expanded` 상태를 토글하여 스크린 리더 호환성을 확보했습니다.
- **불필요한 시스템 파일 제거**: 커밋에 포함될 수 있는 `.DS_Store`를 `.gitignore`로 제외했습니다.

## 배포

정적 사이트이므로 **GitHub Pages** 또는 **Vercel**에 그대로 올려 배포할 수 있습니다.

- GitHub Pages: 저장소 Settings → Pages → 브랜치(`main`) / 루트(`/`) 선택 후 배포
- Vercel: 프로젝트 import 후 별도 설정 없이 배포

> `images/` 안의 파일들은 SVG 플레이스홀더입니다. 실제 책 표지·스크린샷·저자 사진으로 교체해 사용하세요.

---

© 2026 The Vibe Coding Log · NextPlatform
