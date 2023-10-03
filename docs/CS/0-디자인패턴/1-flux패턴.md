# flux 패턴

- 단방향 데이터 흐름을 통해 보다 예측 가능하게 상태를 관리할 수 있는 디자인 패턴이다.
  - 데이터를 추적하기 쉬워서 데이터를 일관성있게 관리할 수 있다.
  - 테스팅하기에 용이하다.
  - 버그를 찾기 쉽다.
- facebook에서 만든 디자인 패턴이다.
- MVC 패턴에서 관계가 복잡해지는걸 해결하기 위해 나온 패턴이다.
  - 단방향인 flux와 다르게 Model과 View의 양방향적인 구조를 가지고 있다.
  - 데이터가 일관성있게 공유가 안되는 문제점이 있다.

## flux 패턴의 구조

- Action이 존재하며 Action을 관리하는 Dispatcher가 존재한다.
- Dispatcher를 기반으로 어떠한 상태값을 담아두고 관리하는 Store가 있다.

![image](https://github.com/merrybmc/TIL/assets/65064563/2928b86d-835e-4426-8311-c4b705f4bc13)

- Description
  - Action : 사용자의 행동 즉, 이벤트를 담당한다.
  - Dispatcher : 이벤트로부터 만들어진 객체를 Dispatcher에 전달한다.
    - 액션의 타입에 따라 어떠한 행동을 할지 결정한다.
    - 코드 레벨 수준에서는 switch, 리액트에서는 useReducer와 비슷한 형태를 사용한다.
    - action으로부터 switch가 실행되고 return되어진 값을 Store에 전달한다.
  - Store : 상태를 관리하고 저장을 하는 역할을 한다.
    - 상태는 사용자의 상태가 될 수도 있고 어플리케이션의 상태가 될 수도 있다.
  - View : 사용자가 보는 Interface를 나타낸다.
- Action -> Dispatcher -> Store -> View 형태로 단방향적인 흐름을 가지고 있는게 flux 패턴이다.

## flux 패턴이 적용된 redux

- redux는 flux 패턴을 기반으로 만들어진 라이브러리이다.

![image](https://github.com/merrybmc/TIL/assets/65064563/6e3f11df-c535-407f-ab42-1badcdb361ec)
