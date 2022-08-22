import styled from "styled-components";
import heroImg from "../../img/heroBg.png"

export const SerctionHero = styled.section`
  width: 100%;
  height: 100vh;

  background: linear-gradient(200deg, #00000041, black), url(${heroImg});
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  background-attachment: fixed;

  display: flex;
  align-items: center;

  .textContex {
    padding: 1rem;
    max-width: 1000px;

    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
    }

    @media (max-width: 542px) {
      text-align: left;
    }

    h2 {
      font-size: 5rem;
      font-weight: 700;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.843);

      @media (max-width: 863px) {
        font-size: 4rem;
      }

      @media (max-width: 542px) {
        font-size: 3.5rem;

      }

      @media (max-width: 412px) {
        font-size: 3.3rem;

      }

      @media (max-width: 356px) {
        font-size: 3rem;

      }
    }

    p {
      margin: 2rem 0rem;
      font-size: 1.5rem;
      color: rgba(255, 255, 255, 0.443);
    }

    .btnHero {

      @media (max-width: 379px) {
        display: flex;
        flex-direction: column;
        gap: 3rem;
      }

      button:not(:last-child) {
        margin-right: 3rem;

        @media (max-width: 379px) {
          margin-right: 0rem;

        }
      }

      button {

        .iconsHero {
          position: relative;
          top: 3px;
          font-size: 2rem;
        }

        :last-child {
          background: transparent;
          border: 1px solid white;
          
          &:hover {
            background: #d4450864;

          }
        }
      }
    }
  }
`;