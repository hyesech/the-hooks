import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
  border-radius: ${({ radius }) => `${radius}%`};
  background: ${({ primary }) => (primary ? "red" : "#fff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#000" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: e-resize;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#000")};
    color: ${({ dark }) => (dark ? "#fff" : "#000")};
  }
`;
