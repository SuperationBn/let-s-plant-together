import styled from "styled-components";
import ilustrationImgServices from "../../img/ilustrationForSection2.png";


export const HeroSectionStyles = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;

  .backGroundServises {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: blur(5px);
    }
  }

  .containerTextImgHeroServices {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    /* padding: 1rem; */

    max-width: 1400px;
    margin: 0 auto;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    
    @media (max-width: 768px) {
      
      grid-template-columns: 1fr;
    }

    .textServicesHeroContents{
      width: 100%;
      padding: 1rem;

      @media (max-width: 768px) {
        text-align: center;
      }

      h2 {
        font-size: 4.5rem;
        color: #f5f5f5e6;

        @media (max-width: 896px) {
          font-size: 3.5rem;
        }

        @media (max-width: 768px) {
          font-size: 4.2rem;
        }
      }

      p {
        font-size: 1.7rem;
        margin: 2rem 0rem;
        color: #f5f5f5bc;

         @media (max-width: 896px) {
          font-size: 1.5rem;
        }

        @media (max-width: 768px) {
          margin: 3rem 0rem;
          font-size: 1.6rem;

        }
      }
    }

    .imgServicesIlustration {
      position: relative;
      width: 100%;
      height: 100%;

      background: url(${ilustrationImgServices});
      background-size: cover;
      background-position: bottom;
      background-repeat: no-repeat;

      @media (max-width: 768px) {
        display: none;
      }
      
    }
  }
`;