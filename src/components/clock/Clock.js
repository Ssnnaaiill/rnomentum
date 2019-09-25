import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Time = styled.span`
  font-size: 3em;
  margin-bottom: 0.5rem;
`;

const Greeting = styled.span`
  font-size: 2rem;
`;

const Clock = ({ name, time, greeting }) => (
  <Container>
    <Time>{time}</Time>
    <Greeting>{`${greeting}, ${name.data}`}</Greeting>
  </Container>
);

Clock.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  greeting: PropTypes.string.isRequired
};

export default Clock;