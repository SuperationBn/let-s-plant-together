import styled from "styled-components";

export const InfoAboutSection = styled.section`
  width: 100%;


  .imgBoxAbout {
    width: 100%;
    height: 400px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: blur(5px);
    }
  }

  .textAboutContainer {
    max-width: 1200px;
    padding: 3rem 1rem;
    margin: 0 auto;
    border-radius: 20px;

    position: relative;
    top: -150px;
    background-color: #f5f5f5e6;
    box-shadow: 0px 3px 15px #00000021;

    @media (max-width: 1209px) {
    margin: 1rem;
  }

    .titleAbout {
      text-align: center;
      margin-bottom: 3rem;

      h2 {
        font-size: 5rem;
        color: #151715f5;

        @media (max-width: 421px) {
          font-size: 3.7rem;

        }
      }
    }

    .cardAboutBox {
      width: 100%;

      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 2rem;

      @media (max-width: 829px) {
        gap: 5rem;
      }

      .cardAbout {
        width: 100%;
        text-align: center;

        @media (max-width: 577px) {
          text-align: left;
        }

        .iconsAboutCard {
          font-size: 6rem;
          padding: 1rem 1.4rem;
          background-color: #39eb36f5;
          border-radius: 50%;
          margin-bottom: 2rem;
        }

        p {
          font-size: 1.6rem;
          color: #151715c7;
        }
      }
    }
  }
`;