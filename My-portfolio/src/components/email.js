import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Side } from '@components';

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`;

const Email = ({ isHome, userInfo }) => (
  <Side isHome={isHome} orientation="right">
    <StyledLinkWrapper>
      <a href={`mailto:${userInfo.email}`}>{userInfo.email}</a>
    </StyledLinkWrapper>
  </Side>
);

Email.propTypes = {
  isHome: PropTypes.bool,
};

export default Email;
