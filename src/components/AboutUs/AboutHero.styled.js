import styled from "styled-components";

export const SectionAboutHero = styled.section`
  width: 100%;
  height: 100vh;

  background: linear-gradient(20deg, #00000091, black), url('https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  @media (max-width: 805px) {
    padding: 1rem;
    gap: 3rem;
  }

  h2 {
    font-size: 8rem;
    color: #f0ebedf5;

    @media (max-width: 539px) {
      font-size: 5.5rem;
    }
  }
  
  p {
    max-width: 800px;
    font-size: 1.7rem;
    color: #f0ebedc9;

    @media (max-width: 539px) {
      font-size: 1.5rem;
    }
  }
`;