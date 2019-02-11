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
          <TitleLogo>ミルクレープ</TitleLogo><br />
          <H1>クリームは時間が経つと口当たりが悪くなるため、素早く塗り重ねる必要があります。<br />
          一方クレープは乱雑に扱うと破けてしまうため、正確に丁寧に美しい形に重ねないといけません。<br /><br />
          私たちは、そんな「素早さ、正確さ、丁寧さ」を兼ね備えたプロフェッショナルギルドです。</H1>
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
