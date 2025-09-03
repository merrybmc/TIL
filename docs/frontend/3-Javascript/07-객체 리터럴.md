# 객체 리터럴

- 자바스크립트는 객체 기반의 프로그래밍 언어이다.
- 원시 타입은 단 하나의 값만 나타내지만, 객체 타입은 다양한 타입의 값을 하나의 단위로 구성한 복합적인 자료구조다.
- 객체는 0개 이상의 프로퍼티로 구성된 집합이며, 프로퍼티는 key와 value으로 구성된다.

## 프로퍼티

```javascript
var person = {
  // 프로퍼티 키는 name, 프로퍼티 값은 'Cho'
  name: "Cho",
  // 프로퍼티 키는 age, 프로퍼티 값은 20
  age: 20,
};
```

- 객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다.
- 프로퍼티를 나열할 때 쉼표(,) 로 구분한다.

### 프로퍼티 접근

```javascript
var person = {
  name: "Cho",
  age: 20,
};

// 마침표 표기법
console.log(person.name); // 'Cho'

// 대괄호 표기법
console.log(person["name"]); //
```

### 프로퍼티 값 갱신

```javascript
var person = {
  name: "Cho",
  age: 20,
};

person.name = "Kim";

console.log(person.name); // 'Kim'
```

### 프로퍼티 동적 생성

```javascript
var person = {
  // 프로퍼티 키는 name, 프로퍼티 값은 'Cho'
  name: "Cho",
};

person.age = 20;

console.log(person.age); // 20
```

- 존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고 값이 할당된다.

### 프로퍼티 값 삭제

```javascript
var person = {
  name: "Cho",
  age: 20,
};

delete person.age;

console.log(person); // {name: 'Cho'}
```

### 프로퍼티 축약 표현

```javascript
var name = "Cho";
var age = 20;

var person = {
  name,
  age,
};

console.log(person); // {name: 'Cho', age: 20}
```

- ES6에서 추가된 문법이다.
- 프로퍼티 값으로 변수를 사용하는 경우 프로퍼티 키가 동일한 이름일 때 프로퍼티 키를 생략할 수 있다.

## 메서드

```javascript
var circle = {
    radius: 5 // 프로퍼티

    getDiameter() { // 메서드
        return 2 * this. radius; // this는 circle을 가리킨다.
    }
};

console.log(circle.getDiameter()); // 10
```

- 프로퍼티의 값이 함수일 경우, 일반 함수와 구분하기 위해 메서드라 부른다.
