import styled from "styled-components";

interface DotProps {
  position: {
    clientX: number;
    clientY: number;
  };
}

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const Dot = styled.span<DotProps>`
  display: block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.theme.colors.dotColor};
  position: fixed;
  top: ${(props) =>
    props.position && `calc(${props.position.clientY}px - .5rem)`};
  left: ${(props) =>
    props.position && `calc(${props.position.clientX}px - .5rem)`};
`;

export const Options = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  padding-top: 2rem;

  button {
    background-color: ${(props) => props.theme.colors.dotColor};
    border: 0;
    padding: 1rem;
    border-radius: 0.5rem;
    color: #fff;
    cursor: pointer;
    box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.3);

    &:hover {
      filter: brightness(95%);
    }
  }
`;
