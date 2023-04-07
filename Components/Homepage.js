import React, { useState } from "react";
import Header from "./Header";
import PageOne from "./PageOne";
import Button from "./Button";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import styled from "styled-components";

const Navbar = styled.div`
position: -webkit-sticky;
position: sticky;
padding: 0;
top: 0;
z-index: 3;
`;
const Container = styled.div`
background-color: #ffff;
display: flex;
width: 100%;
flex-direction: row;
justify-content: center;
align-items: center;
border-bottom: 1.5px solid #aaaaaa;
gap: 5px;
`;
const Option = styled.div`
padding: 3px 25px;
font-family: "Pretendard";
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

text-align: center;

/* Grayscale/Gray05 */

color: #aaaaaa;
`;
const P = styled.p`
`;
const Box = styled.div`
`;


function HomePage() {
  const [style, setstyle] = useState({
    fontWeight: "",
    borderBottom: ""
  })
  const [styletwo, setstyletwo] = useState({
    fontWeight: "",
    borderBottom: ""
  })
  const [stylethree, setstylethree] = useState({
    fontWeight: "",
    borderBottom: ""
  })

  function pageone(event) {
    setstyle({
      fontWeight: "bold",
      color: "#222222",
      borderBottom: "2.5px solid black"
    })
    setstyletwo({})
    setstylethree({})

  }
  function pagetwo(event) {
    setstyletwo({
      fontWeight: "700",
      color: "#222222",
      borderBottom: "2.5px solid black"
    })
    setstyle({})
    setstylethree({})
  }
  function pagethree(event) {
    setstylethree({
      fontWeight: "700",
      color: "#222222",
      borderBottom: "2.5px solid black"
    })
    setstyletwo({})
    setstyle({})
  }


  return (
    <>
      <Header />
      <Navbar >
        <Container>
          <Option onClick={() => {
            pageone();
          }} style={style}>
            <a href="#pageone"><P>이벤트 혜택</P></a>
          </Option>
          <Option onClick={() => {
            pagetwo();
          }} style={styletwo}>
            <a href="#pagetwo"><P>초대 코드</P></a>
          </Option>
          <Option onClick={() => {
            pagethree();
          }} style={stylethree}>
            <a href="#pagethree"><P>나의 초대 현황</P></a>
          </Option>
        </Container>
      </Navbar >
      <Box onMouseEnter={pageone} id="pageone">
        <PageOne />
      </Box>
      <Box onMouseEnter={pagetwo} id="pagetwo">
        <PageTwo />
      </Box>
      <Box onMouseEnter={pagethree} id="pagethree">
        <PageThree />
      </Box>
      <Button />
    </>
  );
}

export default HomePage;
