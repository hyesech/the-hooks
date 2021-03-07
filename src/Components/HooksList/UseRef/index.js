import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useRefData } from "./UseRefData";
import { DefaultCodeBlock } from "../../CodeBlock";
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
} from "./UseRefElements";

function UseRef() {
  return (
    <Container>
      <ArticleTitle>
        <ArticleTitleWrapper>
          <TopLine>{useRefData.topLine}</TopLine>
          <Heading lightText={useRefData.lightText}>
            {useRefData.headLine}
          </Heading>
          <SubTitle>{useRefData.description}</SubTitle>
        </ArticleTitleWrapper>
      </ArticleTitle>

      <ArticleWrapper>
        {/* 1*/}
        <TextWrapper>
          <SubTitle darkText={useRefData.darkText}>
            {useRefData.contents.paragraph01.title}
          </SubTitle>
          <Paragraph>{useRefData.contents.paragraph01.text}</Paragraph>
        </TextWrapper>

        {/* 2 */}
        <TextWrapper>
          <SubTitle darkText={useRefData.darkText}>
            {useRefData.subTitle2}
          </SubTitle>
          <Paragraph>{useRefData.paragrah2}</Paragraph>
          <Paragraph>
            <DefaultCodeBlock
              text={`// useState로 기본 타이틀 지정
const [title, setTitle] = useState('Change Me...');`}
              showLineNumbers={false}
            />
          </Paragraph>
        </TextWrapper>

        {/* 3 */}
        <TextWrapper>
          <SubTitle darkText={useRefData.darkText}>
            {useRefData.subTitle3}
          </SubTitle>
          <Paragraph>
            <DefaultCodeBlock
              text={`// useEffect로 title 업데이트 시 updateTitle 함수 호출
useEffect(updateTitle, [title]);`}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useRefData.paragrah3}</Paragraph>
        </TextWrapper>

        {/* 4 */}
        <TextWrapper>
          <SubTitle darkText={useRefData.darkText}>
            {useRefData.subTitle4}
          </SubTitle>
          <Paragraph>
            <DefaultCodeBlock
              text={`const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
};`}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useRefData.paragrah4}</Paragraph>
        </TextWrapper>

        {/* 5 */}
        <TextWrapper>
          <SubTitle darkText={useRefData.darkText}>
            {useRefData.subTitle5}
          </SubTitle>
          <Paragraph>{useRefData.paragrah5}</Paragraph>
          <Paragraph>
            <DefaultCodeBlock
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
          <SubTitle darkText={useRefData.darkText}>
            {useRefData.subTitle6}
          </SubTitle>

          <Paragraph>{useRefData.paragrah6}</Paragraph>
          <Paragraph>
            <DefaultCodeBlock
              text={`onClick={() => setTitle("Changed!!!")}`}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useRefData.paragrah7}</Paragraph>
        </TextWrapper>

        {/* 7 */}
        <TextWrapper>
          <SubTitle darkText={useRefData.darkText}>
            {useRefData.subTitle7}
          </SubTitle>

          <Paragraph>{useRefData.paragrah8}</Paragraph>
        </TextWrapper>

        {/* 8 */}
        <TextWrapper>
          <SubTitle darkText={useRefData.darkText}>
            {useRefData.subTitle8}
          </SubTitle>

          <Paragraph>{useRefData.paragrah9}</Paragraph>
          <Paragraph>
            <DefaultCodeBlock
              text={`onClick={() => setTitle("Changed!!!")}`}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useRefData.paragrah10}</Paragraph>
        </TextWrapper>

        {/* 9 */}
        <TextWrapper>
          <SubTitle darkText={useRefData.darkText}>
            {useRefData.subTitle9}
          </SubTitle>

          <Paragraph>{useRefData.paragrah11}</Paragraph>
          <Paragraph>
            <DefaultCodeBlock
              text={`const [userTitle, setUserTitle] = useState("Read First");`}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useRefData.paragrah12}</Paragraph>
        </TextWrapper>

        {/* 10 */}
        <TextWrapper>
          <SubTitle darkText={useRefData.darkText}>
            {useRefData.subTitle10}
          </SubTitle>
          <Paragraph>{useRefData.paragrah13}</Paragraph>

          <Paragraph>
            <DefaultCodeBlock
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
          <Paragraph>{useRefData.paragrah14}</Paragraph>
        </TextWrapper>
      </ArticleWrapper>

      <Reference>
        <ReferenceWrapper></ReferenceWrapper>
      </Reference>
    </Container>
  );
}

export default UseRef;
