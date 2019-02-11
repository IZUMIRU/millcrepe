import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router';
import Color from '../common/Color'
import { H3 } from '../common/Typography'
import { Wrapper, ContentWrapper, Contents } from '../common/Layout'

// component
class Works extends Component {

  render() {
    return (
      <Wrapper>
        <ContentWrapper>
          <Contents>
            <TopContent>
              <H3>CONTACT</H3>
            </TopContent>
          </Contents>
          <Contents>
            <ButtonContent>
              <FormButton onClick={()=> window.open("https://goo.gl/forms/xMwCrtNN5nvhtrlC2", "_blank")}>お問い合わせ</FormButton>
            </ButtonContent>
          </Contents>
        </ContentWrapper>
      </Wrapper>
    );
  }
}

// view(CSS in JS)
const TopContent = styled.div`
  margin-bottom: 15rem;
  text-align: center;
`;

const ButtonContent = styled.div`
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

// export
export default withRouter(Works)
