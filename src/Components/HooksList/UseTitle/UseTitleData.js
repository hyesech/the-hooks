export const useTitle = {
  lightText: true,
  topLine: "useTitle",
  headLine: "Click the buttons",
  description:
    '먼저 타이틀을 확인하세요. 그리고 "Click Me" 버튼을 클릭하세요. 그러면 이 페이지의 타이틀을 바꿀 수 있습니다.아래쪽 버튼을 누르려면 아래의 글을 모두 읽고 이해한 다음 누르세요.',
  subTitle1: "1. Nice! 방금 클릭 한 번으로 타이틀을 바꿨어요.",
  paragrah1:
    "'Click Me' 버튼을 눌렀을 때 페이지의 타이틀(Change Me)이 Changed로 바뀌는 것을 보셨나요? 어떻게 클릭 한 번으로 웹 사이트 타이틀의 제목을 바꿀 수 있는 것일까요? 'Click Me' 버튼을 누르는 순간 이 웹사이트에서는 무슨 일이 벌어지고 있는 것일까요? 이 웹사이트에는 useTitle이라는 이름의 커스텀 훅을 사용하였습니다. 정확히 말하자면 이 페이지에 훅을 사용하였습니다. 먼저 코드를 보면 다음과 같습니다.",
  subTitle2: "2. useState",
  paragrah2:
    "먼저 useState를 사용해 title의 디폴트 값을 'Change Me...'로 설정합니다.",

  subTitle3: "3. useEffect",
  paragrah3:
    "그리고 useEffect를 위와 같이 선언하면 useEffect는 componentDidMount의 역할을 합니다. 그래서 페이지가 로딩되면 가장 먼저 title에 디폴트로 설정한 값 'Change Me...'를 할당하고, 이후 어떠한 이유로 title의 값이 변경되는 순간 updateTitle 함수를 호출하도록 만듭니다.",
  subTitle4: "4. updateTitle",
  paragrah4:
    "'updateTitle' 함수는 이렇게 생겼습니다. 하는 역할은 간단합니다. 'htmlTitle' 변수에 document.querySelector를 이용해 우리가 알고 있는 HTML의 '<Title></Title>' 부분을 가져옵니다. 그리고 innerText로 그 안의 문자를 선택합니다. 그 위치에 우리의 title을 새로 할당하는 일을 'updateTitle'이 해주고 있는 거죠! 쉽게 말하면 이 함수가 실질적으로 우리 웹 사이트의 타이틀을 바꿔주는 역할을 담당합니다.",
  subTitle5: "5. 그럼 언제 Hook을 쓰는 걸까?",
  paragrah5:
    "이제 남은 의문은 버튼을 클릭하는 것과 타이틀이 바뀌는 것 사이에 어떤 상관 관계가 있는지에 대한 의문입니다. 그러니까 useState와 useEffect도 알겠고, 타이틀을 바꿔주는 'updateTitle' 함수도 알겠는데 그게 왜 Hook인지 의문이 생깁니다. 아래의 코드를 보세요!",
  paragrah6:
    "위의 코드는 이 페이지에서 버튼을 만드는 역할을 하는 코드입니다. 네, 아까 우리가 클릭했던 마법의 버튼 맞습니다! 조금 복잡하게 생겼는데 그건 제가 버튼을 여러번 사용하기 위해서 일종의 커스터마이징을 해둔 거라 그렇습니다. 우리가 주목해야 하는 부분은 'onClick' 부분입니다! 다시 이 부분만 봅시다.",
  subTitle6: "6. onClick?",
  paragrah7:
    "'onClick'은 HTML의 마우스 이벤트 속성입니다. 말 그대로 클릭을 하면? 이라는 뜻입니다. 클릭을 했을 때 어떤 이벤트를 발생시키겠다! 이것을 브라우저에게 알려주는 역할을 합니다. 어떤 이벤트를 발생시킬지는 우리가 정할 수 있어요. 다시 위의 'onClick' 부분을 보면, Javascript ES6의 화살표 함수가 보입니다. 익명함수를 화살표 함수로 작성해 두었는데요, 즉 클릭을 하면 우리가 발생시키자고 약속한 이벤트는 'setTitle('Changed!!!')가 되는 겁니다! 'setTitle'은 어디서 봤을까요? 2번의 useState 부분을 다시 봅시다. 우리는 이미 setTitle을 useState의 두 번째 배열에 넣어 두었습니다. setTitle은 title의 값을 바꾸는 역할을 하지요.",
  subTitle7: "7. 그 결과...",
  paragrah8:
    "결과적으로 setTitle은 우리가 괄호 안에 설정한 값으로 'title' 변수의 값을 변경합니다. 여기서 주목해야 하는 부분은 'title' 변수의 값이 변경되었다는 점입니다! useEffect가 언제 일을 하지요? 이 페이지의 경우 우리가 설정한 useEffect는 변수 'title'의 값이 변경되는 순간 호출됩니다! 그리고 useEffect는 다시 첫 번째 인자였던 'updateTitle' 함수를 호출하죠. 그래서 실질적으로 페이지의 타이틀이 바뀌게 됩니다. 그렇다면 다시 'Click Me' 버튼을 클릭하면 어떻게 될까요? 다시 클릭하고 돌아와도 좋습니다.",
  subTitle8: "8. 어떻게 됐나요?",
  paragrah9:
    "왜 이런 결과가 나오는 걸까요? 우리가 만든 useEffect는 'title'에 담긴 값이 변하는지 변하지 않는지 계속해서 주시하고 있을 겁니다. 'Click Me' 버튼을 누르면 'title'에 담긴 값이 바뀔까요? 지금 'title'에 담겨있는 값은 무엇일까요? 그건 현재 우리 페이지의 실제 타이틀이 알려줍니다. 아까 변경한 대로 여전히 'Changed!!!' 입니다. 다시 아래 코드를 봅시다.",
  paragrah10:
    "우리가 'Click Me' 버튼을 클릭하면 계속해서 'title'의 값은 'Changed!!!'로 갱신됩니다. 변수의 값이 바뀌었나요? 바뀌지 않았기 때문에 useEffect는 호출되지 않습니다.",

  subTitle9: "9. 바꾸는 방법이 있긴 합니다!",
  paragrah11:
    "'title'에 담긴 값이 클릭할 때마다 업데이트 되도록 하면 됩니다. 사실 그래서 Hook을 하나 더 만들었어요.",
  paragrah12:
    "userTitle과 setUserTitle을 useState로 선언하고 기본 값으로 'Read First'를 주었습니다. 아마 이 글을 다 읽지 않고 'Click Me' 버튼을 누를 때 'Read First' 버튼을 클릭했다면 타이틀이 '읽고 다시 오랬지...'로 바뀌고 경고문이 떴을 거예요. 경고음도 넣으려다가 말았어요.",
  subTitle10: "10. 이제 조금 더 자유롭게 타이틀을 바꿔 봅시다.",
  paragrah13:
    "지금까지 우리가 할 수 있는 것은 버튼을 클릭해서 정해진 함수를 활성화 시켜 타이틀을 바꾸는 것이었습니다. 이제는 우리가 원하는대로 타이틀을 바꿔 봅시다. 아래의 코드를 보세요.",
  paragrah14:
    "'handleSubmit' 함수는 위의 onClick 이벤트와 같은 역할을 합니다. 아까는 이름이 없는 익명함수로 onClick 이벤트가 발생하자마자 setTitle을 실행시켰다면, 이번에는 onClick 이벤트가 발생하면 'handleSubmit' 함수가 실행되도록 만들어 두었어요. 왜 그랬냐면 경고문도 띄워야 하고 할 일이 많아서 아까처럼 익명 함수로 하기에는 조금 할 일이 많았습니다. 중요한 것은 else 구문 안쪽에 있는 부분입니다. 'setUserTitle' 함수가 'userTitle'의 값을 변경하면, 바로 'title'이 바뀌도록 해두었습니다. 그러면 이제 'userTitle'을 변경하면 자연스럽게 'title'이 변경될 거예요. 그러면 'title'을 주시하고 있던 useEffect가 호출되겠지요! 자, 이제 10번으로 갑시다! 원하는 만큼 많이 입력해보세요!",
  buttonLabel1: "Click Me",
  buttonLabel2: "Reset Title",
  imgStart: true,
  dark: false,
  primary: true,
  darkText: false,
};
