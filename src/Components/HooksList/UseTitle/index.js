import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import { useTitle } from "./UseTitleData";
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
} from "./UseTitleElements";

function UseTitle() {
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
          <TopLine>{useTitle.topLine}</TopLine>
          <Heading lightText={useTitle.lightText}>{useTitle.headLine}</Heading>
          <SubTitle>{useTitle.description}</SubTitle>
        </ArticleTitleWrapper>
        <BtnWrap>
          <Button
            onClick={() => setTitle("Changed!!!")}
            primary={useTitle.primary ? 1 : 0}
            dark={useTitle.dark ? 1 : 0}
            radius={50}
            height={150}
            width={150}
          >
            {useTitle.buttonLabel1}
          </Button>
          <Button
            onClick={handleSubmit}
            primary={useTitle.primary ? 1 : 0}
            dark={useTitle.dark ? 1 : 0}
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
          <SubTitle darkText={useTitle.darkText}>{useTitle.subTitle1}</SubTitle>
          <Paragraph>{useTitle.paragrah1}</Paragraph>
        </TextWrapper>

        {/* 2 */}
        <TextWrapper>
          <SubTitle darkText={useTitle.darkText}>{useTitle.subTitle2}</SubTitle>
          <Paragraph>{useTitle.paragrah2}</Paragraph>
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
          <SubTitle darkText={useTitle.darkText}>{useTitle.subTitle3}</SubTitle>
          <Paragraph>
            <UseTitleCodeBlock
              text={`// useEffect로 title 업데이트 시 updateTitle 함수 호출
useEffect(updateTitle, [title]);`}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useTitle.paragrah3}</Paragraph>
        </TextWrapper>

        {/* 4 */}
        <TextWrapper>
          <SubTitle darkText={useTitle.darkText}>{useTitle.subTitle4}</SubTitle>
          <Paragraph>
            <UseTitleCodeBlock
              text={`const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
};`}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useTitle.paragrah4}</Paragraph>
        </TextWrapper>

        {/* 5 */}
        <TextWrapper>
          <SubTitle darkText={useTitle.darkText}>{useTitle.subTitle5}</SubTitle>
          <Paragraph>{useTitle.paragrah5}</Paragraph>
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
          <SubTitle darkText={useTitle.darkText}>{useTitle.subTitle6}</SubTitle>

          <Paragraph>{useTitle.paragrah6}</Paragraph>
          <Paragraph>
            <UseTitleCodeBlock
              text={`onClick={() => setTitle("Changed!!!")}`}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useTitle.paragrah7}</Paragraph>
        </TextWrapper>

        {/* 7 */}
        <TextWrapper>
          <SubTitle darkText={useTitle.darkText}>{useTitle.subTitle7}</SubTitle>

          <Paragraph>{useTitle.paragrah8}</Paragraph>
        </TextWrapper>

        {/* 8 */}
        <TextWrapper>
          <SubTitle darkText={useTitle.darkText}>{useTitle.subTitle8}</SubTitle>

          <Paragraph>{useTitle.paragrah9}</Paragraph>
          <Paragraph>
            <UseTitleCodeBlock
              text={`onClick={() => setTitle("Changed!!!")}`}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useTitle.paragrah10}</Paragraph>
        </TextWrapper>

        {/* 9 */}
        <TextWrapper>
          <SubTitle darkText={useTitle.darkText}>{useTitle.subTitle9}</SubTitle>

          <Paragraph>{useTitle.paragrah11}</Paragraph>
          <Paragraph>
            <UseTitleCodeBlock
              text={`const [userTitle, setUserTitle] = useState("Read First");`}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useTitle.paragrah12}</Paragraph>
        </TextWrapper>

        {/* 10 */}
        <TextWrapper>
          <SubTitle darkText={useTitle.darkText}>
            {useTitle.subTitle10}
          </SubTitle>
          <Paragraph>{useTitle.paragrah13}</Paragraph>

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
          <Paragraph>{useTitle.paragrah14}</Paragraph>
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

export default UseTitle;
