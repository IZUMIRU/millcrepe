import React, { Component } from 'react'
import styled from 'styled-components'
import Image004 from '../../assets/image/sample_004.png'
import Works01 from '../../assets/image/works_01.svg'
import Works02 from '../../assets/image/works_02.svg'
import Works03 from '../../assets/image/works_03.svg'
import Works06 from '../../assets/image/works_06.svg'
import { H3 } from '../common/Typography'
import { Wrapper, ContentWrapper, Contents } from '../common/LayoutWorks'
import Color from '../common/Color'

// component
class Works extends Component {
  render() {
    return (
      <Wrapper>
        <ContentWrapper>
          <Contents>
            <TopContent>
              <H3>WORKS</H3>
            </TopContent>
          </Contents>
          <Contents>
            <Lists>
              <ListContent onClick={()=> window.open("https://www.wantedly.com/users/4163408", "_blank")}>
                <WorksImage src={Works01}/>
                <Rep>
                  <RepName>RYOSUKE portfolio</RepName>
                </Rep>
              </ListContent>
              <ListContent onClick={()=> window.open("https://dsjob.shikakara.jp/", "_blank")}>
                <WorksImage src={Works02}/>
                <Rep>
                  <RepName>シカカラDS求人</RepName>
                </Rep>
              </ListContent>
              <ListContent onClick={()=> window.open("https://www.wantedly.com/users/18049334", "_blank")}>
                <WorksImage src={Works03}/>
                <Rep>
                  <RepName>OYAMA portfolio</RepName>
                </Rep>
              </ListContent>
              <ListContent onClick={()=> window.open("https://emole.jp/", "_blank")}>
                <WorksImage src={Image004}/>
                <Rep>
                  <RepName>emole</RepName>
                </Rep>
              </ListContent>
              <ListContent onClick={()=> window.open("https://www.behance.net/shingashi09a9b", "_blank")}>
                <WorksImage src={Works06}/>
                <Rep>
                  <RepName>GASHI portfolio</RepName>
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
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 0 auto;
`;

const ListContent = styled.li`
  cursor: pointer;
  margin-bottom: 1rem;
  margin-right: 2rem;
  overflow: hidden;
  position: relative;
`;

const RepName = styled.text`
  font-size: 1.5rem;
	text-align: center;
`;

const Rep = styled.div`
  background-color:	rgba(0,0,0,0.7);
  height: 100%;
  left: 0;
  opacity: 0;	
  padding-top: 100px;
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

const WorksImage = styled.img`
`;

// export
export default Works
