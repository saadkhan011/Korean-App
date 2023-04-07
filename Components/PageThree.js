import React, { useState } from 'react'
import styled from 'styled-components';


const Heading = styled.p`
font-family: "Pretendard";
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
/* identical to box height, or 125% */

/* Grayscale/Gray01 */

color: #222222;
`;
const SubHeading = styled.p`
font-family: "Pretendard";
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
/* identical to box height, or 138% */

/* Grayscale/Gray03 */

color: #666666;
`;
const ThickHr = styled.div`
width: 100%;
margin: 0px 0 45px 0;
height: 10px;
background-color: #f4f4f4;
margin-right: auto;
`;
const English = styled.p`
text-align: end;
font-family: "Pretendard";
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
text-align: right;
color: #000000;
`;
const Li = styled.li`
font-family: "Pretendard";
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 18px;
color: #888888;
`;
const LastBox = styled.div`
background-color: #f8f8f8;
padding: 25px 10px 67px 0 !important;
margin-top: 40px;
`;
const HeadingLastBox = styled.p`
font-family: "Pretendard";
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
/* identical to box height, or 125% */

/* Grayscale/Gray04 */

color: #888888;
padding: 0px 32px;
`;
const TradeMark = styled.img`
width: 5%;
padding-bottom: 2px;
`;
const ToolTip = styled.div`
position: absolute;
max-width: 300px;
display: inline-block;
background: #888888;
padding: 10px 15px;
margin-left: 30px;
margin-right: 15px;
font-family: "Pretendard";
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 16px;
text-transform: capitalize;
color: #ffffff;
`;
const Hr = styled.hr`
width: 80%;
margin-left: auto;
margin-right: auto;
`;
const PageThreeDiv = styled.div`
`;
const Padd = styled.div`
padding: 12px 44px 1px 44px;
`;
const Arrow = styled.div`
position: absolute;
width: 20px;
height: 11px;
background: inherit;
margin: -12px 91px;
transform: rotate(45deg);
z-index: -1;
`;
const Ul = styled.ul``;

function PageThree() {
    const confirmPoint = "confirmPoint";
    const recommendPoint = "recommendPoint";
    const [state, setstate] = useState("false");

    function showPopover(event) {
        const name = event.target.name;
        if (name === "row2") {
            setstate("row2");
        }
        else if (name === "row3") {
            setstate("row3");
        }

    }
    const removePopover = () => {
        setstate("false");
    }


 
    return (
        <PageThreeDiv>
            <ThickHr />
            <Padd>
                <Heading>나의 초대 현황</Heading>
                <SubHeading>가입 완료한 친구 </SubHeading>
                <English>18명</English>
            </Padd>
            <Hr />
            <Padd>
                <SubHeading>지급 예상 누적 포인트 <TradeMark name="row2" onMouseOver={showPopover} onMouseLeave={removePopover} src="./i.png"></TradeMark></SubHeading>
                {state === "row2" &&
                    <ToolTip>
                        <Arrow />
                        초대 친구가 제품을 구매하여 곧 지급될 예정인 포인트까지 포함된 금액입니다.
                        (구매 후 ‘구매 완료’까지 진행되야 나에게 포인트가 지급됩니다.)
                    </ToolTip>}
                <English>520,000 P</English>
            </Padd>
            <Hr />
            <Padd>
                <SubHeading>지급 완료 포인트 <TradeMark  name="row3" onMouseOver={showPopover} onMouseLeave={removePopover} src="./i.png"></TradeMark></SubHeading>
                {state === "row3" &&
                    <ToolTip>
                        <Arrow />
                        초대 친구가 제품 구매 후 ‘구매 완료’까지 진행하여 나에게 지급된 사용 가능한 포인트입니다.
                    </ToolTip>}
                <English>70,000 P</English>
            </Padd>
            <Hr />
            <LastBox>
                <HeadingLastBox>유의사항</HeadingLastBox>
                <Ul>
                    <Li>친구 초대 코드는 가입 후 7일 이내에만 사용 가능합니다.</Li>
                    <Li>초대할 수 있는 친구의 수는 제한이 없습니다.</Li>
                    <Li>친구 초대 코드를 사용한 회원은 탈퇴 후 재가입 시 친구 초대 코드를 사용할 수 없습니다.</Li>
                    <Li>초대한 친구의 첫 구매 완료 시점, 추천한 회원에게 #{confirmPoint} 포인트가 즉시 지급됩니다.</Li>
                    <Li>추천한 친구의 초대 코드 입력은 1회 한정으로 #{recommendPoint} 포인트가 지급됩니다.</Li>
                    <Li>이벤트는 당사의 사정에 의해 사전 고지 없이 변경되거나 중단될 수 있습니다.</Li>
                </Ul>
            </LastBox>
        </PageThreeDiv>
    )
}

export default PageThree






