---
title: "Two Forms of Pre-rendering"
date: "2020-01-01"
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-
side Rendering**. The difference is in **when** it generates the HTML for a

page.
markdown 파일이란..?
**Markdown**은 텍스트 기반의 마크업언어로 쉽게 쓰고 읽을 수 있으며 HTML로 변환이 가능
합니다. 특수기호와 문자를 이용한 매우 간단한 구조의 문법을 사용하여 웹에서도 보다 빠르게
컨텐츠를 작성하고 보다 직관적으로 인식할 수 있습니다. 마크다운이 최근 각광받기 시작한 이
유는 깃헙(https://github.com)에서 사용하는 README.md 덕분입니다. 마크다운을 통해서 설치
방법, 소스코드 설명, 이슈 등을 간단하게 기록하고 가독성을 높일 수 있다는 강점이 부각되면서
점점 여러 곳으로 퍼져가게 되고 있습니다.

- **Static Generation** is the pre-rendering method that generates the HTML
  at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the
  HTML on **each request**.
  Importantly, Next.js lets you **choose** which pre-rendering form to use for
  each page. You can create a "hybrid" Next.js app by using Static Generation
  for most pages and using Server-side Rendering for others.
