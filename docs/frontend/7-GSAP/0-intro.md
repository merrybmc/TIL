# Intro

## GSAP (GreenSock Animation Platform)

greenSock 회사에서 만든 애니메이션 플랫폼으로, JavaSkcript에서 사용할 수 있는 모든 기능 (CSS, SVG, Canvas, React 등)에 애니메이션을 적용 가능하고 수많은 브라우저들의 크로스 브라우징을 지원하며 JQery보다 최대 20배 빠른 성능을 제공한다.

- GSAP 엔진을 이용해 제어할 수 있는 속성
  - Create animations
  - Configure settings
  - Register plugins, eases, and effects
  - Global control over all animations

### Install

#### html

- https://gsap.com/docs/v3/ 페이지로 이동

- CDN 복사

- ```html
  <script src="복사한 CDN"></hscript>
  ```

#### React

- npm install @gsap/react gsap

- ```react
  import { useGSAP } from '@gsap/react';
  import gsap from 'gsap';
  ```

### 주의사항

#### GSAP 객체는 보호되지 않는다.

```javascript
gsap = 'a';

console.log(gsap); // 'a'
```

- GSAP에 특정한 값을 할당해버리면 코어의 객체가 아닌 다른 값으로 할당되어버린다.
