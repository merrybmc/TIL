# useContext

- Props Drilling을 막기 위해 사용하는 리액트 내장 상태관리 hook이다.
- Context를 사용할 경우 컴포넌트를 재사용하기 어려워 질 수 있다.
- Props Drilling을 피하기 위한 목적이라면 사용하기 전에 컴포넌트 합성을 먼저 고려해보는 것이 좋다.
- Context는 최상위 컴포넌트부터 하위의 모든 컴포넌트를 리렌더링하기 때문에
  규모가 큰 프로젝트일 수록 사용하지 않는 것이 좋다.

## 기본 사용 방법

```react
// ThemeContext.js
import { createContext } from "react";

export const ThemeContext = createContext(null);

// App.jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.js";

export default function App() {
    const [isDark, setIsDark] = useState(false);
    return (
    <ThemeContext.Provider value={{isDark,setIsDark}}>
      <Header />
    </ThemeContext.Provider>
  );
}

// Header.jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.js";

export default function Header() {
    const { isDark, setIsDark } = useContext(ThemeContext);
}
```

## Context 파일 안에 children 할당

```react
// ThemeContext.js
import { createContext, useState } = from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
    const [isDark, setIsDark] = useState(false);
    const toggleDarkMode = () => {
        setIsDark(!isDark);
    };

    return(
        <ThemeContext.Provider value={(isDark, toggleDarkMode)}>
            {children} // value의 값을 children에 할당
        </ThemeContext.Provider>
   )
}

// App.jsx
import { ThemeContext } from "../context/ThemeContext.js"

export default function App () {
    return (
    <ThemeContext>
      <Header />
    </ThemeContext>
    )
}

// Header.jsx

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.js"

export default function Header() {
    const { isDark, toggleDarkmode } = useContext(ThemeContext);
}
```
