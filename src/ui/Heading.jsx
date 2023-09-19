import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
// `;
const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.type === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.type === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

  line-height: 1.4px;
`;
export default Heading;
