import React, { useState } from "react";
import Number01 from "../../Images/number01.svg";
import Number02 from "../../Images/number02.svg";
import Number03 from "../../Images/number03.svg";
// import Number04 from "../../Images/number04.svg";
// import Number05 from "../../Images/number05.svg";
// import Number06 from "../../Images/number06.svg";
// import Number07 from "../../Images/number07.svg";
// import Number08 from "../../Images/number08.svg";
// import Number09 from "../../Images/number09.svg";

import {
  Link,
  HookContainer,
  HookH1,
  HookWrapper,
  HookCard,
  HookIcon,
  Text,
  HookH2,
  HookP,
} from "./HooksListElements";

const HooksList = () => {
  const [numberColorIsRed, setNumberColorisRed] = useState(false);

  const changeNumberColor = () => {
    setNumberColorisRed(!numberColorIsRed);
    console.log(numberColorIsRed);
  };

  return (
    <HookContainer id="hooklist">
      <HookH1>Hook List</HookH1>
      <HookWrapper>
        <Link to="/usetitle">
          <HookCard>
            <HookIcon src={Number01} onMouseOver={changeNumberColor} />
            <Text>
              <HookH2>useTitle</HookH2>
              <HookP>Let's change our title.</HookP>
            </Text>
          </HookCard>
        </Link>
        <Link to="/useref">
          <HookCard>
            <HookIcon src={Number02} onMouseOver={changeNumberColor} />
            <Text>
              <HookH2>useRef</HookH2>
              <HookP>componentWillUnMount?</HookP>
            </Text>
          </HookCard>
        </Link>
        <Link to="/usememo">
          <HookCard>
            <HookIcon src={Number03} onMouseOver={changeNumberColor} />
            <Text>
              <HookH2>useMemo</HookH2>
              <HookP>useCallback</HookP>
            </Text>
          </HookCard>
        </Link>
      </HookWrapper>
    </HookContainer>
  );
};

export default HooksList;
