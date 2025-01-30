# Intro

## GSAP (GreenSock Animation Platform)

- 공식 문서 (https://gsap.com/)

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
  import { useRef } from 'react'

  export default function App() {
      const container = useRef();

      useGSAP(()=>{ gsap.to('.box') }, { scope: container })

      return (
          <div ref={container}>
              <div className='box'></div>
          </div>)
  ```

- useGSAP

  - 콜백 객체 : GSAP method
  - 의존성 객체 : scope: Ref container (해당 ref가 적용된 상위 태그 안에서만 method가 작동)

:::danger GSAP 객체는 보호되지 않는다.

```javascript
gsap = 'a';

console.log(gsap); // 'a'
```

- GSAP에 특정한 값을 할당해버리면 코어의 객체가 아닌 다른 값으로 할당되어버린다.

- basic property

| gsap                                 | description                                     |
| ------------------------------------ | ----------------------------------------------- |
| gsap.getProperty( target, property ) | gsap에 적용된 property의 정보를 확인할 수 있다. |
