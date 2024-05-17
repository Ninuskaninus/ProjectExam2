import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CarouselContainer = styled.div`
width: 100%;
.slick-slite{
  display: flex;
  justify-content: center;
  align-items: center;
}

img{
  width: 100%;
  height: 500px;
  object-fit: cover;
  object-position: center;
}
`;