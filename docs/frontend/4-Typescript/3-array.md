# Array

## Array

```typescript
// 1번째 선언 방법
const fruits: string[] = ['tomato', 'banana'];

// 2번째 선언 방법
const scores: Array<number> = [1, 2, 3, 4];
```

- 변수 이름 다음에 `: type[]` 으로 배열을 선언할 수 있다.
- 변수 이름 다음에 `: Array<type>` 으로 배열을 선언할 수 있다.

## Readonly

```typescript
function printArray(fruits: readonly string[]) {
  friuts[0] = 'apple'; // 변경 불가능
  console.log(fruits);
}
```

- object의 내용을 함수 내부에서 변경할 수 없다.
- object의 불변성을 보장해주어야 하기 때문에 자주 쓰인다.

## Tuple

```typescript
let students: [string, number];
students = ['hello', 123];
console.log(students[0]);
console.log(students[1]);
```

- 출력을 할 때 인덱스 번호를 통해 해주어야 한다.
- 리액트의 useState와 유사하다.
- 사용하는 것을 권장하지 않는다.
- 나중에 interface, type alias, class로 대체해서 사용된다.
