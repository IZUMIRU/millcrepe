import React, { Component } from 'react';
import styled from 'styled-components'
import Color from '../common/Color'
import { H1 } from '../common/Typography'

// component
class Top extends Component {
  render() {
    return (
      <Wrapper>
        <TopWrapper>
          <TitleLogo>ミルクレープ</TitleLogo>
          <H1>20代真っ只中、「好きなことで生きていく」ギルドチーム</H1>
        </TopWrapper>
      </Wrapper>
    );
  }
}

// view(CSS in JS)
const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  text-align: center;
  width: 100vw;
`;

const TopWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
`;

const TitleLogo = styled.div`
  border: 5px solid ${Color.white};
  border-radius: 40px;
  font-family: impact;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 0 auto;
  padding: 24px 40px;
`;

export default Top;
