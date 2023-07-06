# HTML 문서 구조

## Intro

- HTML
  - **Hypertext Markup Language** 의 약자이며 웹 페이지 표시를 위해 개발된 마크업 언어이다.
- Hypertext
  - 하이퍼링크를 통해 사용자가 한 문서에서 다른 문서로 접근할 수 있는 텍스트이다.
- Markup Language
  - 태그 등을 이용하여 문서가 화면에 표시되는 형식을 나타내거나 데이터의 논리적인 구조 등을 명시하는 언어 중 하나이다.

**기본 HTML Emmet Snippet**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body></body>
</html>
```

## DTD

```html
<!DOCTYPE html>
```

- DTD (Document type Definition) 이라고도 부르며 문서의 타입에 대한 정보를 제공한다.
- 이 코드를 제거할 경우 브라우저는 쿼크 모드(quirks mode)라고 하위 호환성 모드로 html을 렌더링하게 된다.

## html

```html
<html lang="en-US"></html>
```

- HTML 문서의 루트 최상단 태그이다.
- lang 속성을 통해 페이지의 주 언어가 무엇인지 설정 가능하다.
- 언어 설정을 통해 검색엔진, 스크린 리더, 번역 기능 등에 영향을 미치게 된다.

**언어코드(소문자) - 국가코드(대문자)**

| 언어코드 | 언어   | 국가코드(국가)                                       |
| -------- | ------ | ---------------------------------------------------- |
| ko       | 한국어 | KR(대한민국), KP(북한)                               |
| en       | 영어   | US(미국), GB(영국), PH(필리핀)                       |
| zh       | 중국어 | CN(중국), HK(홍콩), TW(대만), Hans(간체), Hant(번체) |
| ja       | 일본어 |                                                      |
| de       | 독일어 |                                                      |

## head

```html
<html>
  <head> </head>
</html>
```

- 메타데이터의 컨테이너이며 `<html>` 태그와 `<body>`태그 사이에 배치된다.
- 검색엔진을 위해 다양한 정보들이 담기는 곳이며 일반적으로 문서, 문자 집합, 스타일, 스크립트 등이 담긴다.

## meta

- HTML 문서에 대한 메타데이터를 정의한다.
- 메타데이터는 브라우저, 검색 엔진 및 기타 웹 서비스에 사용된다.

**charset**

```html
<meta charset="utf-8" />
```

- 문자 코드의 종류를 설정한다.
- utf-8은 전 세계적인 언어들을 지원하며 국제적인 코드 규약이다.

**viewport**

```html
<meta name="viewport" content="width=device-width,intial-scale=1.0" />
```

- <b>width</b> : 뷰포트의 너비를 제어한다. width=600과 같이 픽셀 값으로 지정할 수 있다.
- <b>height</b> : 뷰포트의 높이를 제어한다.width와 마찬가지로 픽셀 값으로 지정할 수 있다.
- <b>initial-scale</b> : 페이지가 처음 로드될 때 확대/축소 수준을 제어한다. (최소 0.1 ~ 기본 1 ~ 최대 10)
- <b>minimum-scale</b> : 페이지에 허용되는 축소의 정도를 제어한다.
- <b>maximum-scale</b> : 페이지에 허용되는 확대의 정도를 제어한다. 3보다 작은 값은 접근성에 맞지 않다.
- <b>user-scalable=no</b> : 사용자가 화면 크기를 제어 못하게 한다. 하지만 특수한 상황이 아니라면 사용자의
  다양한 사용 환경을 고려해야하기 때문에 사용하지 않는걸 권장한다.

## title

```html
<title>타이틀</title>
```

- 페이지의 탭이나 브라우저의 제목 표시줄에 보이는 제목을 정의한다.

## link

```html
// 스타일시트 링크
<link rel="stylesheet" href="style.css" />

// 폰트 링크
<link rel="stylesheet" href="font.ttf" />

// 파비콘 링크
<link rel="shortcut icon" href="favicon.ico" />
```

- 현재 문서와 외부 리소스의 관계를 명시한다.
- 빈 태그, 속성만을 포함하며 head 태그 내부에만 위치할 수 있다.
- <b>rel (relations)</b> : 대상 파일의 속성을 나타낸다.
- <b>href (hyper-references)</b> : 연결 시 참조할 파일의 위치를 나타낸다.

## body

```html
<html>
  <head> </head>
  <body></body>
</html>
```

- 사용자에게 보여지는 태그들의 영역이다.
