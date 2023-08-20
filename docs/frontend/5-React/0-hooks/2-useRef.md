# useRef

- state와 비슷하게 값을 저장하는 저장공간으로 쓰일 수 있다.
- 값이 변화되지 않고 불필요한 렌더링을 막을 때 쓰일 수 있다.
- DOM 요소에 접근하여 Document.querySelector();와 같은 조작을 할 수 있다.

## 기본 반환 형태

```react
const ref = useRef("value");
console.log(ref); // current:value;
```

- 반환된 ref는 컴포넌트의 전 생애 주기를 통해 유지된다.
- 컴포넌트가 unmount 되기 전까지 값을 유지한다.

## state와 Ref의 차이

1. state : state의 값에 변화가 생기면 컴포넌트가 렌더링이 되고 내부 변수가 초기화된다.
2. ref : ref의 값에 변화가 생겨도 다시 렌더링되지 않고 값이 유지된다.

### state

```react
const [count, setCount] = useState(0);

console.log("state", count);

const increaseCountState = () => {
    setCount(count + 1);
}
```

- state의 값에 변화가 일어날 때 마다 렌더링이 되며 console.log가 찍히게 된다.

### ref

```react
const countRef = userRef(0);

console.log("ref", countRef);

const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
}
```

- countRef의 값이 변화되어도 브라우저 상에서 업데이트가 되지 않고 console.log가 찍히지 않는다.
- state 등에 의해 재렌더링이 될 때 ref 값도 브라우저 상에서 업데이트가 되고 console.log가 찍힌다.
- ref는 **값은 변화되지만 업데이트가 되지 않고 불필요한 렌더링이 일어나지 않아야할 때** 쓰면 좋다.

## DOM 접근하기

## 태그에 참조하기

```react
const inputRef = useRef();

useEffect(()=>{
   console.log(inputRef);
},[])

return (
    <input ref={inputRef} />
)
```

- 태그에 ref 속성을 사용하여 useRef를 할당한 변수를 넣어준다.

ref.current 이벤트 속성 (추후 작성)
