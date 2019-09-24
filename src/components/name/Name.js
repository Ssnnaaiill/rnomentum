import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

// add animation
const fadeAnimation = keyframes`
  from {
    opacity: 0
  } to {
    opacity: 1
  }
`;

const Form = styled.form`
  animation: ${fadeAnimation} 2s linear;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
`;

const Text = styled.span`
  text-align: center;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  all: unset;
  border-bottom: 2px solid #fff;
  text-align: center;
`;

const Name = ({ value, handleChange, handleSubmit }) => (
  <div>
    <Form onSubmit={handleSubmit}>
      <Text>이름을 입력해 주세요!</Text>
      <Input value={value} onChange={handleChange} />
    </Form>
  </div>
);

Name.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Name;