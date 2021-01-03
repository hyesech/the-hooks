import React from "react";
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
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./HooksListElements";

const HooksList = () => {
  return (
    <ServicesContainer id="hooklist">
      <ServicesH1>Hook List</ServicesH1>
      <ServicesWrapper>
        <Link to="/usetitle">
          <ServicesCard>
            <ServicesIcon src={Number01} />
            <ServicesH2>useTitle</ServicesH2>
            <ServicesP>Let's change our title.</ServicesP>
          </ServicesCard>
        </Link>
        <Link to="/usetitle">
          <ServicesCard>
            <ServicesIcon src={Number02} />
            <ServicesH2>Virtual Offices</ServicesH2>
            <ServicesP>
              We can access our platform online anywhere in the world.
            </ServicesP>
          </ServicesCard>
        </Link>
        <Link to="/usetitle">
          <ServicesCard>
            <ServicesIcon src={Number03} />
            <ServicesH2>Premium Benefits</ServicesH2>
            <ServicesP>
              Unlock our special membership card that returns 5% cash back.
            </ServicesP>
          </ServicesCard>
        </Link>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default HooksList;
