import React from 'react'
import styled from "styled-components";

const SmallTextOne = styled.p`
    font-family: 'Addington CF';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 158%;
    text-align: center;
    letter-spacing: -0.02em;
    text-decoration: underline;
    text-transform: capitalize;
    color: #000000;
    opacity: 0.9;
`;
const SmallTextTwo = styled.p`
font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 17px;
margin-top: 15px;

letter-spacing: -0.06em;
`;
const HeaderMainText = styled.p`
font-family: 'Noto Serif KR';
font-style: normal;
font-weight: 600;
font-size: 25px;
line-height: 33px;
margin: 8px;

text-align: center;
letter-spacing: -0.02em;
`;
const Image = styled.img`
  padding-top: 10px;
  margin-bottom: -3px;
  width: 96%;
`;
const HeaderHeadingP = styled.p`
font-family: "Pretendard";
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
letter-spacing: -0.12em;
opacity: 0.9;
`;
const HeaderHeading = styled.div`
  display: inline-block;
  text-align: center;
  margin: 0 10px;
  width: 80%;
`;
const Arrow = styled.div`
margin: 6px 20px 4px 20px;
`;
const HeaderImage = styled.div`
background-color: #e7e1db;
text-align: center;
padding: 15px 32px 0 32px;
`;
const ArrowIcon = styled.i`
`;
function Header() {
    return (
        <>
            <Arrow>
                <i className="fa-solid fa-arrow-right fa-rotate-180 fa-xl"></i>
                <HeaderHeading>
                    <HeaderHeadingP>친구 초대</HeaderHeadingP>
                </HeaderHeading>
            </Arrow>
            <HeaderImage>
                <SmallTextOne>Invitation Event</SmallTextOne>
                <HeaderMainText>시크에친구초대하고</HeaderMainText>
                <HeaderMainText>무제한포인트받으세요.</HeaderMainText>
                <SmallTextTwo>( 초대 친구 수 X 최대 15,000원 )</SmallTextTwo>
                <Image src="./Group 2017.png" alt=''></Image>
            </HeaderImage>
        </>
    )
}

export default Header; 
