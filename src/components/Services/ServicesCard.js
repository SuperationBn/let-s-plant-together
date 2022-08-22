import styled from "styled-components";

export const SectionCardServices = styled.section`
  width: 100%;
  height: 100vh;

  background:linear-gradient(10deg, #00000021, black), url('https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 964px) {
    padding-top: 8rem;
    padding-bottom: 8rem;
    height: auto;
  }

  .containerServicesCard {
    padding: 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    @media (max-width: 964px) {
      flex-direction: column;
    }

    .title {
      flex: 1 1 40rem;

      @media (max-width: 964px) {
        flex: 1 1 100%;
        margin-bottom: 5rem;
      }

      h2 {
        
        font-size: 4.6rem;
        color: #f5f5f5e7;

        @media (max-width: 1152px) {
          font-size: 3.3rem;
        }

        @media (max-width: 964px) {
          text-align: center;
        }
      }
    }

    .cardServices {
      flex: 1 1 50rem;

      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      
      @media (max-width: 964px) {
        flex: 1 1 100%;
        grid-template-columns: 1fr 1fr;
      }
      
      @media (max-width: 460px) {
        grid-template-columns: 1fr ;

      }

      .card {

        padding: 2rem;
        background-color: #00000051;
        backdrop-filter: blur(10px);
        border-radius: 10px;
        box-shadow: 0px 3px 8px #00000031;

        .iconsServices {
          font-size: 4rem;
          color: var(--colorRed);
        }

        p {
          margin-top: 2rem;
          font-size: 1.8rem;
          color: #f5f5f5c0;
        }
      }
    }
  }
`;