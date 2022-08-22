import styled from "styled-components";
import { ArticleGrid } from "../../GlobalStyled";

export const SectionLogros = styled.section`
  width: 100%;
  padding-top: 4rem;
  padding-bottom: 9rem;
`;

export const ArticleLogosGrid = styled(ArticleGrid)`
  padding: 1rem;
  grid-template-columns: 1fr 1fr;

   @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }

    .anosLogro {
        color: var(--colorRed);
      }
    
    .textContextLogros {
      place-self: center;
      
    @media (max-width: 768px) {
      grid-row-start: 1;
      text-align: center;
      margin-bottom: 4rem;
    }

    h2 {
      font-size: 4.4rem;

      @media (max-width: 1000px) {
        font-size: 3.7rem;
      }

      @media (max-width: 439px) {
        font-size: 3rem;
      }

      @media (max-width: 357px) {
        font-size: 2.8rem;
      }
    }

    p {
      font-size: 1.7rem;
      margin: 4rem 0rem;

       @media (max-width: 1000px) {
        font-size: 1.4rem;
      }

      @media (max-width: 357px) {
        font-size: 1.4rem;
        font-weight: 400;

      }
    }

    .listaDeLogros {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;

      span {
        letter-spacing: 1px;
        color: var(--h3Color);
        font-size: 1.6rem;
        font-weight: 800;

        .anosLogro {
          color: var(--colorRed);
        }

        .iconsListCheck {
          position: relative;
          top: 3.5px;
          margin-right: 1rem;
          color: var(--colorRed);
        }
      }
    }
  }
`;