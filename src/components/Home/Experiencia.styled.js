import styled from "styled-components";
import { ArticleGrid } from "../../GlobalStyled";

export const SectionExperiencia = styled.section`
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 5rem;
`;

export const ArticleExperienciaGrid = styled(ArticleGrid)`
  padding: 1rem;
  grid-template-columns: 1fr 1fr;

   @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
    
    .textContextExperiencia {
      place-self: center;
      
    @media (max-width: 768px) {
      grid-row-start: 1;
      text-align: center;
      margin-bottom: 4rem;
    }

    h2 {
      font-size: 4.4rem;

      .anosExperiencia {
        color: var(--colorRed);
      }

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
  }
`;