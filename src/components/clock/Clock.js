import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Time = styled.span`
	font-family: 'stencil';
	font-size: 5rem;
	font-weight: 500;
	margin-bottom: 0.5rem;
`;

const Greeting = styled.span`
	
	font-size: 1.5rem;
`;


/**
 * Clock
 * - show local clock
 * @param name
 * @param time
 * @param greeting 
 */

const Clock = ({ name, time, greeting }) => (
	<Container>
		<Time>{time}</Time>
		<Greeting>{`${greeting}, ${name}.`}</Greeting>
	</Container>
);

Clock.propTypes = {
	name: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	greeting: PropTypes.string.isRequired,
};

export default Clock;