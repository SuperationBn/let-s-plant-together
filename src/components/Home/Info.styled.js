import styled from "styled-components";
import { ArticleGrid } from "../../GlobalStyled";

export const SectionInfo = styled.section`
  width: 100%;
  padding-top: 8rem;
  padding-bottom: 8rem;
`;

export const ArticleGridInfo = styled(ArticleGrid)`
  padding: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 5rem;

  @media (max-width: 371px) {
    grid-template-columns: 1fr;  
  }

  .cardInfo {
    padding: 3rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    border: 1px solid var(--pColor);
    border-radius: 6px;
    box-shadow: 0px 2px 10px #00000021;

    &:hover {
    box-shadow: 0px 5px 15px #00000041;

    }

    .imgIconBox  {
      width: 80px;
      height: 80px;
      margin-inline: auto;
    }

    h4 {
      font-size: 2.3rem;
    }

    p {
      font-size: 1.5rem;
    }

    button {
      width: fit-content;
      margin: 0 auto;
      padding: 0.3rem 2rem;
      font-size: 1.4rem;

      &:hover {
        background-color: #ff6310;
      }
    }
  }
`;