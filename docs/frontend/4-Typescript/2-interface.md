# Interface

## 타입 별칭

```typescript
type Poet = {
  born: number;
  name: string;
};
```

## 인터페이스

```typescript
Interface Poet {
    born: number;
    name: string;
}
```

- 인터페이스도 객체 타입과 여러 면에서 유사하다.
- 일반적으로 더 읽기 쉬운 오류 메세지, 더 빠른 컴파일러 성능, 클래스와의 상호 운용성을 위해 사용된다.
- 할당 가능성과 오류 메세지는 객체 타입과 동일하다.

:::info 타입 별칭과 인터페이스의 주요 차이점

- 인터페이스는 속성 증가를 위해 병합할 수 있다. 내장된 전역 인터페이스를 사용할 때 유용하다.
- 인터페이스는 클래스가 선언된 구조의 타입을 확인하는데 사용할 수 있다.
- 인터페이스가 객체 타입보다 타입 검사기가 더 빨리 작동한다.
- 새로운 객체 리터럴의 동적인 복사보다 내부적으로 더 쉽게 캐시할 수 있는 명명된 타입을 선언한다.
- 인터페이스는 이름 없는 객체 리터럴의 별칭이 아닌걸로 간주된다.
  이로 인해 어려운 특이케이스에서 나타나는 오류 메세지를 좀 더 쉽게 읽을 수 있다.

:::

## 선택적 속성

```typescript
interface Book {
    author?: string;
    pages: number;
}

const ok: Book = {
    pages: 100;
}
```

- 인터페이스 안의 타입에 `?` 을 사용해 선택적 속성임을 명시 가능하다.

## 읽기 전용 속성

```typescript
interface Page {
  readonly text: string;
}

function read(page: Page) {
  console.log(page.text);
}
```

- 타입의 이름 앞에 readonly를 명시하면 속성을 재할당하지 못하도록 한다.

## 인덱스 시그니처

```typescript
interface WordCounts {
    [i: string]: number;
}

const counts: WordCounts = {
    "apple" = 0,
    "banana" = 1
};
```

- 객체가 임의의 키를 받고 해당 키 아래의 특정 타입을 반환할 수 있다.

## 인터페이스 확장

```typescript
interface Writing {
  title: string;
}

interface author {
  author: string;
}

interface pages extends Writing, author {
  pages: number;
  // + title: string;
  // + author: string;
}
```

- 인터페이스의 이름 뒤에 extends 키워드를 추가하면 다른 인터페이스를 확장한다.
