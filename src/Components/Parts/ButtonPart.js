import React, { useState } from "react";
import { FaRegIdBadge } from "react-icons/fa";
import styled from "styled-components";

const Button = styled.button`
  all: unset;
  margin: 0 0.5rem;
  color: white;
  font-weight: bold;
`;

const ButtonPart = ({ foo, answer }) => {
  const [value, setValue] = useState(true);
  const changeValue = () => {
    setValue(!value);
  };
  return <Button onClick={changeValue}>{value ? foo : answer}</Button>;
};

export default ButtonPart;
