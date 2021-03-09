export const useRefData = {
  lightText: true,
  topLine: "useRef",
  headLine: "useRef",
  description:
    "지금 이 페이지에서 알게 될 부분은 useRef와 useEffect의 두 번째 사용 방식입니다.",
  contents: {
    paragraph01: {
      title: "1. 일단 해봅시다!",
      text1: "여기",
      text2: "이 있습니다.",
      text3:
        "빈 칸을 클릭해보세요. 칸의 내용이 바뀌는 것을 확인할 수 있습니다. 간단한 정답 맞추기 툴이라고 볼 수 있는 이 기능을 구현하는 코드는 다음과 같습니다.",
      code1: `const ButtonPart = ({ foo, answer }) => {
        const [value, setValue] = useState(true);
        const changeValue = () => {
          setValue(!value);
        };
        return <Button onClick={changeValue}>{value ? foo : answer}</Button>;
      };
      
export default ButtonPart;`,
      text4:
        "기본적으로 버튼을 이용해 구현하고 있으며 클릭은 우리가 이전에 이미 배운 방식을 이용했습니다. 'useState'를 이용해 value 값을 'true'와 'false'로 설정해두고 버튼을 클릭할 때마다 마치 토글처럼 작동해 값을 변경하고 있습니다. props를 보면 기본값인 foo 값과 실제 정답인 answer 값을 받아 value가 참이면 foo값을, false면 실제 정답을 반환하고 있는 것을 알 수 있습니다. 위의 코드를 컴포넌트로 만들어 따로 빼 두었기 때문에 위와 같은 기능을 또 사용하고 싶다면,",
      code2: `<ButtonPart foo="_______" answer="정답" />`,
      text5: "이렇게 값을 넘겨주기만 하면 됩니다.",
    },
    paragrah02: {
      title: "2.",
      text1:
        "조금 복잡하게 해봅시다. 위의 제목을 눌러 보셨나요? 'useRef'는 무엇일까요? 'useRef'의 'Ref'는 'reference'입니다. 대체 무엇에 대한 'reference'일까요? 'reference'는 기본적으로 Component의 특정 부분을 선택하는 방법입니다. 바닐라 자바스크립트에서 'document.getElementByID()'를 사용한 것과 같다고 볼 수 있습니다. 'React'의 모든 'component'는 'reference element'를 갖습니다.",
      code1: `<Paragraph ref={element}>
      {useRefData.contents.paragrah02.text2}
</Paragraph>`,
      text2:
        "위의 코드를 봅시다. 웹사이트를 편하게 작성하기 위해 styled-components를 사용하고 있고, 페이지의 데이터(지금 이 텍스트)를 따로 관리하다보니 위와 같은 형태가 나왔지만, 기본적으로 'useRef'의 사용법은 알 수 있습니다. 즉, 어떤 컴포넌트를 사용하든 우리는 해당 컴포넌트에 'ref'라는 이름의 'props'를 넘겨줄 수 있습니다.",
      code2: `const element = useRef();`,
      text3:
        "굳이 props를 'element'라는 이름으로 넘겨준 이유는 코드를 위와 같이 선언했기 때문입니다. 굳이 'element'일 필요는 없습니다. 다만 우리가 여기에서 알아야 하는 것은 다음과 같습니다. 자, 3번으로 갑시다!",
    },
    paragrah03: {
      title: "3.",
      text1:
        "2번과 같이 useRef를 이용해 값을 넘겨주면, 즉 특정 컴포넌트를 선택하면 우리는 어떤 것을 할 수 있을까요? ref라는 이름으로 넘어와 element에 담긴 값은 무엇일까요?",
      code1: `console.log(element);
// Object
// current: p.sc-dwfUOf.fwWlPc`,
      text2:
        "console.log로 element에 담긴 값을 확인하자 위와 같은 결과를 얻을 수 있었습니다. Object가 반환되고, 그 아래에는 current가, current 안쪽에는 우리가 ref로 참조한 컴포넌트의 데이터가 가득 담겨 있었습니다. 'baseURI', 'childElementCount', 'childNodes의 정보', 'className', 'outerHTML' 등등 거의 모든 것이라고 보아도 무방할 정도로 많은 정보가 담겨서 반환되는 것을 알 수 있었습니다. 이제 뭘 해야 할지 알아봅시다. 뭘 하면 될까요? 다시 이 문단의 제목을 눌러서 확인해봅시다.",
    },
    paragrah04: {
      title: "4.",
      text1:
        "간단한 퀴즈를 내겠습니다. 지금까지 해왔던 것처럼 질문을 보고, 마음 속으로 답을 한 후 빈 칸을 눌러 생각한 답과 맞는지 확인해보세요.",
      quiz1: {
        qtext1: "1. useState를 true, false 값으로 설정하면",
        blank1: "Toggle",
        qtext2: "기능을 구현할 수 있다.",
      },
      quiz2: {
        qtext1: "2. useEffect 사용 시 deps array를 빈 배열로 두면",
        blank1: "componentDidMount",
        qtext2: "기능을 할 수 있다.",
      },
      quiz3: {
        qtext1: "3. useEffect 사용 시 deps array에 값을 할당하면",
        blank1: "componentDidUpdate",
        qtext2: "와 비슷한 역할을 한다고 볼 수 있다.",
      },
      quiz4: {
        qtext1: "4. useRef는 기본적으로 바닐라 자바스크립트의",
        blank1: "document.getElementById",
        qtext2: "와 비슷한 역할을 한다고 볼 수 있다.",
      },
      quiz5: {
        qtext1: "5. useEffect 내부에서 함수를 리턴하는 경우",
        blank1: "componentWillUnMount",
        qtext2: "기능을 구현할 수 있다.",
      },
    },
    paragrah05: {
      title: "5. 마지막 문제가 이상합니다.",
      text1:
        "다 맞히셨나요? 마지막 5번은 좀 이상한 것 같다는 생각이 들었다면 맞습니다. componentWillUnMount는 여태까지 등장한 적 없는 내용입니다. 그래서 이 부분을 이제부터 하려고 합니다.",
      text2:
        "componentWillUnMount는 componentDidMount, componentDidUpdate와 같이 컴포넌트의 라이프 사이클과 연관된 기능입니다. componentDidMount가 컴포넌트가 실행되는 시점에 시작되고(엄밀히 말하면 실행되는 시점에 진행되는 과정 중 가장 마지막이지만), componentDidUpdate가 컴포넌트의 변화를 감지해 필요한 경우 리렌더링을 해준다면 componentWillUnMount는 컴포넌트 라이프 사이클의 가장 마지막에 위치합니다. 예를 들어 부모 컴포넌트가 자식 컴포넌트를 어떤 이유로 삭제하는 경우, 소멸 직전에 작동하는 부분이라고 할 수 있습니다.",
    },
    paragrah06: {
      title: "6. 이 동그란 것은 무엇일까요?",
      text1:
        "위의 동그라미를 봅시다. 이제 오른쪽 위에 붙어있는 빨간색 동그라미를 주목합시다. 두 동그라미는 같은 것입니다. 그렇다면 이 동그라미가 계속해서 보여주는 x값과 y값은 각각 무엇을 의미할까요? 그 전에 코드를 봅시다.",
      code1: `useEffect(() => {
        // 마우스를 움직일 때마다 이벤트 생성 ---> onMove 실행
        window.addEventListener("mousemove", onMove);
    
        // componentWillUnMount
        return () => {
          window.removeEventListener("mousemove", onMove);
        };
}, [mouseXY]);`,
      text2:
        "주석의 내용과 같이 위의 코드는 마우스를 움직일 때마다 어떤 이벤트를 발생시킵니다. 그 이벤트의 이름은 'onMove'입니다. 여기에서 두 번째 주석을 보면 위에서 붙였던 이벤트를 함수를 리턴함과 동시에 삭제하고 있습니다.",
    },
    paragrah07: {
      title: "7. 왜?",
      text1: "왜 붙여 놓은 이벤트를 삭제하는 것일까요?",
      text2:
        "그것은 경험해보지 않으면 알기 어렵습니다. 지금 상황에서 가장 간단하게 경험해볼 수 있는 것은 위의 코드를 주석처리 하는 것입니다. componentWillUnMount의 기능을 하지 못하도록 removeEventListner를 리턴하는 부분을 지워봅시다. 그러면 어떤 일이 일어날까요?",
    },
    paragrah08: {
      title: "8. 왜 그런 일이 일어날까요?",
      text1:
        "문제의 원인을 알기 위해서는 우리가 작성한 코드가 어떤 순서로 움직이는지 이해해야 합니다. 다시 코드를 봅시다.",
      code1: `const onMove = (e) => {
        setMouseXY({ x: e.pageX, y: e.pageY });
};
      
useEffect(() => {
        // 마우스를 움직일 때마다 이벤트 생성 ---> onMove 실행
        window.addEventListener("mousemove", onMove);
    
        // componentWillUnMount
        return () => {
          window.removeEventListener("mousemove", onMove);
        };
}, []);`,
      text2:
        "마우스를 움직일 때마다 이벤트가 생성되는데, 그 때마다 onMove 함수가 실행됩니다. onMove는 'MouseXY'라는 이름의 state를 변경하는 역할을 합니다. 즉 우리가 마우스를 움직이는 순간마다 onMove 함수가 실행되고, 그에 대한 결과로 mouseXY.x와 mouseXY.y에 실제 마우스 위치값이 각각 담기게 됩니다.",
    },
    paragrah09: {
      title: "9. 문제의 시작",
      text1:
        "왜 해당 이벤트를 삭제해주지 않으면 홈페이지가 작동하지 않는 것일까요? 이유는 onMove 함수가 커서의 위치를 반환하는 만큼 순식간에 굉장히 많은 요청을 발생시킨다는 데에 있습니다. 스크롤과 관련된 이벤트도 마찬가지입니다. 마우스를 한 번 움직여보세요. 숫자가 바뀌는 만큼 이벤트가 일어납니다. 그러면 굉장히 많은 요청이 일어나고 있다는 사실이 와닿을 겁니다.",
      code1: `// componentWillUnMount
      // return () => {
      //  window.removeEventListener("mousemove", onMove);
      // };
// }, []);`,
      text2:
        "이렇게 되면 마우스를 움직이는 모든 순간에 이벤트가 발생합니다. 그리고 그 이벤트는 계속 존재하게 됩니다. 이런 경우를 메모리 누수가 일어나고 있다고 표현하기도 합니다. 메모리 누수는 웹에서 더 이상 사용되지 않음에도 불구하고, 가용한 메모리 풀로 반환되지 않는 메모리를 의미합니다.",
      text3:
        "결과적으로 마우스가 움직일 때마다 이벤트가 생성된다면, 해당 이벤트에 대한 메모리가 할당되었다는 뜻과 같습니다. 그러니 순식간에 많은 요청이 일어나는 만큼 component가 mount되었다면 반드시 componentWillUnMount 단계에서 이벤트를 remove 해주는 것이 안전합니다.",
    },
  },

  imgStart: true,
  dark: false,
  primary: true,
  darkText: false,
};
