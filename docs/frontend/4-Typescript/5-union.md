# Union Type

## Union 타입

1. 발생할 수 있는 케이스 중에 하나를 담을 수 있는 타입을 만들 때 사용된다.
2. 활용도가 굉장히 높은 타입이다.

```typescript
type union = number | string;

let unionType = Math.random() > 0.5 ? 'Byeong Min' : 10;
```

## Union 속성

1. 타입스크립트는 유니언으로 선언한 모든 가능한 타입에 존재하는 메서드에만 접근 가능하다.

2. 유니언 외의 타입에 접근하려고 하면 타입 검사 오류가 발생한다.

```typescript
type union = number | string;

let physicist: union = Math.random() > 0.5 ? 'Byeong Min' : 10;

// number, string 타입에 모두 존재
// 사용 가능
physicist.toString();

// number 타입에 없는 메서드
// 사용 불가능
physicist.toUpperCase();

// string 타입에 없는 메서드
// 사용 가능
physicist.toFixed();
```

## 리터럴 타입

타입에 원시 타입이 아닌 특정 값을 할당한다.

```typescript
type Direction = 'left' | 'right' | 'top' | 'down';

function move(direction: Direction) {
  console.log(direction);
}

move('left');

type TileSize = 8 | 16 | 32;
const tile: TileSize = 16;
```
