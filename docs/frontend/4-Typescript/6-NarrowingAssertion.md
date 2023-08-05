# Narrowing / Assertion

## Intro

```typescript
function func1(x: number | string) {
  console.log(x + 1); // error
  console.log(x + '1'); // error
}

func1(1);
func1('1');
```

- 이 경우 타입스크립트가 엄격하게 `number | string` 타입을 검사한다.
- javascript처럼 이 경우 string + 1, number + "1" 이 불가능하다.

## Narrowing

타입을 검사하여 위의 방법을 해결 가능하다.

- 해결 방법은 총 3가지가 있다.
  - typeof 변수
  - 속성명 in 오브젝트 자료
  - 인스턴스 instanceof 부모

```typescript
function func1(x: number | string) {
  if (typeof x === 'string') {
    console.log(x + 1);
  } else if (typeof x === 'number') {
    console.log(x + '1');
  }
}
func1(1);
func1('1');
```

- 조건문을 통해 타입 검사를 하면 javascript 처럼 x + 1, x + "1" 이 가능해진다.

## Assertion

1. Narrowing과 비슷하게 위의 문제를 해결하기 위해 사용된다.

2. 무슨 타입이 들어와야하는지 확실히 필요할 때 써야 한다.

```typescript
function myArr(x: number | string) {
  let array: number[] = [];
  array[0] = x as number; // ok
  array[0] = x; // 불가능
}
```

- x의 타입은 `number | string` 이라 array 배열에 할당할 수 없다.
- `변수 as type`으로 array 배열에 number를 할당할 수 있게 된다.

:::danger

```typescript
let name: string = 'Cho';
name as number; // 금지
```

assertion은 타입을 변경할 때 쓰는 문법이 절대 아니다.

:::
