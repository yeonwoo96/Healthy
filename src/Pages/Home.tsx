import React from "react";
import styled from "styled-components";

const Home = () => {
  const Wrapper = styled.div`
    width: 100vw;
    & > article {
      padding: 0 2%;
    }
  `;
  const Article = styled.article`
    margin-top: 84px;
    .MainImage {
      width: 100%;
    }
    video {
      width: 100%;
    }
  `;
  const TextSection = styled.section`
    margin-top: 48px;
    display: flex;
    flex-flow: column;
    align-items: center;
    text-align: center;
    @media screen and (max-width: 960px) {
      align-items: flex-start;
      text-align: start;
    }
    .subTitle {
      font-weight: 500;
    }
    h3 {
      margin-bottom: 24px;
      font-weight: 800;
    }
    .description {
      margin-bottom: 24px;
    }
    .QRment {
      font-size: 20px;
      margin-top: 6px;
    }
  `;
  const BtnsWrapper = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
    gap: 6px;
    margin: 20px 0;
  `;
  const Btn = styled.button`
    padding: 6px 20px;
    border-radius: 30px;
    border: 1.5px solid transparent;
    font-size: 16px;
    line-height: 24px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #111;
    color: #fff;
    &:hover {
      background: #757575;
    }
  `;
  const QRwrapper = styled.div`
    display: flex;
    width: 100vw;
    flex-flow: column;
    align-items: center;
    img {
      width: 100%;
    }
  `;
  const TwoItemSection = styled.div`
    .Btn {
      background: #fff;
      color: #111;
      &:hover {
        background: #757575;
      }
    }
  `;
  return (
    <Wrapper>
      <Article style={{ margin: 0 }}>
        <img className={"MainImage"} src="image/main1.jpg" alt="main1"></img>
        <TextSection>
          <p className="subTitle">05.01(월) - 05.07(일)</p>
          <h3>MEMBER DAYS</h3>
          <p className="description">
            나이키닷컴, 나이키 앱 그리고 매장에서 7일간 진행되는 멤버데이즈에
            여러분을 초대합니다.
            <br /> 오직 나이키 멤버만을 위한 다양한 혜택으로 온 가족이 함께
            스포츠를 즐겨보세요.
            <br />
            <br />
            멤버데이즈 혜택 및 이벤트 정보는 마케팅 수신에 동의한 멤버를
            대상으로 제공됩니다. <br /> 나이키 앱을 다운로드하고 앱에서만 만날
            수 있는 전용 혜택도 놓치지 마세요.
          </p>
          <BtnsWrapper>
            <Btn>자세히 보기</Btn>
            <Btn>멤버 가입 & 마케팅 수신동의</Btn>
          </BtnsWrapper>
          <QRwrapper>
            <img src="image/QRcode.png" alt="QRcode"></img>
            <p className="QRment">나이키 앱에서 확인하기</p>
          </QRwrapper>
        </TextSection>
      </Article>
      <Article>
        <img className={"MainImage"} src="image/main2.jpg" alt="main2"></img>
        <TextSection>
          <p className="subTitle">나이키 페가수스 40</p>
          <h3>페가수스와 함께 온 세상을 달리다</h3>
          <p className="description">
            레트로한 컬러웨이와 스우시 디자인으로 페가수스의 오랜 역사를
            기념합니다.
            <br />
            페가수스 40 프리미엄의 뛰어난 반응성과 편안함을 지금 바로
            경험하세요.
          </p>
          <Btn>구매하기</Btn>
        </TextSection>
      </Article>
      <Article>
        <video autoPlay muted loop src="video/nike1.mp4"></video>
        <TextSection>
          <h3>시작을 만들다. 영원을 이루다.</h3>
          <p className="description">
            새로운 드라이 핏 ADV 기술을 적용한 2023 나이키 축구 국가대표팀
            저지를 가장 먼저 만나 보세요.
            <br /> 나이키 앱을 다운로드하고 축구를 관심사로 설정해 보세요.
          </p>
          <QRwrapper>
            <img src="image/QRcode.png" alt="QRcode"></img>
            <p className="QRment">나이키 앱</p>
          </QRwrapper>
        </TextSection>
      </Article>
      <Article>
        <img className={"MainImage"} src="image/main4.webp" alt="main4"></img>
        <TextSection>
          <p className="subTitle">신제품: 머큐리얼 XXV</p>
          <h3>25년간의 경이로운 스피드</h3>
          <p className="description">
            축구 역사상 가장 빠른 스피드를 위해 설계된 머큐리얼 XXV를
            만나보세요.
          </p>
          <Btn>구매하기</Btn>
        </TextSection>
      </Article>
      {/*  */}
      <Article>
        <video
          autoPlay
          muted
          loop
          src="video/Nike. Just Do It. 나이키 코리아-2 (2).mp4"
        ></video>
        <TextSection>
          <p className="subTitle">나이키 스포츠 브라</p>
          <h3>가장 나다운 순간을 위한 디자인</h3>
          <p className="description">
            편안한 움직임을 통해 가장 나다워지는 순간을 만나 보세요.
          </p>
          <BtnsWrapper>
            <Btn>자세히 보기</Btn>
            <Btn>멤버 가입 & 마케팅 수신동의</Btn>
          </BtnsWrapper>
        </TextSection>
      </Article>
      <Article>
        <img className={"MainImage"} src="image/main5.webp" alt="임산부"></img>
        <TextSection>
          <p className="subTitle">나이키 (M) 에센셜</p>
          <h3>임산부를 위한 디자인</h3>
          <p className="description">
            임신 기간 동안 변화하는 체형에 맞춰 부드러운 안정감을 선사하는
            아이템으로 편안한 움직임을 경험해 보세요.
          </p>
          <Btn>구매하기</Btn>
        </TextSection>
      </Article>
      <Article>
        <video autoPlay muted loop src="video/nike3.mp4"></video>
        <TextSection>
          <p className="subTitle">'St.Louis'</p>
          <h3>테이텀 1</h3>
          <p className="description">
            제이슨의 모든 여정이 시작된 곳을 기념하는 스페셜 에디션 컬러웨이를
            통해 그의 고향에 대한 사랑을 느껴보세요.
            <br />
            레드와 화이트의 조합에 플뢰르 드 리스 디테일이 더해져 모든 이들을
            사로잡을 디자인이 탄생했습니다.
          </p>
          <Btn>구매하기</Btn>
        </TextSection>
      </Article>
      {/*  */}
      {/*  */}
      <Article>
        <video autoPlay muted loop src="video/nike4.mp4"></video>
        <TextSection>
          <h3>나이키 러닝화 가이드</h3>
          <p className="description">
            나에게 맞는 러닝화를 찾고, 발걸음마다 느껴지는 최적의 착화감을
            경험해보세요.
          </p>
          <Btn>자세히 보기</Btn>
        </TextSection>
      </Article>
      {/*  */}
      <TwoItemSection>
        <h3>Trending Now</h3>
        <div className="Items">
          <div className="Item">
            <h4>에어 포스1</h4>
            <Btn className="Btn">구매하기</Btn>
          </div>
        </div>
      </TwoItemSection>
    </Wrapper>
  );
};

export default Home;
