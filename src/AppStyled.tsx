import React from "react";

import { Div, H1 } from "@/components/electrons";
import styled from "styled-components";
import "@/styles/styles.scss";

import vars from "styles/abstracts/_variables.js";

const wXl1000 = vars["layout-width"]["xl-1000"];
const wLg1000 = vars["layout-width"]["lg-1000"];
const wMd1000 = vars["layout-width"]["md-1000"];
const wSm1000 = vars["layout-width"]["sm-1000"];
const wXs1000 = vars["layout-width"]["xs-1000"];

const bXl1000 = vars["break-point"]["xl-1000"];
const bLg1000 = vars["break-point"]["lg-1000"];
const bMd1000 = vars["break-point"]["md-1000"];
const bSm1000 = vars["break-point"]["sm-1000"];
const bXs1000 = vars["break-point"]["xs-1000"];

const mAuto = `
margin-left: auto;
margin-right: auto;
`;

const media = `
margin-left: auto;
margin-right: auto;
`;

const FixContainer = styled.section`
 max-width: ${wXl1000};
 border: solid aqua 5px;
 ${mAuto};

 @media (max-width: 1260px) {
  border: solid #ff0000 10px;
 }
`;

function App() {
 return <H1>Hello world!</H1>;
}

export default App;
