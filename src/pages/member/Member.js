import React, { Component } from 'react'
import styled from 'styled-components'
import Member01 from '../../assets/image/member_01.svg'
import Member02 from '../../assets/image/member_02.svg'
import Member03 from '../../assets/image/member_03.svg'
import { H3 } from '../common/Typography'
import { Wrapper, ContentWrapper, Contents } from '../common/Layout'
import Color from '../common/Color'

// component
class Member extends Component {
  render() {
    return (
      <Wrapper>
        <ContentWrapper>
          <Contents>
            <TopContent>
              <H3>MEMBER</H3>
            </TopContent>
          </Contents>
          <Contents>
            <Lists>
              <ListContent>
                <MemberImage src={Member01}/>
                <Rep>
                  <RepText>UI / UX Designer</RepText><br />
                  <RepName>AKIHIDE Egashira</RepName>
                </Rep>
              </ListContent>
              <ListContent>
                <MemberImage src={Member02}/>
                <Rep>
                  <RepText>Represent</RepText><br />
                  <RepName>Name here</RepName>
                </Rep>
              </ListContent>
              <ListContent>
                <MemberImage src={Member03}/>
                <Rep>
                  <RepText>PM / ServerSide Engineer</RepText><br />
                  <RepName>RYOSUKE Moriizumi</RepName>
                </Rep>
              </ListContent>
            </Lists>
          </Contents>
        </ContentWrapper>
      </Wrapper>
    );
  }
}

// view(CSS in JS)
const TopContent = styled.div`
  margin-bottom: 3.75rem;
  text-align: center;
`;

const Lists = styled.ul`
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 auto;
`;

const ListContent = styled.li`
  margin-right: 10px;
  object-fit: cover;
  overflow: hidden;
  position: relative;
`;

const RepText = styled.text`
  font-size: 1rem;
	text-align: center;
`;

const RepName = styled.text`
  font-size: 1.5rem;
	text-align: center;
`;

const Rep = styled.div`
  background-color:	rgba(0,0,0,0.4);
  height: 100%;
  left: 0;
  opacity: 0;	
  padding-top: 225px;
  position: absolute;
  top: 0;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  width: 100%;
  &:hover {
    border-top: 5px solid ${Color.vividPink};
    opacity: 1;
  }
`;

const MemberImage = styled.img`
`;

// export
export default Member