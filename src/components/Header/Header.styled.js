import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: relative;
  width: 100%;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  box-shadow: 0px 3px 10px #00000021;

  .headerContainer {
    max-width: 1250px;
    margin: 0 auto;

    width: 100%;
    display: flex;

    justify-content: space-between;
    align-items: center;

    @media (max-width: 1261px) {
      padding-left: 2rem;
      padding-right: 2rem;
    }

    .logo h1 {
      text-transform: uppercase;
      font-size: 1.8rem;
      letter-spacing: 1.5px;

      @media (max-width: 400px) {
        font-size: 1.6rem;
      }

      @media (max-width: 310px) {
        font-size: 1.2rem;
      }

      .h1Link {
        color: var(--h1Color);
      }
    }


    .navContainer {
      .navLinksBox {
        display: flex;
        gap: 2rem;

        @media (max-width: 768px) {
          padding-top: 8rem;
          padding-bottom: 8rem;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;

          flex-direction: column;
          justify-content: center;
          text-align: center;
          gap: 4rem;

          background: var(--colorRed);
          clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
          border-bottom-left-radius: 30px;
          border-bottom-right-radius: 30px;
          z-index: 1000;
        }
        
        &.navActive {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%) !important;
        }

        a {
          
          font-size: 1.5rem;
          font-weight: 600; 
          padding: 0.4rem 2rem;
          border-radius: 50px;

          @media (max-width: 768px) {
            text-transform: uppercase;
            padding: 1rem;
            margin: 1rem;
            border-radius: 50px;
            font-size: 2rem;
            border: 2px solid #00000000;
            

          }

          .iconMenuLinks {
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            margin-right: 0.7rem;
            transition: none;
            
            @media (max-width: 768px) {
              top: 10%;
              transform: translateY(10%);
              margin-right: 0.7rem;
              transition: none;
            }
          }
        }

        .link {
          color: var(--h3Color);

          &:hover {
            color: var(--colorRed);
          }

          @media (max-width: 768px) {
            color: #f7edf1b7;
            
            &:hover {
              color: #f7edf1b7;
            }
          }
        }

        .active {
          background: var(--colorRed);
          color: white;

          @media (max-width: 768px) {
            background: transparent;
            border-color: white;
          }
        }

      }
      
    }

    .iconsHeader {
      .icon {
        font-size: 2.5rem;
        cursor: pointer;

        &:not(:last-child) {
          margin-right: 2rem;
        }
      }

      .iconMenu{
        @media (min-width: 769px) {
          display: none;
        }
      }
    }
  }
`;