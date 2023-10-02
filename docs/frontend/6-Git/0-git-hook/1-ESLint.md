- 일관되고 버그를 피할 수 있는 코드를 짜기 위해서 만들어진 코드 분석 툴
- 작성된 코드의 구문을 분석하여 버그가 발생할 여지가 있거나, 불필요한 코드, 혹은 보안상 위험한 코드 등에 대해 경고를 띄워준다.
- 설정 커스터마이징을 허용해주기 때문에 필요한 규칙들을 커스텀하여 적용 가능하다.

## 설치

### 기본 설치

- CRA의 경우 내장되어 있기 때문에 따로 설치해주지 않아도 된다.

```bash
npm install eslint --save-dev
```

### eslint-config-prettier

```bash
npm install eslint-config-prettier --save-dev
```

- eslint는 linting 기능을, prettier는 formatting을 담당하는 구조가 이상적이다.
- 하지만 eslint에는 일부 formatting 관련된 rule도 포함되어 있다.
- 이 rule들이 prettier와 다른 설정을 가지고 있다면 설정에 충돌이 발생한다.
- 따라서 eslint에는 formatting 관련 rule들을 모두 해제해야할 필요가 있다.
- 수동으로 해제할 수도 있지만 자동으로 적용해주는 eslint-config-plugin을 쓸 수 있다.
