import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// weather component is fixed at right top
const Container = styled.div`
	position: fixed;
	right: 0;
	top: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin: 1rem;
`;

const Temp = styled.span`
	font-weight: 500;
	font-size: 1.2rem;
	display: flex;
	align-items: center;
	margin-bottom: 0.5rem;
`;

const Name = styled.span`
	font-weight: 400;
	font-size: 0.8rem;
	margin-right: 0.2rem;
`;

const Location = styled.span`
	font-size: 0.5rem;
`;

const Weather = ({ temp, name, location }) => (
	<Container>
		<Temp>
			<Name>{name}</Name>
			{temp}˚
		</Temp>
		<Location>{location}</Location>
	</Container>
);

Weather.propTypes = {
	temp: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
};

export default Weather;