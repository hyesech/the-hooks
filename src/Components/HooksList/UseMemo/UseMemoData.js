export const useMemoData = {
  lightText: true,
  topLine: "useMemo",
  headLine: "useMemo",
  description:
    "이 페이지의 주제는 useMemo입니다. 그런데 잘못된 부분이 있네요. 클릭해서 원래의 주제인 useMemo로 고쳐주세요.",
  contents: {
    paragraph01: {
      title: "1. x값과, y값",
      text1:
        "지난 번에 우리는 페이지 하단의 x와 y를 클릭해 값의 위치를 얻었습니다. x,y 값이 가리키는 좌표지점에는 useRef가 있었고, 우리는 그 문자를 클릭해 답을 찾아 이 페이지로 넘어왔습니다. 지난번 페이지는 x와 y값을 한 눈에 보기 어려워서 이번 페이지에서는 구조를 조금 바꿨습니다. 아래의 원을 보세요.",
      text2:
        "이번 페이지에서 우리는 x, y값을 빨간색 동그라미 위에 적어 두려고 합니다. 지난 번에 x, y값을 적어 두었던 오른쪽 위의 붉은색 원은 'L', 'M', 'R'이라는 글자를 가진 원 3개로 바꿔 두었습니다.",
      text3:
        "'TARGET'이 움직이지 않으니 숫자도 변하지 않는 것이 당연합니다. 그러면 이제 타겟을 움직일 수 있도록 코드를 바꾸겠습니다.",
    },
    paragrah02: {
      title: "2. TARGET을 조작해봅시다",
      text1:
        "간단한 코드를 추가해서 버튼을 만들었습니다. 위 버튼을 클릭하면 TARGET이 이동합니다. 물론 오른쪽 위에 붙어있는 버튼을 클릭해도 똑같이 동작합니다. 두 버튼은 같은 버튼입니다. 또, 이 버튼은 setState를 이용하면 쉽게 만들 수 있습니다. 코드는 아래와 같습니다.",
      code1: `const [position, setPosition] = useState("center");

// 왼쪽으로 보내기
const toLeft = () => {
  setPosition("flex-start");
};`,

      text2:
        "그런데 오른쪽 상단의 빨간색 원을 확인해보세요. 타겟이 이동하는데 좌표값은 그대로입니다. y축으로는 움직이지 않고 있으니 x값은 변해야 하는데, 값이 그대로입니다. 왜 그러는 걸까요?",
    },
    paragrah03: {
      title: "3. useEffect",
      text1:
        "지금까지 알아낸 것을 토대로 생각해보면, 아마 이 웹사이트는 지금 TARGET의 위치가 바뀌었는지, 바뀌지 않았는지 알아낼 수 있는 능력이 없는 것 같습니다.",
      code1: `const setTargetPosition = () => {
        setTargetXY({
          x: target.current.offsetLeft + 80,
          y: target.current.offsetTop + 30,
        });
};
    
useEffect(() => {
    setTargetPosition();
}, []);`,
      text2:
        "확인해보니 deps array가 비어 있네요. 그러면 이 useEffect는 웹 페이지 실행 시(component가 최초로 mount 되는 시점) 한 번만 setTargetPosition이라는 함수를 실행하고 두 번다시 실행하지 않습니다. 웹 페이지를 새로고침하는 경우를 제외하면요.",
    },
    paragrah04: {
      title: "4. 수정한 결과입니다.",
      text1:
        "새로 만든 원입니다. 여기서부터는 위의 버튼이 한 화면에 보이지 않을테니 오른쪽 상단에 붙어있는 버튼을 사용해보세요. 똑같이 작동합니다.",
      text2:
        "기존의 원과 다른 위치에 있기 때문에 당연히 x값과 y값 역시 다릅니다. 코드는 아래와 같이 수정했습니다.",
      code1: `useEffect(() => {
        setTargetPosition();
}, [position]);`,
      text3:
        "기존 코드와 다른 점은 deps array에 position을 넣어 주었다는 것입니다. 여기서 position이 무엇인지 기억나지 않는다면 2번 문단을 다시 읽어보세요. 누군가 버튼을 누르는 순간 setPosition이 실행되면서 position state의 값을 변경합니다. 그러면 useEffect는 state가 변경되었음을 감지하고 setTargetPosition 함수를 실행시킵니다. 따라서 이제 우리 웹페이지는 원의 위치 변경을 파악할 수 있게 되었습니다. 기존의 원과 비교해보세요.",
    },
    paragrah05: {
      title: "5. 그러면 useMemo는?",
      text1:
        "그렇다면 useEffect로도 충분한데 useMemo는 언제 사용되는 걸까요? 그 전에, useMemo는 무엇일까요?",
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
