# useEffect

- 리액트 라이프 사이클에서 mount, update, unmount될 때 마다 특정 명령을 수행시킬 수 있다.

## mount

```react
useEffect(()=>{
   console.log("Hello World");
},[])
```

- mount는 html 렌더링이 끝난 후 동작한다.

## update

```react
const [count,setCount] = useState(0);

useEffect(()=>{
    console.log("count update!");
},[count])
```

- count state의 값이 변화가 일어날 경우에만 동작한다.

## unmount

```react
useEffect(()=>{
   console.log("Hello");

   return () => {
       console.log("World");
   }
},[])

useEffect(()=>{
    let myTimer = setTimeout(()=> {
        console.log("타이머 종료");
    }, 2000);

    return () => {
        clearTimeout(myTimer);
    }
})
```

- return () => { } 에서 스코프 안의 동작이 컴포넌트가 unmount될 때 동작한다.
