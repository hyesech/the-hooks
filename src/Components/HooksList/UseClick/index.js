import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import { useClick } from "./UseClickData";
import { UseTitleCodeBlock } from "../../CodeBlock";
import { Button } from "../../ButtonElements";
import {
  Container,
  ArticleTitle,
  ArticleTitleWrapper,
  ArticleWrapper,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  Paragraph,
  BtnWrap,
  Form,
  InputWrapper,
  Input,
  UpBtn,
  Reference,
  ReferenceWrapper,
} from "./UseClickElements";

function UseClick() {
  const [title, setTitle] = useState("Change Me...");
  const [userTitle, setUserTitle] = useState("Read First");

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };

  useEffect(updateTitle, [title]);

  const toggleToTop = () => {
    scroll.scrollToTop();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userTitle === "Read First") {
      setUserTitle("읽고 다시 오세요!");
      const htmlTitle = document.querySelector("title");
      htmlTitle.innerText = "먼저 읽으라고 했지...";
      alert("읽고 다시 올라오세요!!!!!!!");
    } else {
      setUserTitle(userTitle);
      setTitle(userTitle);
    }
  };

  const updateUserTitle = (e) => {
    const {
      target: { value },
    } = e;
    setUserTitle(value);
  };

  return (
    <Container>
      <ArticleTitle>
        <ArticleTitleWrapper>
          <TopLine>{useClick.topLine}</TopLine>
          <Heading lightText={useClick.lightText}>{useClick.headLine}</Heading>
          <SubTitle>{useClick.description}</SubTitle>
        </ArticleTitleWrapper>
        <BtnWrap>
          <Button
            onClick={() => setTitle("Changed!!!")}
            primary={useClick.primary ? 1 : 0}
            dark={useClick.dark ? 1 : 0}
            radius={50}
            height={150}
            width={150}
          >
            {useClick.buttonLabel1}
          </Button>
          <Button
            onClick={handleSubmit}
            primary={useClick.primary ? 1 : 0}
            dark={useClick.dark ? 1 : 0}
            radius={50}
            height={userTitle.length * 15}
            width={userTitle.length * 15}
          >
            {userTitle}
          </Button>
        </BtnWrap>
      </ArticleTitle>

      <ArticleWrapper>
        {/* 1*/}
        <TextWrapper>
          <SubTitle darkText={useClick.darkText}>{useClick.subTitle1}</SubTitle>
          <Paragraph>{useClick.paragrah1}</Paragraph>
        </TextWrapper>

        {/* 2 */}
        <TextWrapper>
          <SubTitle darkText={useClick.darkText}>{useClick.subTitle2}</SubTitle>
          <Paragraph>{useClick.paragrah2}</Paragraph>
          <Paragraph>
            <UseTitleCodeBlock
              text={`// useState로 기본 타이틀 지정
const [title, setTitle] = useState('Change Me...');`}
              showLineNumbers={false}
            />
          </Paragraph>
        </TextWrapper>

        {/* 3 */}
        <TextWrapper>
          <SubTitle darkText={useClick.darkText}>{useClick.subTitle3}</SubTitle>
          <Paragraph>
            <UseTitleCodeBlock
              text={`// useEffect로 title 업데이트 시 updateTitle 함수 호출
useEffect(updateTitle, [title]);`}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useClick.paragrah3}</Paragraph>
        </TextWrapper>

        {/* 4 */}
        <TextWrapper>
          <SubTitle darkText={useClick.darkText}>{useClick.subTitle4}</SubTitle>
          <Paragraph>
            <UseTitleCodeBlock
              text={`const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
};`}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useClick.paragrah4}</Paragraph>
        </TextWrapper>

        {/* 5 */}
        <TextWrapper>
          <SubTitle darkText={useClick.darkText}>{useClick.subTitle5}</SubTitle>
          <Paragraph>{useClick.paragrah5}</Paragraph>
          <Paragraph>
            <UseTitleCodeBlock
              text={`<Button
      onClick={() => setTitle("Changed!!!")}
      primary={useTitle.primary ? 1 : 0}
      dark={useTitle.dark ? 1 : 0}
      radius={50}
      height={150}
      width={150}
      >
      {useTitle.buttonLabel1}
</Button>`}
              showLineNumbers={false}
            />
          </Paragraph>
        </TextWrapper>

        {/* 6 */}
        <TextWrapper>
          <SubTitle darkText={useClick.darkText}>{useClick.subTitle6}</SubTitle>

          <Paragraph>{useClick.paragrah6}</Paragraph>
          <Paragraph>
            <UseTitleCodeBlock
              text={`onClick={() => setTitle("Changed!!!")}`}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useClick.paragrah7}</Paragraph>
        </TextWrapper>

        {/* 7 */}
        <TextWrapper>
          <SubTitle darkText={useClick.darkText}>{useClick.subTitle7}</SubTitle>

          <Paragraph>{useClick.paragrah8}</Paragraph>
        </TextWrapper>

        {/* 8 */}
        <TextWrapper>
          <SubTitle darkText={useClick.darkText}>{useClick.subTitle8}</SubTitle>

          <Paragraph>{useClick.paragrah9}</Paragraph>
          <Paragraph>
            <UseTitleCodeBlock
              text={`onClick={() => setTitle("Changed!!!")}`}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useClick.paragrah10}</Paragraph>
        </TextWrapper>

        {/* 9 */}
        <TextWrapper>
          <SubTitle darkText={useClick.darkText}>{useClick.subTitle9}</SubTitle>

          <Paragraph>{useClick.paragrah11}</Paragraph>
          <Paragraph>
            <UseTitleCodeBlock
              text={`const [userTitle, setUserTitle] = useState("Read First");`}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useClick.paragrah12}</Paragraph>
        </TextWrapper>

        {/* 10 */}
        <TextWrapper>
          <SubTitle darkText={useClick.darkText}>
            {useClick.subTitle10}
          </SubTitle>
          <Paragraph>{useClick.paragrah13}</Paragraph>

          <Paragraph>
            <UseTitleCodeBlock
              text={`const handleSubmit = (e) => {
     e.preventDefault();
            
          if (userTitle === "Read First") {
                // userTitle이 바뀌지 않은 경우
                // 경고 띄우는 함수 등
          } else {
                setUserTitle(userTitle);
                setTitle(userTitle);
          }
};`}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useClick.paragrah14}</Paragraph>
        </TextWrapper>
      </ArticleWrapper>

      <Reference>
        <ReferenceWrapper>
          <InputWrapper>
            <UpBtn>
              <FaArrowUp type="submit" onClick={toggleToTop} cursor="pointer" />
            </UpBtn>
            <Form>
              <Input
                placeholder="10. 원하는 타이틀을 입력하고 버튼을 눌러 위로 돌아가세요!"
                onChange={updateUserTitle}
              ></Input>
            </Form>
          </InputWrapper>
        </ReferenceWrapper>
      </Reference>
    </Container>
  );
}

export default UseClick;
