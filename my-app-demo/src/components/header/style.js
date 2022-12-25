import styled from "styled-components";

export const HeaderTag = styled.header`
  width: 100%;

  top: 0;
  position: fixed;

  background-color: ${(props) => props.theme.elements};
  box-shadow: 0 0 25px -20px black;
`;

export const Container = styled.div`
  max-width: 1440px;
  height: 80px;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 80px;

  @media (max-width: 1440px) {
    padding: 0 5.55%;
  }

  @media (max-width: 375px) {
    padding: 0 16px;
  }

  h1,
  button {
    margin: 0;
    padding: 0;

    color: ${(props) => props.theme.text};
  }

  h1 {
    font-size: 24px;
    font-weight: 800;

    @media (max-width: 425px) {
      font-size: 14px;
    }
  }

  button {
    height: 35px;

    font-size: 14px;
    font-weight: 600;
    background-color: transparent;

    i {
      margin-right: 10px;
    }
  }
`;
