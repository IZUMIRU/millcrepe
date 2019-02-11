import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router';
import Color from '../common/Color'
import { H3 } from '../common/Typography'
import { Wrapper, ContentWrapper, Contents } from '../common/LayoutContact'
import Emole from '../../assets/image/emole.png'

// component
class Works extends Component {

  render() {
    return (
      <Wrapper>
        <ContentWrapper>
          <Contents>
            <H3>CONTACT</H3>
            <ButtonContent>
              <FormButton onClick={()=> window.open("https://goo.gl/forms/xMwCrtNN5nvhtrlC2", "_blank")}>お問い合わせ</FormButton>
            </ButtonContent>
          </Contents>
          <Contents>
          <TitleLogo>協賛<br />
            <Image src={Emole} />
          </TitleLogo>
          </Contents>
        </ContentWrapper>
      </Wrapper>
    );
  }
}

// view(CSS in JS)

const ButtonContent = styled.div`
  margin-top: 1rem;
`;

const FormButton = styled.button`
  background-color: ${Color.white};
  border-radius: 5px;
  font-family: "Helvetica Neue";
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  padding: 2rem 10rem;
  &:hover {
    cursor: pointer;
  }
`;

const TitleLogo = styled.div`
  margin-top: 1rem;
`;

const Image = styled.img`
  width: 25vw;
`;

// export
export default withRouter(Works)
