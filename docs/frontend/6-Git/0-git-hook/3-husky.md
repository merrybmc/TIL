# husky

## 도입배경

- eslint-prettier를 도입한다고 해서 끝이 아니다.
- 아무리 패키지를 설치하고 rule을 설정해도 작업자가 사용을 하지 않으면 의미가 없다.
- 개인이 매번 확인해서 실행하는 것은 실수가 발생할 여지가 있으며 강제성이 없다.

## 해결방안

- 자동화를 통해서 신경쓰지 않아도 자동으로 적용이 되게하고 특정 상황에서 강제로 적용이 되게 한다.
- commit된 코드는 무조건 formatting이 완료되어야 한다.
- push된 코드는 무조건 pass된 상태에서 push가 되도록 자동화를 구축해야 한다.

## 실행방안

- git hook을 통해 특정 이벤트가 발생하기 전/후로 특정 hook 동작을 실행할 수 있게 한다.
- git hook 설정을 도와주는 husky를 도입한다.
- husky는 번거로운 git hook 설정을 편리하게 해주며 pre-commit/push hook을 설정 가능하다.

## 사용법

1. npm install husky --save -dev (husky 설치)

2. npx husky install

   - (처음 husky 세팅하는 사람만 실행)
   - husky에 등록된 hook을 .git에 적용시키기 위한 스크립트

3. add postinstall script in package.json

   - 이후 clone 받아서 사용하는 사람들에게 npm install 후 자동으로 husky install이 되도록 설정

   ```json
   // package.json

   {
     "scripts": {
       "postinstall": "husky install",
       "format": "prettier --cache --write .",
       "lint": "eslint --cache ."
     }
   }
   ```

4. add pre-commit/push hook

   - npx husky add .husky/pre-commit "npm run format && git add ."
   - npx husky add .husky/pre-push "npm run lint"
   - lint-staged와 결합해서 사용

참고자료<br/>
https://typicode.github.io/husky/
