import React, { Component } from 'react'
import styled from 'styled-components'
import Image004 from '../../assets/image/sample_004.png'
import Works02 from '../../assets/image/works_02.svg'
import Works06 from '../../assets/image/works_06.svg'
import Works07 from '../../assets/image/works_07.svg'
import Works08 from '../../assets/image/works_08.svg'
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
              <ListContent onClick={()=> window.open("https://emole.jp/", "_blank")}>
                <WorksImage src={Image004}/>
                <Rep>
                  <RepName>やりたいを実現する仲間と繋がる<br />コミュニティプラットフォーム</RepName>
                </Rep>
              </ListContent>
              <ListContent onClick={()=> window.open("https://dsjob.shikakara.jp/", "_blank")}>
                <WorksImage src={Works02}/>
                <Rep>
                  <RepName>デンタルスタッフの求人情報サイト</RepName>
                </Rep>
              </ListContent>
              <ListContent onClick={()=> window.open("https://workhacks.biz/", "_blank")}>
                <WorksImage src={Works07}/>
                <Rep>
                  <RepName>新時代の働き方を提案するメディア</RepName>
                </Rep>
              </ListContent>
              <ListContent onClick={()=> window.open("https://netbuyking.net/manga/", "_blank")}>
                <WorksImage src={Image004}/>
                <Rep>
                  <RepName>楽に早く高く売れるネット漫画買取メディア</RepName>
                </Rep>
              </ListContent>
              <ListContent onClick={()=> window.open("https://www.behance.net/shingashi09a9b", "_blank")}>
                <WorksImage src={Works06}/>
                <Rep>
                  <RepName>Design Portfolio</RepName>
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
  font-size: 1.3rem;
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
