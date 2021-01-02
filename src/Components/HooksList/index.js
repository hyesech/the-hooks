import React from "react";
import Icon1 from "../../Images/info-01.svg";
import Icon2 from "../../Images/info-02.svg";
import Icon3 from "../../Images/info-03.svg";

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
            <ServicesIcon src={Icon1} />
            <ServicesH2>useTitle</ServicesH2>
            <ServicesP>Let's change our title.</ServicesP>
          </ServicesCard>
        </Link>
        <Link to="/usetitle">
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Virtual Offices</ServicesH2>
            <ServicesP>
              We can access our platform online anywhere in the world.
            </ServicesP>
          </ServicesCard>
        </Link>
        <Link to="/usetitle">
          <ServicesCard>
            <ServicesIcon src={Icon3} />
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
