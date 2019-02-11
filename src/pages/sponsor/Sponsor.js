import React, { Component } from 'react';
import styled from 'styled-components'
import emole from '../../assets/image/emole.png'

// component
class Sponsor extends Component {
  render() {
    return (
      <Wrapper>
        <TopWrapper>
          <TitleLogo>
            協賛<br />
            <Image src={emole}></Image></TitleLogo>
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
  margin: 0 auto;
`;

const Image = styled.img`
  width: 20vw;
`;

export default Sponsor
