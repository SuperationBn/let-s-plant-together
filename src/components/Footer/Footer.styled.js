import styled from "styled-components";

export const FooterSection = styled.footer`
  padding-top: 7rem;
  padding-bottom: 7rem;
  width: 100%;
  background: var(--colorAzul);

  .subTitle {
    text-align: center;
    font-size: 4rem;
    color: #f7f7f7f6;
  }
`;

export const ArticleFooterFlex = styled.article`
  padding-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  .formContainer {
    max-width: 600px;
    width: 98%;
    height: 50px;
    background-color: white;
    padding: 0.5rem;
    border-radius: 50px;
    overflow: hidden;

    form {
      width: 100%;
      height: 100%;

      display: flex;

      input {
        &:first-child {
          flex: 1 1 80%;
          padding: 0rem 2rem;
          border-top-left-radius: 50px;
          border-bottom-left-radius: 50px;
          
          @media (max-width: 420px) {
            flex: 1 1 70%;
            
          }
        }
        
        &:last-child {
          flex: 1 1 20%;
          cursor: pointer;
          border-top-right-radius: 50px;
          border-bottom-right-radius: 50px;
          color: #f7f7f7f6;
          background: var(--colorRed);

          @media (max-width: 420px) {
            flex: 1 1 30%;
            
          }

        }
      }

    }
  }

  .enlacesContainer {
    margin-top: 8rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    justify-items: center;
    
    @media (max-width: 700px) {
      padding: 2rem;
      grid-template-columns: 1fr;
      justify-items: left;
      gap: 4rem;
      
    }

    .navFooter {
      display: flex;
      flex-direction: column;

      .logo {
        font-size: 2.4rem;
        color: #f2f2f2da;

        span {
          color: #3dd426f6;
        }
      }
      
      .derechos {
        margin-top: 2rem;
        font-size: 1.6rem;
        color: #f2f2f288;
        font-weight: 800;
      }
      
      h3 {
        font-size: 2.9rem;
        color: #3dd426f6;
        text-transform: uppercase
        ;
      }

      a {
        text-transform: capitalize;
        font-size: 1.6rem;
        margin-top: 1rem;
        color: #f2f2f2e1;
        
        &:hover {
          color: #ffcc91;
        }
      }
      
      .direccion {
        max-width: 450px;
        font-size: 1.7rem;
        color: #f2f2f2b1;
        
      }

      .redesLinks {
        margin-top: 3rem;
        display: flex;
        justify-content: start;
        gap: 5rem;

        .redIcons {
          cursor: pointer;
          font-size: 3rem;
          transition: none;

          &:hover {
            color: #3dd426f6;
          }
        }
      }
    }
  }
`;