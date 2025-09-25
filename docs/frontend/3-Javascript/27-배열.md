# 배열

## 배열이란?

- 여러 개의 값을 순차적으로 나열한 자료구조다.
- 사용 빈도가 매우 높은 가장 기본적인 자료구조다.
- 자바스크립트는 배열을 다루기 위한 유용한 메서드를 다수 제공한다.

```javascript
// apple의 index = 0
// banana의 index = 1
// orange의 index = 2
const arr = ["apple", "banana", "orange"];

// 요소에 접근할 때는 대괄호 표기법을 사용한다. 대괄호 내에는 접근하고 싶은 요소의 인덱스를 지정한다.
arr[0]; // 'apple'
arr[1]; // 'banana'
arr[2]; // 'orange'

// 배열은 요소의 개수, 즉 배열의 길이를 나타내는 legnth 프로퍼티를 갖는다.
arr.length; // 3

// 배열의 순회
// 배열은 인덱스와 legnth 프로퍼티를 통해 for문으로 순차적으로 요소에 접근할 수 있다.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 'apple' 'banana' ' orange'
}

// 자바스크립트에 배열이라는 타입은 존재하지 않는다. 객체 타입이다.
typeof arr; // object
```

- 배열이 가지고 있는 값을 **요소(element)** 라고 부른다.
- 자바스크립트의 모든 값은 배열의 요소가 될 수 있다.<br/>원시값은 물론 객체, 함수, 배열 등 자바스크립트에서 값으로 인정하는 모든 것은 배열의 요소가 될 수 있다.
- 배열의 요소는 배열에서 자신의 위치를 나타내는 0 이상의 정수인 **인덱스**를 갖는다.
- 인덱스는 배열의 요소에 접근할 때 사용된다.
- 배열은 객체지만 일반 객체와는 구별되는 독특한 특징이 있다.

| 구분            | 객체                                        | 배열          |
| --------------- | ------------------------------------------- | ------------- |
| 구조            | 프로퍼티 키와 프로퍼티 값 `{ key : value }` | 인덱스와 요소 |
| 값의 참조       | 프로퍼티 키                                 | 인덱스        |
| 값의 순서       | X                                           | O             |
| length 프로퍼티 | X                                           | O             |

```javascript
const arr = [1, 2, 3, 4];

// 순차적으소 접근
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 1 2 3 4
}

// 역순으로 접근
for (let i = arr.length; i < 0; i--) {
  console.log(arr[i]); // 4 3 2 1
}

// 특정 위치부터 특정 요소에만 접근
for (let i = 1; i < arr.length; i + 2) {
  console.log(arr[i]); // 2 4
}
```

## 배열 생성

### 배열 리터럴

- 객체와 마찬가지로 배열도 다양한 생성 방식이 있다.
- 가장 일반적이고 간편한 배열 생성 방식은 배열 리터럴을 사용하는 것이다.

```javascript
const arr = [1, 2, 3];
console.log(arr.length);
```

- 배열 리터럴은 0개 이상의 요소를 쉼표로 구분하여 대괄호([])로 묶는다.<br/>
  배열 리터럴은 객체 리터럴과 달리 프로퍼티 키가 없고 값만 존재한다.

```javascript
const arr = [];
console.log(arr.length); // 0
```

- 배열 리터럴에 요소를 하나도 추가하지 않으면 배열의 길이, 즉 length 프로퍼티 값이 0인 빈 배열이 된다.

```javascript
const arr = [1, , 3]; // 희소 배열

// 희소 배열의 legnth는 배열의 실제 요소 개수보다 언제나 크다.

console.log(arr.length); // 3
console.log(arr); // [1, empty, 3];
console.log(arr[1]); // undefined
```

- 위 예제의 arr은 인덱스가 1인 요소를 갖지 않는 희소 배열이다.<br/>
  arr[1]이 undefined인 이유는 사실 객체인 arr에 프로퍼티 키가 '1'인 프로퍼티가 존재하지 않기 때문이다.<br/>
  희소 배열의 사용은 지양된다.

### Array 생성자 함수

- Object 생성자 함수를 통해 객체를 생성할 수 있듯이 Array 생성자 함수를 통해 배열을 생성할 수도 있다.
- Array 생성자 함수는 전달된 인수의 개수에 따라 다르게 동작하므로 주의가 필요하다.

```javascript
const arr = new Array(10);

console.log(arr); // [empty * 10]
console.log(arr.length);
```

- 이 때 생성된 배열은 희소 배열이다. length 프로퍼티 값은 0이 아니지만 실제로 배열의 요소는 존재하지 않는다.

```javascript
new Array(); // []
```

- 전달된 인수가 없는 경우 빈 배열을 생성한다. 배열 리터럴 []과 같다.

```javascript
// 전달된 인수가 2개 이상이면 인수를 요소로 갖는 배열을 생성한다.
new Array(1, 2, 3);

// 전달된 인수가 1개지만 숫자가 아니면 인수를 요소로 갖는 배열을 생성한다.
new Array({}); // [{}]
```

### Array.of

```javascript
Array.of(1); // 1
Array.of(1, 2, 3); // [1, 2, 3]
Array.of("string"); // ['string']
```

- ES6에서 도입된 Array.of 메서드는 전달된 인수를 요소로 갖는 배열을 생성한다.
- Array.of는 Array 생성자 함수와 다르게 전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성한다.

### Array.from

```javascript
// 유사 배열 객체를 반환하여 배열을 생성한다.
Array.from({ length: 2, 0: "a", 1: "b" }); // ['a', 'b']

// 이터러블을 변환하여 배열을 생성한다. 문자열은 이터러블이다.
Array.from("Hello"); // ['H', 'e', 'l', 'l', 'o']
```

- ES6에서 도입된 Array.from 메서드는 유사 배열 객체 또는 이터러블 객체를 인수로 전달받아 배열로 변환하여 반환한다.

## 배열 요소의 참조

```javascript
const arr = [1, 2];

// 인덱스가 0인 요소를 참조
console.log(arr[0]); // 1
// 인덱스가 1인 요소를 참조
console.log(arr[1]); // 2
```

- 배열의 요소를 참조할 때는 대괄호([]) 표기법을 사용한다.
- 대괄호 안에는 인덱스가 와야 한다.
- 인덱스는 값을 참조할 수 있다는 의미에서 객체의 프로퍼티 키와 같은 역할을 한다.

```javascript
const arr = [1, 2];

console.log(arr[2]);
```

- 존재하지 않는 요소에 접근하면 undefined가 반환된다.

## 배열 요소의 추가와 갱신

```javascript
const arr = [0];

// 배열 요소의 추가
arr[1] = 1;

console.log(arr); // [0, 1]
console.log(arr.length); // 2
```

- 객체에 프로퍼티를 동적으로 추가할 수 있는 것처럼 배열에도 요소를 동적으로 추가할 수 있다.
- 존재하지 않는 인덱스를 사용해 값을 할당하면 새로운 요소가 추가된다.
- 이 때 length 프로퍼티 값은 자동 갱신된다.

```javascript
const arr = [0, 1];
const arr[100] = 100;

console.log(arr); // [0, 1, empty * 98, 100]
console.log(arr.length); // 101
```

- 현재 배열의 length 프로퍼티 값보다 큰 인덱스로 새로운 요소를 추가하면 희소 배열이 된다.

```javascript
const arr = [0, 1];

// 요소값의 갱신
arr[1] = 10;

console.log(arr); // [0, 10];
```

- 이미 요소가 존재하는 요소에 값을 재할당하면 요소값이 갱신된다.

```javascript
const arr = [];

// 배열 요소의 추가
arr[0] = 1;
arr["1"] = 2;

// 프로퍼티 추가
arr["foo"] = 3;
arr.bar = 4;
arr[1.1] = 5;
arr[-1] = 6;

console.log(arr); // [1, 2, foo: 3, bar: 4, '1.1': 5, '-1': 6];

// 프로퍼티는 length에 영향을 주지 않는다.
console.log(arr.length); // 2
```

- 인덱스는 요소의 위치를 나타내므로 반드시 0 이상의 정수(또는 정수 형태의 문자열)를 사용해야 한다.
- 만약 정수 이외의 값을 인덱스처럼 사용하면 요소가 생성되는 것이 아니라 프로퍼티가 생성된다.

### 배열 요소의 삭제

```javascript
const arr = [1, 2, 3];

// 배열 요소의 삭제
delete arr[1];
console.log(arr); // [1, empty, 3];

console.log(arr.length); // 3
```

- 배열은 사실 객체이기 때문에 배열의 특정 요소를 삭제하기 위해 delete 연산자를 사용할 수 있다.
- legnth 프로퍼티에 영향을 주지 않는다. 즉, 희소 배열이 된다.
- delete 연산자는 객체의 프로퍼티를 삭제한다.
  따라서 위 예제의 delete arr[1]은 arr에서 프로퍼티 키가 '1'인 프로퍼티를 삭제한다.
  이 때 배열은 희소 배열이 되며 length 프로퍼티 값은 변하지 않는다.
- 따라서 **희소 배열을 만드는 delete 연산자는 사용하지 않는 것이 좋다.**
- 희소 배열을 만들지 않으면서 배열의 특정 요소를 완전히 삭제하려면 splice 메서드를 사용한다.

## 배열 메서드

- 배열 메서드는 결과물을 반환하는 패턴이 두 가지이므로 주의가 필요하다.
- 배열에는 원본 배열을 직접 변경하는 메서드와
  원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환하는 메서드가 있다.

### 원본 배열을 직접 변경하는 메서드와 함수 사용을 지양해야하는 이유

- 코드의 예측 가능성을 높이고 버그를 줄이기 위함
- 원본 배열을 직접 변경하면 데이터가 어디서 어떻게 바뀌었는지 추적하기 어려움

### Array.isArray

```javascript
Array.isArray([]); // true
Array.isArray([1, 2]); // true

Array.isArray(); // false
Array.isArray({}); // false
Array.isArray(null); // false
```

- 전달된 인수가 배열이면 true, 아니면 false를 반환한다.

### Array.indexOf

```javascript
const arr = [1, 2, 2, 3];

// 배열 arr에서 요소 2를 검색하여 첫 번째로 검색된 요소의 인덱스를 반환
arr.indexOf(2); // 1

// 배열 arr에 요소 4가 없으므로 -1을 반환
arr.indexOf(4); // -1

// 두 번째 인덱스는 검색을 시작할 인덱스이다. 두 번째 인수를 생략하면 처음부터 검색한다.
arr.index(2, 2); // 2
```

- indexOf 메서드는 배열에 특정 요소가 존재하는지 확인할 때 유용하다.

### Array.push

```javascript
const arr = [1, 2];

// 원본 배열의 마지막 요소에 특정 값을 추가한다.
arr.push(3, 4);

console.log(arr); // [1, 2, 3, 4]
```

- **push 메서드는 원본 배열을 직접 변경한다.**
- push 메서드는 성능 면에서 좋지 않다.

```javascript
const arr = [1, 2];

// ES6 스프레드 문법
const newArr = [...arr, 3];
console.log(newArr); // [1, 2, 3]
```

- push 메서드보다는 **ES6의 스프레드 문법**을 사용하는 편이 좋다.
  <br/> 스프레드 문법을 사용하면 원본 배열을 직접 변경하지 않는다.

### Array.pop

```javascript
const arr = [1, 2];

// 원본 배열에서 마지막 요소를 제거한다.
arr.pop();

console.log(arr); // 1
```

- **pop 메서드는 원본 배열을 직접 변경한다.**
- pop 메서드는 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다. 원본 배열이 빈 배열이면 undefined를 반환한다.

### Array.unshift

```javascript
const arr = [1, 2];

// 인수로 전달받은 모든 값을 원본 배열의 제일 앞에 요소로 추가한다.
arr.unshift(3, 4);

console.log(arr); // [3, 4, 1, 2]
```

- **unshift 메서드는 원본 배열을 직접 변경한다.**
- unshift 메서드는 인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고 변경된 length 프로퍼티 값을 반환한다.

### Array.shift

```javascript
const arr = [1, 2];

// 원본 배열의 제일 앞에있는 요소를 제거한다.
arr.shift();
console.log(result); // 1

console.log(arr); // [2]
```

- **shift 메서드는 원본 배열을 직접 변경한다.**
- shift 메서드는 원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환한다.

### Array.concat

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];

let result = arr1.concat(arr2);
console.log(result); // [1, 2, 3, 4];
console.log(arr1); // [1, 2];
console.log(arr2); // [3, 4];

result = arr1.concat(3);
console.log(result); // [1, 2, 3]

result = arr1.concat(arr2, 5);
console.log(result); // [1, 2, 3, 4, 5]
```

- **concat 메서드는 원본 배열을 변경하지 않는다.**
- 인수로 전달된 값들을 원본 배열의 마지막 요소로 추가한 새로운 배열을 반환한다.
- **push와 unshift 메서드는 concat 메서드로 대체할 수 있다.**

### Array.splice

```javascript
const arr = [1, 2, 3, 4];

// 원본 배열의 인덱스 1부터 2개의 요소를 제거하고 그 자리에 새로운 요소 20, 30을 삽입한다.
const result = arr.splice(1, 2, 20, 30);

// 제거한 요소가 배열로 반환된다.
console.log(result); // [2, 3]

// splice 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [1, 20, 30, 4]
```

- **splice 메서드는 원본 배열을 직접 변경한다.**
- 원본 배열의 중간에 요소를 추가하거나 제거하는 경우 사용한다.

### Array.slice

```javascript
const arr = [1, 2, 3];

// arr[0]부터 arr[1] 이전(arr[1] 미포함)까지 복사하여 반환한다.
const myArr1 = arr.slice(0, 1);
console.log(myArr1); // [1];

// arr[1]부터 arr[3] 이전(arr[3] 미포함)까지 복사하여 반환한다.
const myArr2 = arr.slice(1, 3);
console.log(myArr2); // [2, 3]

// 원본은 변경되지 않는다.
console.log(arr); // [1, 2, 3];
```

- **slice 메서드는 원본 배열을 직접 변경하지 않는다.**
- 인수로 전달된 범위의 요소들을 복사하여 배열로 반환한다.

```javascript
const arr = [1, 2, 3];

// arr[1]부터 이후의 모든 요소를 복사하여 반환한다.
const myArr1 = arr.slice(1);
console.log(myArr1); // [2, 3]
```

- slice 메서드의 두 번째 인수를 생략하면 첫 번째 인수로 전달받은 인덱스부터 모든 요소를 복사하여 배열로 반환한다.

```javascript
const arr = [1, 2, 3];

const myArr1 = arr.slice(-1);
console.log(myArr1); // [3]

const myArr2 = arr.slice(-2);
console.log(myArr2); // [2, 3]
```

- 메서드의 첫 번째 인수가 음수인 경우 배열의 끝에서부터 요소를 복사하여 배열로 반환한다.

### Array.join

```javascript
const arr = [1, 2, 3, 4];

// 원본 배열 arr의 모든 요소를 문자열로 변환한 후 ,(콤마)로 연결한 문자열을 반환한다.
const myString1 = arr.join();
console.log(myString1); // '1,2,3,4'

// 원본 배열 arr의 모든 요소를 문자열로 변환한 후 빈 문자열로 연결한 문자열을 반환한다.
const myString2 = arr.join("");
console.log(myString2); // '1234'

// 원본 배열 arr의 모든 요소를 문자열로 변환한 후 구분자 ':'로 연결한 문자열을 반환한다.
const myString3 = arr.join(":");
console.log(myString3); // '1:2:3:4'
```

- join 메서드는 원본 배열의 모든 요소를 문자열로 변환한 후 구분자로 연결한 문자열을 반환한다.

### Array.reverse

```javascript
const arr = [1, 2, 3];
const result = arr.reverse();

console.log(result); // [3, 2, 1]
console.log(arr); // [3, 2, 1]
```

- **reverse 메서드는 원본 배열을 직접 변경한다.**
- 원본 배열의 순서를 반대로 뒤집는다. 반환값은 배열이다.

### Array.fill

```javascript
const arr = [1, 2, 3];

arr.fill(0);

console.log(arr); // [0, 0, 0]

// ===============================================================

const arr = [1, 2, 3];

arr.fill(0, 1);

console.log(arr); // [1, 0, 0]

// ===============================================================

const arr = [1, 2, 3, 4, 5];

arr.fill(0, 1, 3);

console.log(arr); // [1, 0, 0, 4, 5]
```

- **fill 메서드는 원본 배열을 직접 변경한다.**
- 인수로 전달받은 값을 배열의 처음부터 끝까지 요소로 채운다.
- 두 번째 인수로 요소 채우기를 시작할 인덱스를 전달할 수 있다.
- 세 번째 인수로 요소 채우기를 멈출 인덱스를 전달할 수 있다.

### Array.includes

```javascript
const arr = [1, 2, 3];

arr.includes(2); // true

arr.includes(100); // false
```

- 배열 내에 특정 요소가 포함되어 있는지 확인하여 true 또는 false를 반환한다.

## 배열 고차 함수

- 함수를 인수로 전달받거나 함수를 반환하는 함수다.
- 외부 상태의 변경이나 가변 데이터를 피하고 불변성을 지향하는 함수형 프로그래밍에 기반을 두고 있다.
- 순수 함수를 통해 부수 효과를 최대한 억제하여 오류를 피하고 프로그램의 안정성을 높인다.
- 배열 고차 함수는 활용도가 매우 높다.

### Array.sort

```javascript
const fruits = ["Banana", "Orange", "Apple"];
const fruits2 = ["바나나", "사과", " 오렌지"];

// 오름차순 정렬
fruits.sort();
fruits2.sort();

// sort 메서드는 원본 배열을 직접 변경한다.
console.log(fruits); // ['Apple', 'Banana', ' Orange']
console.log(fruits2);
```

- **sort 메서드는 원본 배열을 직접 변경한다.**
- sort 메서드는 배열의 요소를 정렬한다.
- 기본적으로 오름차순으로 요소를 정렬한다.

```javascript
const fruits = ["Banana", "Orange", "Apple"];

// 오름차순 정렬
fruits.sort();
// 내림차순 정렬
fruits.reverse();

console.log(fruits); // ['Orange', 'Banana', 'Apple'];
```

- sort로 오름차순 정렬을 한 후 reverse로 내림차순 정렬을 할 수 있다.

```javascript
const myNumbers = [40, 100, 1, 5, 2, 25, 10];

myNumbers.sort();

console.log(myNumbers); // [1, 10, 100, 2]
```

- 숫자 요소로 이루어진 배열을 정렬할 때는 유니코드 코드 포인트의 순서를 따르기 때문에 주의가 필요하다.

```javascript
const myNumbers = [40, 100, 1, 5, 2, 25, 10];

// 오름차순 정렬
myNumbers.sort((a, b) => a - b);
console.log(myNumbers); // [1, 2, 5, 10, 25, 40, 100]

// 내림차순 정렬
myNumbers.sort((a, b) => b - a);
console.log(myNumbers); // [100, 40, 25, 10, 5, 2, 1]
```

- 숫자 요소를 정렬할 때는 sort 메서드에 정렬 순서를 정의하는 비교 함수를 인수로 전달해야 한다.
- 비교 함수는 양수나 음수 또는 0을 반환해야 한다.
- 비교 함수의 반환값이 0보다 작으면 비교 함수의 첫 번째 인수를 우선하여 정렬한다.
- 0이면 정렬하지 않는다.
- 0보다 크면 두 번째 인수를 우선하여 정렬한다.

### Array.forEach

```javascript
const numbers = [1, 2, 3];
const numbers2 = [];

for (let i = 0; i < numbers.legnth; i++) {
  numbers2.push(numbers[i] + 1);
}

console.log(numbers2); // [2, 3, 4]

// ==============================================================

const numbers = [1, 2, 3];
const numbers2 = [];

numbers.forEach((item) => numbers2.push(numbers + 1));
console.log(numbers2);

// forEach는 배열을 반환하지 않는다.
const result = numbers.forEach((item) => item + 1);
console.log(result);
```

- **forEach 메서드는 원본 배열을 직접 변경하지 않는다.**
- for 문을 대체할 수 있는 고차 함수다.
- forEach 메서드는 자신의 내부에서 반복문을 실행한다.
- **forEach 메서드는 반환 값이 없다.**

```javascript
// ex

// quantity : 담은 갯수
// stock : 재고

const products = [
  { id: 1, name: "상의", price: 10000, quantity: 2, stock: 10 },
  { id: 2, name: "상의2", price: 15000, quantity: 3, stock: 0 },
  { id: 3, name: "하의", price: 15000, quantity: 4, stock: 5 },
];

let warningMessage = "";

products.forEach((item) => {
  if (item.stock < item.quantity) {
    warningMessage = `${item.name}의 상품 재고가 부족합니다.`;
  }
});

console.log(warningMessage);
```

### Array.map

```javascript
const numbers = [1, 2, 3];

const result = numbers.map((item) => item + 1);

console.log(result);
```

- **map 메서드는 원본 배열을 직접 변경하지 않는다.**
- map 메서드는 콜백 함수의 반환 값들로 구성된 새로운 배열을 반환한다.

```javascript
// ex

const products = [
  { id: 1, name: "상의", price: 10000 },
  { id: 2, name: "상의2", price: 15000 },
  { id: 3, name: "하의", price: 15000 },
  { id: 4, name: "하의2", price: 20000 },
  { id: 5, name: "모자", price: 25000 },
  { id: 6, name: "신발", price: 20000 },
];

const HTML = products
  .map(
    (item) => `
  <div>
    <p>상품 번호 : ${item.id}</p>
    <p>상품 명 : ${item.name}</p>
    <p>상품 가격 : ${item.price.toLocaleString()}원</p>
  </div>
`
  )
  .join("");

console.log(HTML);
```

### Array.filter

```javascript
const numbers = [1, 2, 3, 4, 5];

const odds = numbers.filter((item) => item % 2);
console.log(odds); // [1, 3, 5];
```

- **filter 메서드는 원본 배열을 직접 변경하지 않는다.**
- 콜백 함수의 반환값이 true인 요소만 추출하여 새로운 배열을 반환한다.

```javascript
// ex

// 검색
const products = [
  { id: 1, name: "상의", price: 10000 },
  { id: 2, name: "상의2", price: 15000 },
  { id: 3, name: "하의", price: 15000 },
  { id: 4, name: "하의2", price: 20000 },
  { id: 5, name: "모자", price: 25000 },
  { id: 6, name: "신발", price: 20000 },
];

const searchKeyword = "상";
const searchItems = products.filter((item) => item.name.includes(searchKeyword));
console.log(searchItems);

// ==============================================
// 삭제
const basket = [
  { id: 1, name: "상의", price: 10000 },
  { id: 2, name: "상의2", price: 15000 },
  { id: 3, name: "하의", price: 15000 },
  { id: 4, name: "하의2", price: 20000 },
  { id: 5, name: "모자", price: 25000 },
  { id: 6, name: "신발", price: 20000 },
];

const deleteId = 3;
const newBasket = basket.filter((item) => item.id !== deleteId);
console.log(newBasket);
```

### Array.reduce

```javascript
const sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = sum.reduce((a, b) => a + b, 0);

console.log(sum);

const result2 = sum.reduce((accmulator, currentValue, index, array) => {
  console.log(accmulator);
  console.log(currentValue);
  console.log(index);
  console.log(array);
  return a + b;
}, 5);

console.log(result2);
```

- **reduce 메서드는 원본 배열을 직접 변경하지 않는다.**
- 콜백 함수의 반환값을 다음 순회 시에 콜백 함수의 첫 번째 인수로 전달하면서
  콜백 함수를 호출하여 하나의 결과값을 만들어 반환한다.
- 자신을 호출한 배열의 모든 요소를 순회하며 하나의 결과값을 구해야 하는 경우에 사용한다.

```javascript
// ex

const products = [
  { id: 1, name: "상의", price: 10000 },
  { id: 2, name: "하의", price: 20000 },
  { id: 3, name: "가방", price: 30000 },
  { id: 4, name: "신발", price: 40000 },
];

const priceSum = products.reduce((a, b) => a + b.price, 0);
console.log(priceSum);
```

### Array.some

```javascript
const arr = [1, 5, 10];

// 배열의 모든 요소 중 5보다 작은 요소가 1개라도 있는지 확인
const result = arr.some((item) => item < 5);
console.log(result); // true

// 배열의 모든 요소 중 10보다 큰 요소가 1개라도 있는지 확인
const result2 = arr.some((item) => item > 10);
console.log(result2); // false
```

- some 메서드는 콜백 함수의 반환값이 단 한 번이라도 참이면 true, 모두 거짓이면 false를 반환한다.

### Array.every

```javascript
const arr = [5, 10, 15];

// 배열의 모든 요소가 3보다 큰지 확인
const result = arr.every((item) => item > 3);
console.log(result); // true

// 배열의 모든 요소가 10보다 큰지 확인
const result2 = arr.every((item) => item > 10);
console.log(result2); // false
```

- every 메서드는 콜백 함수의 반환값이 모두 참이면 true, 단 한 번이라도 거짓이면 false를 반환한다.

### Array.find

```javascript
const users = [
  { id: 1, name: "Lee", age: 10 },
  { id: 2, name: "Cho", age: 15 },
  { id: 3, name: "ChoiA", age: 20 },
  { id: 4, name: "ChoiB", age: 21 },
  { id: 5, name: "Park", age: 25 },
  { id: 6, name: "Kim", age: 30 },
];

const findUser = users.find((user) => user.name === "ChoiA");
console.log(findUser); // { id: 3, name: "ChoiA", age: 20 }
```

- find 메서드는 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출하여 반환값이 true인 첫 번째 요소를 반환한다.

### Array.findIndex

```javascript
const users = [
  { id: 1, name: "Lee" },
  { id: 2, name: "Kim" },
  { id: 2, name: "Choi" },
  { id: 3, name: "Park" },
];

// id가 2인 요소의 인덱스를 구한다.
users.findIndex((user) => user.id === 2); // 1

// name이 'Park'인 요소의 인덱스를 구한다.
users.findIndex((user) => user.name === "Park"); // 3

users.findIndex((user) => user.name === "Ahn"); // -1
```

- findIndex 메서드는 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출하여 반환값이 true인 첫 번째 요소의 인덱스를 반환한다.
- 콜백 함수의 반환값이 true인 요소가 존재하지 않으면 -1을 반환한다.
