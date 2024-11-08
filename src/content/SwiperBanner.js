import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; // 오토플레이 스타일 추가
import 'swiper/css/navigation'; // 필요 시 추가되는 네비게이션 스타일
import 'swiper/css/pagination'; // 필요 시 추가되는 페이지네이션 스타일
import { Autoplay, Navigation, Pagination } from 'swiper/modules'; // Swiper 모듈 설정

export default function SwiperBanner({ datakey }) {
  React.useEffect(() => {
    console.log(datakey);
  }, []);

  return (
    <Swiper
      // Swiper 모듈 설정
      modules={[Autoplay, Pagination, Navigation]} // 필요한 모듈 추가
      spaceBetween={50}
      slidesPerView={1} // 화면에 슬라이드 하나씩 표시
      loop={true} // 끝에 도달하면 처음부터 다시 시작
      autoplay={{
        delay: 3000, // 3초마다 자동 슬라이드
        disableOnInteraction: false, // 사용자가 스와이프해도 autoplay 유지
      }}
      breakpoints={{
        // 반응형 설정
        640: { slidesPerView: 1 }, // 모바일 화면 - 슬라이드 1개
        768: { slidesPerView: 1 }, // 태블릿 화면 - 슬라이드 2개
        1024: { slidesPerView: 1 }, // 데스크탑 화면 - 슬라이드 3개
      }}
      style={{ width: '100vw' }} // 와이드 화면 꽉 차게 설정
    >
      {
        datakey.map((v, i) => (
          <SwiperSlide key={i}>
            <img src={v.src} alt={v.alt} style={{ width: '100%' }} /> {/* 슬라이드 안 이미지도 꽉 차게 */}
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}
