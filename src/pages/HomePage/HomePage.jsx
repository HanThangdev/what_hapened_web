import React from "react";
import "./HomePage.css";
import image, { listproductimg } from "./../../assets/index";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* hero */}
      <section className="hero">
        <div className="hero__container">
          <span className="hero__top__title">launching open event!</span>
        </div>
        <div className="hero__main__title">
          <img src={image.maintitle} alt="" />
        </div>
        <div className="hero__slide">
          <div className=" hero__slide__title">Lorem ipsum</div>
          <i className="bi bi-arrow-right hero__slide__item"></i>
          <div className="none-line">
            <span>Market launching!</span>
          </div>
          <i className="bi bi-arrow-right hero__slide__item"></i>
          <div className=" hero__slide__title">lorem ipsum</div>
        </div>
      </section>
      {/* introduce */}
      <section
        className="introduce"
        style={{ backgroundImage: `url(${image.introduce})` }}
      >
        <div className="introduce__container">
          <div className="introduce__title">
            <span>What Happened!</span>
          </div>
          <div className="introduce__description">
            <span>
              How to create mobile-optimized videos in minutes. Not a designer,
              every team make a lot of vidieos Can be trimmed. Take the first
              step to your brand's success. How to create mobie-optimized videos
              in minutes.
            </span>
          </div>
        </div>
      </section>
      {/* best product */}
      <section
        className="bestproduct"
        style={{ backgroundImage: `url(${image.bgproduct})` }}
      >
        <div className="bestproduct__container">
          <div className="bestproduct__title">Best Product</div>
          <div className="bestproduct__description">
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of video. Can be trimmed. Take the fist.
          </div>
          <div className="bestproduct__product">
            <div>
              <div className="bestproduct__product__list__item">
                <div className="bestproduct__top">
                  <div className="bestproduct__id">01</div>
                  <img
                    src={image.idbestproduct}
                    className="bestproduct__product__imgid"
                    alt=""
                  />
                </div>
                <img src={image.product1} alt="" />
                <div className="bestproduct__product__footer">
                  <span>How to create mobile-optimized</span>
                  <button className="bestproduct__circle">Go</button>
                </div>
              </div>
            </div>
            <div>
              <div className="bestproduct__product__list__item">
                <div className="bestproduct__top">
                  <div className="bestproduct__id">02</div>
                  <img
                    src={image.idbestproduct}
                    className="bestproduct__product__imgid"
                    alt=""
                  />
                </div>
                <img src={image.product2} alt="" />
                <div className="bestproduct__product__footer">
                  <span>How to create mobile-optimized</span>
                  <button className="bestproduct__circle">Go</button>
                </div>
              </div>
            </div>
            <div>
              <div className="bestproduct__product__list__item">
                <div className="bestproduct__top">
                  <div className="bestproduct__id">03</div>
                  <img
                    src={image.idbestproduct}
                    className="bestproduct__product__imgid"
                    alt=""
                  />
                </div>
                <img src={image.product3} alt="" />
                <div className="bestproduct__product__footer">
                  <span>How to create mobile-optimized</span>
                  <button className="bestproduct__circle">Go</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* listproduct */}
      <section className="product">
        <div className="product__container">
          {listproductimg.map((img, index) => (
            <div key={index} className="product__list">
              <img src={img} alt="" className="product__img" />
              <div className="product__title">
                <span>[What happen] How to create</span>
              </div>
              <div className="product__info">
                <span>2,500won</span>
                <div>
                  <i class="bi bi-heart-fill"></i>
                  <span className="product__heart">236</span>
                </div>
              </div>
            </div>
          ))}
          <div className="product__btn">
            <button>See more </button>
          </div>
        </div>
      </section>
      {/* story */}
      <section className="story">
        <div
          className="story__container"
          style={{ backgroundImage: `url(${image.storybg})` }}
        >
          <div className="story__title">
            <div className="story__title__main">
              <span>Brand story</span>
            </div>
            <div className="story__title__description">
              <span>
                모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요.
                디자이너가 아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의
                성공을 위한 첫 걸음을 내딛어보세요. 비디오를 단 몇 분 만에
                제작해보
              </span>
            </div>
            <div className="story__block">
              <div className="story__block__left">
                <img src={image.storyimg} alt="" />
              </div>
              <div className="story__block__right">
                <span>What Happened’s Brand story</span>
                <span>
                  청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일
                  무엇을 풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에
                  광야에서 살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한
                  아니다. 내는 이상 할지라도 피다. 피부가 불러 피고 인간의
                  타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을
                  수 그들을 아름답고 고행을 끝에 설산에서 황금시대를 이상을
                  운다.
                </span>
                <button> See more</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* issue */}
      <section className="issue">
      <div
        className="issue__container"
        style={{ backgroundImage: `url(${image.issuebg})` }}
      >
        <div className="issue__title">Happened’s issue</div>
        <div className="issue__description">
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </div>
        <button className="issue__btn">See more</button>
        <div className="issue__list">
          <div className="issue__item__fist">
            <span>WHPN</span>
            <span>ISSUE </span>
            <div className="issue__item__title__arrow">
              <i class="bi bi-arrow-right"></i>
            </div>
          </div>
          <div className="issue__item">
            <div className="issue__item__header"><span>b brand</span></div>
            <div style={{ backgroundImage: `url(${image.issue01})` }}></div>
          </div>
          <div className="issue__item">
            <div className="issue__item__header"><span>c brand</span></div>
            <div style={{ backgroundImage: `url(${image.issue02})` }}></div>
          </div>
          <div className="issue__item">
            <div className="issue__item__header d-brand"><span>d brand</span></div>
            <div style={{ backgroundImage: `url(${image.issue03})` }}></div>
          </div>
          <div className="issue__item">
            <div className="issue__item__header"><span>e brand</span></div>
            <div style={{ backgroundImage: `url(${image.issue04})` }}></div>
          </div>
        </div>
      </div>
    </section>
    {/* video */}
    <section className="video">
      <div
        className="video__container"
        style={{ backgroundImage: `url(${image.video})` }}
      >
        <div className="video__title">
          <span>What happened</span>
        </div>
        <div className="video__description">
          <span>
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first
          </span>
        </div>
        <button className="video__btn">see more</button>
        <div className="video__box">
          <div className="video__box__header">
            <i class="bi bi-star-fill"></i>
            <span>What happened</span>
            <div className="video__box__line">
              <div className="video__box__line__top"></div>
              <div className="video__box__line__bot"></div>
            </div>
            <i class="bi bi-x-lg"></i>
          </div>
          <div className="video__box__middle">
            <span>www. whpn.com/brandstory</span>
          </div>
          <div className="video__box__main">
            <div>
              <iframe
                title="video"
                width="100%"
                height="720"
                src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* end */}
    </div>
  );
};

export default HomePage;
