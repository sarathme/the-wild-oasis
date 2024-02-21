import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizantal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      justify-content: space-between;
      align-items: space-between;
      gap: 1.5rem;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
