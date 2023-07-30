# Type Alias

## Type alias

```typescript
type Text = string;
const name: Text = 'Hello World';

type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: 'Byeong Min',
  age: 29,
};
```

- 새로운 타입을 정의하여 기존의 type을 대체하여 사용할 수 있다.

## String Literal Types

```typescript
type Name = 'name';

const byeongMin: Name = 'name';
```

- Name 타입에는 문자열 'name' 외에는 아무것도 들어갈 수 없다.
