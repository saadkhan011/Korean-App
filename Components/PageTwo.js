import React from 'react'
import styled from 'styled-components'

const Heading = styled.p`
font-family: "Noto Serif KR";
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 150%;
text-align: center;
letter-spacing: -0.08em;
color: #222222;
margin: 20px;
`;
const SubHeading = styled.p`
padding: 3px 80px 10px 80px;
font-family: "Pretendard";
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: center;
letter-spacing: -0.02em;
letter-spacing: -1px;
`;
const RedButton = styled.div`
display: inline-block;
background: #E33535;
color: white;
padding: 16px 0;
width: 80%;
font-family: "Pretendard";
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 22px;
color: #ffffff;
`;
const RoundedButton = styled.div`
display: inline-block;
padding: 5px 10px;
border: 1px solid black;
border-radius: 20px;
font-family: "Pretendard";
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 18px;
text-transform: capitalize;
color: #222222;
`;
const Box = styled.div`
background-color: #f8f8f8;
width: 80%;
padding: 16px 0px;
display: flex;
margin: 17px auto;
align-items: center;
justify-content: center;
border: 1px solid #dddddd;
`;
const Hr = styled.hr`
width: 80%;
margin-left: auto;
margin-right: auto;
`;
const EnglishText = styled.p`
flex-grow: 2;
padding: 0 15px;
margin: 0;
font-family: "Pretendard";
font-style: normal;
font-weight: 600;
font-size: 16px;
/* line-height: 22px; */
/* identical to box height, or 138% */

/* Grayscale/Gray01 */

color: #222222;
text-align: left;
`;
const Button = styled.button`
width: 39%;
border-radius: 0px !important;
margin: 0 3px;
border: none;
background-color: #222222 !important;
padding: 17px 0px !important;
font-family: "Pretendard";
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */
color: #ffffff;
`;
const PaddClass = styled.div`
padding: 80px 0 !important;
`;
const PageTwoDiv = styled.div`
text-align: center;
`;
const PageTwoSecondBox = styled.div`
padding: 20px 0 100px 0;
`;
const Span = styled.span`
font-family: "Pretendard";
padding: 0 15px;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

color: #BA2533;
`;


function PageTwo() {

  return (
    <PageTwoDiv>
      <Hr />
      <PaddClass>
        <RoundedButton>신규 회원</RoundedButton>
        <Heading>초대를 받았어요.</Heading>
        <SubHeading>가입일로부터 최대 7일 이내에 입력해주세요. (1회 한정)</SubHeading>
        <RedButton>초대 코드 입력</RedButton>
      </PaddClass>
      <Hr />
      <PageTwoSecondBox>
        <RoundedButton>나의 코드</RoundedButton>
        <Heading>초대를 하고 싶어요.</Heading>
        <SubHeading>초대한 친구가 신규 가입 & 첫 구매 시 나에게 포인트가 지급됩니다.</SubHeading>
        <Box>
          <EnglishText>CHICCODE1234</EnglishText>
          <Span>코드 복사</Span>
        </Box>
        <Button>카카오톡 공유</Button>
        <Button>링크 공유</Button>
      </PageTwoSecondBox>
    </PageTwoDiv>
  )
}

export default PageTwo