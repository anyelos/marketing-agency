import styled from "styled-components";

export const Container = styled.div`
  padding: 90px 30px 310px 30px;
  min-height: 100vh;
  z-index: 1;

  @media (max-width: 2000px) {
    min-height: 100vh;
  }

  @media (max-width: 1024px) {
    padding: 90px 20px;
  }
  @media (max-width: 900px) {
    padding: 60px 20px;
  }
`;
export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.35fr;
  align-items: center;
  justify-content: stretch;
  grid-gap: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    .div {
      display: none;
    }
  }
`;

export const Title = styled.h1`
  font-size: 44px;
  font-weight: bold;
  line-height: 125%;
  margin: 0;
  margin-top: 10px;
  color: ${({ theme }) => theme.heading};

  @media (max-width: 1024px) {
    font-size: 32px;
  }

  @media (max-width: 900px) {
    font-size: 32px;
  }
`;
export const Subtitle = styled.p`
  font-size: 22px;
  line-height: 1.4em;
  color: #57577d;
  color: ${({ theme }) => theme.subHeading};

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 900px) {
    font-size: 18px;
  }
`;
export const Button = styled.button`
  padding: 15px 30px;
  color: white;
  background: ${({ theme }) => theme.accent};

  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  transition: all 200ms;

  :hover {
    background: #0070f3;
    box-shadow: 0 10px 20px rgba(0, 0, 255, 0.15);
  }

  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 15px 30px;
  }

  @media (max-width: 900px) {
    font-size: 14px;
    padding: 12px 25px;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;

  #secondButton {
    background: #e7e7ff;
    color: blue;

    @media (max-width: 1024px) {
      font-size: 14px;
      padding: 15px 30px;
    }

    @media (max-width: 900px) {
      font-size: 14px;
      padding: 12px 25px;
      border: 1px solid #d7d7fd;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: flex-start;
  grid-gap: 10px;
  max-width: 420px;

  @media (max-width: 1024px) {
    max-width: 350px;
  }

  @media (max-width: 900px) {
    max-width: 350px;
  }
`;
export const Welcome = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const Div = styled.div`
  height: 5px;
  width: 35px;
  border-radius: 2px;
  background-color: blue;
`;
export const Span = styled.span`
  font-size: 12px;
  color: blue;
  margin-left: 10px;
  font-weight: bold;
`;

export const SideColor = styled.div`
  background-image: url("https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-1.2.1&auto=format&fit=crop&w=1653&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 110vh;
  opacity: 0.8;
  width: 100%;
  opacity: 0.8;
  position: absolute;
  z-index: -1;
  right: 0;
  margin-top: -100px;
  border-bottom-right-radius: 10px;

  @media (max-width: 1024px) {
    background-color: #f3f3fd;
    height: 100vh;
    opacity: 0.2;
  }
`;
