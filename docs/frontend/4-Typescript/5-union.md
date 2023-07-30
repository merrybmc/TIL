# Union Type

- 발생할 수 있는 케이스 중에 하나를 담을 수 있는 타입을 만들 때 사용된다.
- 활용도가 굉장히 높은 타입이다.

```typescript
type Direction = 'left' | 'right' | 'top' | 'down';

function move(direction: Direction) {
  console.log(direction);
}

move('left');

type TileSize = 8 | 16 | 32;
const tile: TileSize = 16;
```
