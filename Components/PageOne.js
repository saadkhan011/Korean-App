import React from 'react'
import Slider from './Slider'
import styled from "styled-components";

const PageOneDiv = styled.div`
    text-align: center;
    padding-top: 33px;
`;
    const Box = styled.div`
    padding-top: 45px;
`;
    const Heading = styled.p`
    font-family: 'Noto Serif KR';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 150%;
    text-align: center;
    letter-spacing: -0.08em;
    margin: 5px;
`;
    const SubHeading = styled.p`
    padding: 0px 80px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #222222;
`;
    const Span = styled.span`
    color: #BA2533;
`;
    const Image2 = styled.img`
    width: 76%;
    padding-top: 12px;
`;
    const Image3 = styled.img`
    padding-top: 12px;
    width: 56%;
`;


function PageOne() {
    return (
        <PageOneDiv>
            <Box>
                <Heading>혜택. 1</Heading>
                <SubHeading>초대한 친구가 시크에
                    <Span>신규 가입 시나와</Span>
                    친구 각각 포인트 지급
                </SubHeading>
                <Image2 src="./Group 2021.png" alt="" />
            </Box>
            <Box>
                <Heading>혜택. 2</Heading>
                <SubHeading>초대한 친구가 시크에서 <Span>첫 구매</Span> 후
                    ‘구매 확정’시, 나에게 포인트 지급</SubHeading>
                <Image3 src="./Group 2012.png" alt="" />
            </Box>
            <Box>
                <Heading>혜택. 3</Heading>
                <SubHeading>친구 초대 횟수는 <Span>무제한</Span> 가능하며,
                    시크 포인트 역시 무제한 적립</SubHeading>
                <Slider />
            </Box>
        </PageOneDiv>
    )
}

export default PageOne