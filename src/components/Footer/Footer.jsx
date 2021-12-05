import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__list__top">
          <div className="footer__list__fist">
            <span className="footer__list__title">what happened</span>
            <a href="/">[공지] 개인 정보 처리 방침 변경 사전</a>
            <a href="/">[공지] 29CM 강남 스토어 영업 종료</a>
            <a href="/">[공지] 개인 정보 처리 방침 변경 사전 안내</a>
            <a href="/">[공지] iOS 10 이하 버전 지원 중단 안내</a>
            <a href="/">[공지] 개인 정보 처리 방침 변경 사전 안내</a>
          </div>
          <div className="footer__list__seccond">
            <div className="footer__list__seccond__item">
              <span className="footer__list__title">about us</span>
              <a href="/">회사 소개</a>
              <a href="/">인재 채용</a>
              <a href="/">상시 할인 혜택</a>
            </div>
            <div className="footer__list__seccond__item">
              <span className="footer__list__title">my order</span>
              <a href="/">내 주문</a>
              <a href="/">주문 배송</a>
              <a href="/">취소 / 교환 / 반품 내역</a>
              <a href="/">상품 리뷰 내역</a>
              <a href="/">증빙 서류 발급</a>
            </div>
            <div className="footer__list__seccond__item">
              <span className="footer__list__title">my account</span>
              <a href="/">회원 정보 수정</a>
              <a href="/">회원 등급</a>
              <a href="/">마일리지 현황</a>
              <a href="/">쿠폰</a>
            </div>
            <div className="footer__list__seccond__item">
              <span className="footer__list__title">help</span>
              <a href="/">1 : 1 상담 내역</a>
              <a href="/">상품 Q & A 내역</a>
              <a href="/">공지 사항</a>
              <a href="/"> 자주하는 질문</a>
              <a href="/">고객의 소리</a>
            </div>
          </div>
        </div>
        <div className="footer__list__bottom">
          <div className="footer__bottom__left">
            <span>
              © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜
              사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
            </span>
            <span>
              서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스
              이용약관 l 개인정보처리방침
            </span>
          </div>
          <div className="footer__bottom__right">
            <div>
              <i class="bi bi-pinterest"></i>
              <i class="bi bi-facebook"></i>
              <i class="bi bi-messenger"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
