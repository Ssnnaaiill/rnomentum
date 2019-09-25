import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const fadeAni = keyframes`
	from {
		opacity:0
	}
	to {
		opacity:1
	}
`;

const Form = styled.form`
	font-family: 'BareunBatang';
	animation: ${fadeAni} 2s linear;
	display: flex;
	flex-direction: column;
	font-size: 2rem;
`;

const Text = styled.span`
	font-weight: bold;
	text-align: center;
	margin-bottom: 0.5rem;
`;

const Input = styled.input`
	all: unset;
	border-bottom: 2px solid #fff;
	font-size: 1.2rem;
	text-align: center;
	padding: 5px;
`;

const Name = ({ value, handleChange, handleSubmit }) => (
	<Form onSubmit={handleSubmit}>
		<Text>당신의 이름이 궁금해요.</Text>
		<Input value={value} onChange={handleChange} />
	</Form>
);

Name.propTypes = {
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
};

export default Name;