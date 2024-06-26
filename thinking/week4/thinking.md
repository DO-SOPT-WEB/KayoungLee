# ✨ 생각 과제

<br />

## 💎🖤 리액트에 대하여

### 💻 컴포넌트는 어떤 기준과 방법으로 분리하는 것이 좋을까?

- 항상 고민하는 것 같다. 이번 기회에 정말 딥하게 생각해보면 좋을 것 같다. 우선 페이지 단위로 구분하는 법은 편하다. 한 페이지내에서 모든 컴포넌트를 구현하려니 이제 재사용성은 떨어지고 코드도 엄청 길어진다는 치명적 단점이 있다. 또 다른 방식은 이제 재사용성을 기준으로 컴포넌트를 나누는 것이다. 하지만 파일이 많아질 수록 PROPS들이 복잡해질 수 있다. 이게 나의 생각이었고, 적절하게 섞어 써왔었다. 이제 내 가설들이 얼마나 맞는지 확인해보겠다.
  **어떻게 분리할지는 프로젝트의 규모, 복잡성, 유지보수성, 재사용성 등 여러 요인에 따라 다를 수 있다.**

1. **단일 책임 원칙 (Single Responsibility Principle)**: 각 컴포넌트는 하나의 책임만 가져야 한다. 즉, 특정 기능 또는 역할을 수행하는 컴포넌트를 만드는 것이 좋다. 이렇게 하면 각 컴포넌트가 변경되어야 하는 경우에 유지보수가 쉬워진다..

2. **재사용성**: 유사한 기능이나 UI 요소는 독립적인 컴포넌트로 분리하여 재사용성을 높일 수 있다. 이로써 코드 중복을 줄이고 일관성을 유지할 수 있다.

3. **가독성 및 유지보수성**: 코드를 읽기 쉽고 이해하기 쉽게 만드는 것이 중요하다. 비슷한 기능이나 성격을 가진 코드는 한 곳에 모아 두어 가독성을 향상시키는 것이 좋다.

4. **상태와 뷰의 분리**: 상태 관리와 UI 표현을 분리하여 컴포넌트를 구성하는 것이 좋다. 이는 주로 상태 관리 라이브러리를 사용하는 경우에 해당하며, 상태 변경과 UI 업데이트를 명확하게 구분하여 관리할 수 있다.

### 💻 좋은 상태 관리란 무엇일까?

> 리액트에서 좋은 상태 관리란, 리액트 애플리케이션에서 효율적이고 유지보수가 용이한 상태 관리를 의미한다.
> 좋은 상태관리의 기준이란

- 가독성 및 단순성: 좋은 상태 관리는 가독성이 뛰어나고 코드가 간단한 구조를 가져야 한다
- 유연성과 확장성: 좋은 상태 관리는 애플리케이션의 규모에 따라 확장 가능해야 한다.
- 컴포넌트 간 통신 및 데이터 공유: 컴포넌트 간에 데이터를 효과적으로 공유하고 통신할 수 있어야 한다. 부모-자식 간, 혹은 형제 간에 데이터를 주고받는 메커니즘이 적절하게 지원되어야 한다는 점!. 등

리액트에서는 Redux, Context API, MobX, Recoil 등 다양한 상태 관리 방법이 있으니 자신의 올바른 기준을 세워 좋은 상태관리 구조를 구축해나가자.

### 💻 렌더링을 효과적으로 관리하는 방법은 무엇이 있을까?

- 컴포넌트 분할 (Component Splitting): 컴포넌트를 작은 단위로 분할하고, 각각의 컴포넌트가 필요한 경우에만 렌더링하도록 설계해야한다! 이를 통해 불필요한 렌더링을 피하고 성능을 향상시킬 수 있다.

- 컴포넌트 최적화 (Memoization): React.memo나 PureComponent를 사용하여 컴포넌트의 불필요한 리렌더링을 방지할 수 있다. 렌더링 결과가 이전과 동일하다면 리렌더링을 방지하는 방식으로 성능을 향상시킨다고 한다!

```
const MemoizedComponent = React.memo(MyComponent);
```

- 가상화 (Virtualization): 대량의 데이터를 다룰 때는 리스트나 테이블과 같은 컴포넌트에 가상화 기술을 적용한다. 예를 들어, react-window나 react-virtualized와 같은 라이브러리를 사용하여 화면에 보이는 부분만 렌더링하여 성능을 최적화할 수 있다.(오호 처음 들어보네요,,)

- 이벤트 핸들러 최적화: 이벤트 핸들러는 불필요한 함수 생성을 방지하기 위해 컴포넌트 외부에서 선언하거나, useCallback을 활용하여 최적화합니다.

### 💻 Props Drilling이란 무엇이고 이를 어떻게 해결할 수 있는가?

- 개념 : Props Drilling은 리액트 애플리케이션에서 여러 컴포넌트를 거치며 데이터를 전달하는 것을 의미한다.
- 문제점 : 이는 데이터를 전달할 때 중간에 위치한 컴포넌트에서 필요하지 않은 데이터를 전달받고 다시 하위 컴포넌트로 전달하는 상황을 말하는데, 이러한 구조는 코드를 복잡하게 만들고, 유지보수를 어렵게 만들 수 있다
- 해결 :

  - Context API 사용: 리액트의 Context API를 사용하여 중간 컴포넌트를 거치지 않고 데이터를 전달 가능! Context를 활용하면 중간에 위치한 컴포넌트를 거치지 않고도 데이터를 하위 컴포넌트에 직접 전달

  - 상태 관리 라이브러리 사용: 상태 관리 라이브러리인 Redux나 MobX와 같은 도구를 사용하여 애플리케이션의 전역 상태를 관리할 수 있다!

  - 컴포넌트 리팩토링: 불필요한 중간 컴포넌트를 제거하고, 데이터를 직접 필요한 하위 컴포넌트로 전달할 수 있도록 컴포넌트 구조를 리팩토링하는 것도 한 가지 방법이다.

  - React.cloneElement 사용: React.cloneElement 함수를 사용하여 prop을 전달하면서도 원래의 구조를 유지할 수 있다.
    <br />
