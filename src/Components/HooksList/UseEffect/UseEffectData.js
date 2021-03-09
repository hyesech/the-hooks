export const useEffectData = {
  lightText: true,
  topLine: "recap",
  headLine: "useEffect Recap",
  description:
    "이 페이지의 주제는 useEffect RECAP입니다. 그런데 잘못된 부분이 있네요. 클릭해서 원래의 주제인 useEffect RECAP으로 고쳐주세요.",
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
  },

  imgStart: true,
  dark: false,
  primary: true,
  darkText: false,
};
