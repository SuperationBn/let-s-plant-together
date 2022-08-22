import styled from "styled-components";
import { ArticleGrid } from "../../GlobalStyled";

export const SectionAboutMore = styled.section`
  width: 100%;
  padding-top: 0rem;
  padding-bottom: 9rem;
`;

export const ArticleMoreAboutGrid = styled(ArticleGrid)`
  padding: 1rem;
  grid-template-columns: 1fr 1fr;

   @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }

    .anosLogro {
        color: #39eb36f5;
      }
    
    .textContextMoreAbout {
      place-self: center;
      
    @media (max-width: 768px) {
      grid-row-start: 1;
      text-align: center;
      margin-bottom: 4rem;
    }

    h2 {
      font-size: 4.7rem;

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
      font-size: 1.8rem;
      margin: 4rem 0rem;
      line-height: 1.5;

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