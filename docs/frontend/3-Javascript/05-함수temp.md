<!-- # 함수

## 함수

### 함수 선언문

기본적인 함수 선언 형태

```ts
function name() {
  return;
}
```

return을 명시적으로 하지 않으면 자동으로 undefined가 반환된다.

```ts
function add() {}

console.log(add()); // undefined
```

return을 함수 중간에 하게 될 경우, 함수가 종료된다.

```ts
function print(text, num) {
  if (num < 0) {
    return; // 함수 종료
  }
  console.log(text); // 코드가 실행되지 않음
}
```

### 함수 표현식

```ts
const name = function () {
  return;
};
```

함수 표현식에서 함수 이름을 설정할 경우, 지정되지 않은 함수라고 오류가 발생한다. (외부에서 접근 불가능)

이름이 없는 함수를 무명함수라고 일컫는다.

```ts
const name = function myName() {
  return;
};
myName();
```

## 매개변수

- 매개변수의 기본값은 무조건 undefined 이다.
- 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장된다.
- 매개변수에 기본값 설정이 가능하다. (**Default Parameters**)

```ts
function add(a = 1, b = 1) {
  console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }
  return a + b;
}

let result = add(2, 3); // 5
```

## Rest 매개변수 (Rest Parameters)

얼마나 많은 매개변수가 전달되는지 알 수 없을 때

```ts
function sum(...numbers) {
	console.log(arguments);
	// [Arguments] {
	  '0': 1,
	  '1': 2,
	  '2': 3,
	  '3': 4,
	  '4': 5,
	  '5': 6,
	  '6': 7,
	  '7': 8,
	  '8': 9
}
}

let result = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
```

## 화살표 함수

### 함수 표현식

```ts
const add = (a, b) => {
  return a + b;
};
```

함수 안에서 특별한 수행을 하지 않고 바로 return하는 경우일 때

값만 리턴하는 경우, 중괄호 및 return 생략 가능

```ts
let add = (a, b) => a + b;
```

### 일반함수와의 차이점

#### 일반함수

일반함수의 this는 자신이 종속된 객체의 name을 가리킨다.

```ts
function Dog() {
	this.name = "흰둥이";
	return {
		name : "검둥이";
		bark : function() {
		console.log(this.name) // 검둥이
				}
			}
		}
}
```

#### 화살표함수

화살표함수의 this는 자신이 종속된 인스턴스의 name을 가리킨다.

```ts
function Dog() {
	this.name = "흰둥이";
	return {
		name : "검둥이";
		bark : () => {
		console.log(this.name) // 흰둥이
				}
			}
		}
}
```

## 즉각호출함수 (IIFE)

즉각호출함수＝ IIFE (Immedicately-Invoked Function Expressions)

함수를 괄호로 묶을 경우 함수가 값으로 변경되어 바로 호출이 된다.

```ts
(function run() {
  console.log("👍");
})();
```

## 일급객체 (first-class object)

- 일반 객체처럼 모든 연산이 가능한 것
  - 함수의 매개변수로 전달
  - 함수의 반환 값
  - 할당 명령문
  - 동일 비교 대상

## 고차함수

- 인자로 함수를 받거나 (콜백함수)
- 함수를 반환하는 함수

## 콜백함수

- action 인자에 외부로부터 함수를 전달받는 것을 콜백함수라고 한다.

- 값이 전달될 때 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라

  함수를 가리키고 있는 함수의 참조값이 전달된다.

- 즉, 함수는 고차함수 안에서 나중에 필요한 순간에 호출이 된다.

```ts
const add = (a, b) => a + b;
const multiply = (a ,b) => a * b;

function calculator(a, b, a action) {
	if(a < 0 || b < 0) {
		return;
	}
	const result = action(a, b);
	return result;
}

console.log(calculator(1, 2, add)); // 3
console.log(calculator(2, 3, multiply)); // 6
```

## 불변성

- 불변성 (Immutability) == unchangable 의 동의어와 같다.
- 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 좋지 않다.

원시값은 값에 의한 복사이며 값 자체가 복사되어 전달되어 문제가 없다.

```ts
function display(num) {
  num = 5;
  console.log(num);
}
const value = 4;

display(value); // 5
console.log(value); // 4
```

하지만 객체값일 경우 참조에 의한 복사(메모리주소) 라서 문제가 발생한다.

```ts
function displayObj(obj) {
  obj.name = "Bob";
  console.log(obj.name); // Bob
}

const myName = { name: byeongMin };
displayObj(myName);
console.log(myName.name); // Bob
``` -->
