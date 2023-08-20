# useReducer

- state 관리를 위한 hook 이다.
- 여러개의 하위 값을 포함하는 복잡한 state를 다룰 때 사용하면 좋다.

- useReducer는 3가지로 이루어져 있다.
  1. reducer - state를 업데이트 해주는 역할
  2. dispatch - reducer에게 요구사항 전달
  3. action - 요구사항의 내용

## 사용 방법

```react
import { useReducer, useState } from "react";

// reducer는 parameter 2가지를 받는다.
// 1. state
// 2. action
const reducer = (state, action) => {
    switch (action.type) {
        case "sum":
            return state + action.payload;
        default:
            // type이 일치하지 않는게 들어오면 이전 state를 리턴한다.
            return state;
    }
}

function App() => {
    const [number, setNumber] = useState(0);
    // useReducer는 parameter 2가지를 받는다.
    // 1. reducer
    // 2. 초기값
    const [money, dispatch] = useReducer(reducer, 0);

    return (
      <input type='number' value={number} onChange{(e) => setNumber(e.target.value))}/>
      <button onClick={() => {
        dispatch({type: "sum", payload: number});
      }}>더하기</button>
    )
}

```
