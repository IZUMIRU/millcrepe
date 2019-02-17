import React, { Component } from 'react'
import styled from 'styled-components'
import { H2, H3, Text } from '../common/Typography'
import Color from '../common/Color'
import { Wrapper, ContentWrapper, Contents } from '../common/Layout'

// component
class About extends Component {
  render() {
    return (
      <Wrapper>
        <ContentWrapper>
          <Contents>
            <TopContent>
              <H3>ABOUT</H3>
            </TopContent>
          </Contents>
          <Contents>
            <LeftBar>
              <H2>UX / UI Design</H2><br />
              <Text>利用者の体験に影響を及ぼす全ての要素（戦略、要件、構造、骨格、表層）にコミットします。</Text>
            </LeftBar>
          </Contents>
          <Contents>
            <RightBar>
              <H2>Web / App Development</H2><br />
              <Text>Web、iOS、Androidアプリの開発から納品まで行います。</Text>
            </RightBar>
          </Contents>
          <Contents>
            <LeftBar>
              <H2>CMS Architecture</H2><br />
              <Text>WordPressを使用したコーポレートサイトやメディア、オリジナルテーマ作成を承ります。</Text>
            </LeftBar>
          </Contents>
        </ContentWrapper>
      </Wrapper>
    );
  }
}

// view(CSS in JS)
const TopContent = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const LeftBar = styled.div`
  border-left: 10px solid ${Color.vividPink};
  margin: 0 auto;
  padding: 24px 40px;
  text-align: left;
`;

const RightBar = styled.div`
  border-right: 10px solid ${Color.vividPink};
  margin: 0 auto;
  padding: 24px 40px;
  text-align: right;
`;

// export
export default About
