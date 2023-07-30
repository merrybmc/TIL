# Function

## Function

```typescript
function tsAdd(num1: number, num2: number): number {
  return num1 + num2;
}
```

- 함수는 기본적으로 파라미터 뒤에는 return 될 값의 타입을 적는다.

## Optional Parameter

```typescript
function printName(firstName: string, lastName?: string) {
  console.log(firstName);
  console.log(lastName);
}

printName('Cho', 'ByeongMin'); // Cho ByeongMin
printName('Cho'); // Cho, undefined
```

- 파라미터 뒤에 ? 을 붙이면 옵셔녈 파라미터가 된다.
- 인자를 받을 수도 있고 받지 않아도 되는걸 의미한다.
- 인자를 받지 않을 경우 undefined가 출력된다.

## Default Parameter

```typescript
function printMessage(message: string = 'default Message') {
  console.log(message);
}
printMessage(); // default Message
```

- 파라미터로 아무런 값을 넣지 않을 경우 `= " "` 을 통해 default를 설정할 수 있다.

## Rest Parameter

```typescript
funtion addNumbers(...num: number[]): number {
    return num.reduce((a, b) => a + b);
}
let result = addNumbers(1, 2, 3, 4, 5);
console.log(result);
```

- 타입스크립트에서 Rest Parameter를 쓸 땐 파라미터 뒤에 `type[]`을 사용한다.
