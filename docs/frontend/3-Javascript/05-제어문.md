# 제어문

- 조건에 따라 코드 블록을 실행하거나 반복할 때 사용한다.
- 일반적으로 위에서 아래 방향으로 순차적으로 실행되지만, 제어문을 사용하면 실행 흐름을 인위적으로 제어할 수 있다.

## 블록문

```javascript
// 블록문
{
  var foo = 10;
}

// 제어문
var x = 1;
if (x < 10) {
  x++;
}

// 함수 선언문
function sum(a, b) {
  return a + b;
}
```

- 0개 이상의 문을 중괄호로 묶은 것으로 코드 블록이라 부르기도 한다.
- 자바스크립트에서는 블록문을 하나의 실행 단위로 취급한다.
- 단독으로도 사용할 수 있지만 일반적으로 제어문이나 함수를 정의할 때 사용된다.

## 조건문

- 주어진 평가 결과에 따라 코드 블록의 실행을 결정한다.

### if... else문

```javascript
if (조건식1) {
  // 조건식1이 true이면 해당 코드 블록이 실행된다.
} else if (조건식2) {
  // 조건식 1이 false이고 조건식2가 true이면 해당 코드 블록이 실행된다.
} else {
  // 조건식 1과 조건식 2가 false일 경우 해당 코드 블록이 실행된다.
}

// ex

var score = 80;

if (score >= 80) {
  console.log("A등급");
} else if (score >= 70) {
  console.log("B등급");
} else if (score >= 60) {
  console.log("C등급");
} else {
  console.log("F등급");
}
```

- 주어진 조건식의 평가 결과가 true 또는 false임에 따라 실행할 코드 블록을 결정한다.
- 평가 결과가 true일 경우 if 문의 코드 블록이 실행된다.
- 평가 결과가 false일 경우 else 문의 코드 블록이 실행된다.
- 조건식을 추가하고 싶으면 else if 문을 사용할 수 있다.

### switch 문

```javascript
switch (표현식) {
    case 표현식1:
        switch 문의 표현식과 표현식1이 일치하면 실행;
        break;
    case 표현식2:
        switch 문의 표현식과 표현식2가 일치하면 실행;
        break;
    default:
        switch 문의 표현식과 일치하는 case 문이 없을 때 실행;
}

// ex)
var day = 3;

switch (day) {
    case 1: {
        console.log("월요일");
        break;
    }
    case 2: {
        console.log("화요일");
        break;
    }
    case 3: {
        console.log("수요일");
        break;
    }
    case 4: {
        console.log("목요일");
        break;
    }
    case 5: {
        console.log("금요일");
        break;
    }
    default: {
        console.log("주말입니다.");
    }
}
```

- 주어진 표현식을 평가하여 그 값과 일치하는 case 문중 하나로 실행시킨다.
- 표현식과 일치하는 case문이 없다면 default 문을 실행시킨다.

## 반복문

- 조건식의 평가 결과가 참인 경우 코드 블록을 실행하며, 그 후 조건식을 다시 평가하여 거짓이 나올 때까지 반복한다.

### for 문

```javascript
for (변수 선언문 또는 할당문; 조건식; 증감식) {
    조건식이 참인 경우 반복 실행될 문;
}

// ex)
for (var i = 0; i <10; i++) {
    console.log(i); // 0 1 2 3 4 5 6 7 8 9
}
```

- 조건식이 거짓으로 평가될 때까지 코드 블록을 반복 실행한다.
- 반복 횟수가 명확할 때 주로 사용된다.

### while 문

```javascript
var count = 0;

while (count > 10) {
  console.log(count); // 0 1 2 3 4 5 6 7 8 9
  count++;
}
```

- 주어진 조건식의 평가 결과가 참이면 코드 블록을 계속 반복 실행한다.
- 반복 횟수가 불명확할 때 주로 사용된다.

### do ... while 문

```javascript
var count = 0;

do {
  console.log(count); // 0
  count++;
} while (count < 0);
```

- 코드 블록을 먼저 실행시킨 후 조건식을 평가한다.
- 따라서 코드 블록은 다른 조건, 반복문과는 다르게 무조건 한 번 이상 실행된다.

### break 문

```javascript
if () {
    break;
}

for (;;) {
    break;
}

switch () {
    case 1: {
        break;
    }
    default: break;
    }
}

while () {
    break;
}
```

- 조건문이나 반복문의 코드 블록을 탈출할 때 사용된다.
