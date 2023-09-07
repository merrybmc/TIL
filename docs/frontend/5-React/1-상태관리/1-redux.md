# Redux

:::info 기본 설치법
npm : npm install redux react-redux <br/>
yarn : yarn add redux react-redux
:::

## 액션(Action)

- 상태에 변화가 필요할 때, 액션을 발생시킨다.
- 액션은 하나의 객체로 표현된다.
- 액션 객체는 반드시 `type` 필드를 가져야 한다.
- 액션을 선언할 때 액션이름을 상수로 정의하고 "모듈이름/액션이름" 으로 표현하는 것이 좋다.
  - 액션 이름이 충돌되는 것을 방지할 수 있다.

```js
{
  const INCREASE = 'textsize/INCREASE';
}
```

## 액션 생성함수 (Action Creator)

- 액션 객체를 생성하는 함수이다.
- 액션 생성 함수는 액션을 생성하고 객체를 리듀서로 전달되는 중간 단계이다.
- 파라미터는 해당 액션에 필요한 정보를 전달되는데 사용된다.

```js
{
  // payload가 없을 때
  export const addTodo = () => ({ type: 'ADD_TODO' });

  // payload가 있을 때
  export const changeInput = (text) => ({ type: 'CHANGE_INPUT', payload: text });
}
```

## 리듀서(Reducer)

- 리듀서는 상태의 변화를 일으키는 함수이다.
- 기본적으로 두 가지 파라미터(state, action) 을 받아온다.
- state는 현재 상태를 의미하고 action은 수행하려는 액션을 의미한다.

```js
// 기본 형태
function reducer(state, action) {
  return state;
}
```

- 리듀서는 현재 상태와 전달받은 액션을 참고하여 새로운 상태를 만들어 반환한다.
- 리듀서는 리액트의 `useReducer` hook과 유사한 작성 형태를 가지고 있다.

#### 카운터 리듀서 예시

```js
function counter(state, action) {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      return state;
  }
}
```

- 올바른 액션이 전달되지 않았을 때 원래의 state를 반환한다.
  - 상태의 불변성 유지와 예측 가능한 결과값을 전달해주기 위해서 필요하다.
- 액션 객체에 파라미터로 받아온 데이터를 action.payload 로 사용할 수도 있다.

```js
function counter(state, action) {
  switch (action.type) {
    case 'INCREASE':
      return state + action.payload;
    case 'DECREASE':
      return state - action.payload;
    default:
      return state;
  }
}
```

:::info 리듀서 state 초기화

```js
const initialState = { number: 1 };

function reducer(state = initialState, action) {
  return state;
}
```

:::

## 루트 리듀서 (Root Reducer)

- 리덕스를 사용할 때 여러 개의 리듀서를 사용하게 될 경우 하나로 합쳐서 루트 리듀서(Root Reducer) 를 만들어줘야 한다.
  - 루트 리듀서를 만들면 모듈화 및 확장성/유지보수에 용이해질 수 있다.
- 루트 리듀서 안의 리듀서들을 서브 리듀서라고 부른다.

```js
// modules/index.js
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  subReducer1,
  subReducer2,
});

export default rootReducer;
```

## 스토어 (Store)

- 리덕스는 한 애플리케이션당 하나의 스토어를 가지게 된다.
- 스토어는 애플리케이션의 전역 상태를 담고있다.
- 스토어 안에는 현재의 앱 상태, 리듀서 및 추가 내장함수가 들어있다.

```js
// index.js
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';

const store = createStore(rootReducer);

<Provider store={store}>
  <App />
</Provider>;
```

- 스토어를 생성하기 위해 `createStore` 함수를 사용한다. 이 함수는 파라미터로 루트 리듀서를 받아온다.
- 리액트 컴포넌트 트리를 감싸기 위해 Provider로 `<App/>`을 감싸서 컴포넌트가 스토어에 접근가능하게 해준다.

:::danger 주의사항

- 스토어는 전역 상태를 관리하므로 신중하게 사용하여야 한다.
  - 우후죽순 필요 이상으로 많은 상태들을 스토어에 저장하면 성능 저하가 일어날 수 있다.
- 스토어는 불변성을 유지해야 하므로 상태를 직접 수정하는 경우는 있어선 안된다.
  - 스토어를 통한 상태 변경은 반드시 액션을 통해서만 이루어져야 한다.

:::

## 리덕스 규칙

### 1. 하나의 애플리케이션에는 하나의 스토어가 존재해야 한다.

- 여러 개의 스토어를 사용하는 것도 가능은 하지만 권장되지 않는다.
- 상태 관리가 일관되고 예측 가능한 상태를 유지하여야 한다.
  :::caution 여러개의 스토어를 만드는 예외 경우
  - 특정 업데이트가 너무 빈번하게 일어나거나 애플리케이션의 특정 부분을 완전히 분리시킬 때<br/>
    - 하지만 이렇게할 경우 개발 도구를 활용하지 못하게 된다.

### 2. 상태는 읽기전용이다.

- 상태는 절대로 직접 변경해서는 안되며 리덕스 역시 불변성을 유지하여야 한다.
- 리덕스에서 불변성을 유지해야하는 이유는 내부적으로 데이터가 변경되는 것을 감지하여 **shallow equality** 검사를 하기 때문이다.

#### **shallow equality (얕은 동등성)**

- 상태 변경을 감지하고 업데이트를 효율적으로 처리하는데 중요한 개념중에 하나이다.
- 컴포넌트가 리렌더링되는 시점과 상태 업데이트가 어떻게 처리되는지에 관련이 있다.
- 리덕스에서는 상태 업데이트 시 shallow equality를 통해 이전 상태롸 새로운 상태를 비교한다.
- 만약 상태 업데이트가 일어난 후 상태의 내용이 이전과 동일한 경우 컴포넌트는 리렌더링되지 않는다.
- 이는 불필요한 렌더링을 방지하고 성능을 향상시키는데 도움이 된다.

shallow equality 코드 예시

```js
// 이전 상태
const prevState = { data: [1, 2, 3] };

// 새로운 상태
const newState = { data: [1, 2, 3] };

// shallow equality 비교
console.log(prevState === newState); // false 서로 메모리 주소가 다른 객체
console.log(prevState.data === newState.data); // true 같은 배열의 내용을 참조
```

- 같은 배열의 내용을 참조한다면 컴포넌트는 리렌더링되지 않는다.

### 3. 리듀서는 순수한 함수여야 한다.

- 리듀서는 순수 함수여야 한다.
- 리듀서 함수는 이전의 state와 액션 객체를 파라미터로 받는다.
- 이전의 상태는 절대로 변화가 일어나지 않고, 변화가 일어난 새로운 상태 객체를 반환한다.
- 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과값을 반환해야한다.
  - 동일한 input이라면 언제나 동일한 output이 있어야한다.
    - new Date같은 함수는 리듀서가 아닌 함수 바깥에서 처리해주어야 한다.

## useSelector

- 리덕스 라이브러리의 커스텀 훅(custom hook) 이다.
- 리덕스 스토어의 상태를 컴포넌트에서 읽어오기 위해 사용된다.
- 이 hook을 사용하게 될 경우 상태를 구독(subscribe)하게 되고 상태가 변경될 때마다 리렌더링된다.

사용 방법

```js
import { useSelector } from 'react-redux';
```

1. import 문을 통해 useSelector hook을 react-redux 라이브러리부터 가져온다.

```js
// reducer
const initialState = {
  number: 0,
};

function changeInput(state = initialState, action) {}

// useSelector
const allValue = useSelector((state) => state);
const number = useSelector((state) => state.changeInput.number); // 0
```

2. useSelector의 콜백 함수로 스토어의 전체 상태를 받아올 수 있다.
3. 특정 상태의 값만 불러오려면 useSelector의 콜백 함수로 state.리듀서이름.키값 까지 접근 가능하다.

## dispatch

- 리덕스 스토어에게 액션을 전달하여 상태를 업데이트하는 함수이다.

사용방법

```js
import { useDispatch } from 'react-redux';

const dispatch = useDispatch();
```

1. import 문을 통해 useDispatch 함수를 react-redux 라이브러리로부터 가져온다.

2. 컴포넌트에서 useDispatch 함수를 사용하기 위해 변수를 선언 및 할당한다.

```js
// reducer
export const increase = (number) => ({ type: INCREASE });
export const getIncrease = (number) => ({ type: GET_INCREASE, payload: number });

const initialState = {
  number: 0;
};

function changeNumber(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
        return {
            state: state++;
        }
      case GET_INCREASE:
        return {
            state: state + action.payload;
        }
    default:
        return state;
  }
}

// dispatch
import { getIncrease } from "../modules/number"

return(
    // type 필드를 통해 업데이트
    <button onClick=(()=>{dispatch({type:"INCREASE"})})> 증가 </button>
    // 액션을 통해 업데이트
    <button onClick=(()=>{dispatch({getIncrease(10)})})> 증가 </button>
  )
```
