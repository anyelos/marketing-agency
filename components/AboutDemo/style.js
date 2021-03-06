import styled from "styled-components";

export const Container = styled.div`
  padding: 0 30px 90px 30px;

  @media (max-width: 2000px) {
    min-height: 70vh;
  }

  @media (max-width: 1024px) {
    padding: 0 20px 50px 20px;
  }
  @media (max-width: 900px) {
    padding: 0 20px 20px 20px;
  }
`;

export const Main = styled.div`
  background-image: url("https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 70vh;
  border-radius: 10px;
`;
