# useCallback

- useMemo와 다르게 값이 아니라 콜백함수 그 자체를 Memoization한다.

## 기본 사용법

```react
const calculate = useCallback((num) => {
    return num + 1;
}, [item])

// (num) => { return num + 1 } = 콜백함수
```

- 의존성 배열 내부에 있는 값이 변경되지 않는 이상 calculate가 초기화되지 않는다.

## 렌더링 문제점

```react
const [number, setNumber] = useState(0);

const someFunction = () => {
  console.log(`number : ${number}`);
  return;
};

useEffect(() => {
  console.log('someFunction이 변경되었습니다.');
}, [someFunction]);

return (
  <div>
    <input type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
    <br />
    <button onClick={someFunction}>Call someFunc</button>
  </div>
  );
}
```

- 컴포넌트가 렌더링될 시 내부 변수도 초기화된다.
- number의 값이 변경될 때 의존성배열이 someFunction인 useEffect가 실행된다.
- 즉, 렌더링 될 때 렌더링 전의 변수와 렌더링 후의 메모리 주소가 다르다.
- useEffect에서의 의존성 배열은 객체 구분을 하지 못하고 렌더링이 계속 일어나게 된다.

### 해결법

```react
const someFunction = () => {
  console.log(`number : ${number}`);
  return;
}; 함수를 useCallback 으로 최적화해주기

const someFunction = useCallback(() => {
  console.log(`number : ${number}`);
  return;
}, []);
```
