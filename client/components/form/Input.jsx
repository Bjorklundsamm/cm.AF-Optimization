import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Money from '../../../lib/moneyHelper';

const InputStyles = styled.input`
  @import url(https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap);
  font-family: 'Cabin', Arial, Helvetica, sans-serif;
  letter-spacing: -0.1px;
  font-size: 16px;
  line-height: 1.5;
  padding: 6px;
  border-radius: 6px;
  border: solid 0.01em rgb(205, 209, 212);
  color: rgb(59, 65, 68);
  padding: 8px;
  width: ${(props) => {
    if (props.name === 'homePrice') { return 90; }
    if (props.name === 'downPayment') { return 80; }
    if (props.name === 'downPaymentPercent') { return 40; }
    if (props.name === 'interestRate') { return 50; }
    return 100;
  }
}px;

  border-radius: ${(props) => {
    if (props.name === 'downPayment') { return '8px 0px 0px 8px;'; }
    if (props.name === 'downPaymentPercent') { return '0px 8px 8px 0px;'; }
    return '0px';
  }}

  margin-left: ${(props) => {
    if (props.name === 'downPaymentPercent') { return -1; }
    return 0;
  }}px;

  :focus, :focus-within {
    outline: none;
    border-color: rgb(0, 173, 187);
    box-shadow: rgb(0 120 130) 0px 0px 0px 2px;
  }
`;

const Input = ({
  id, name, value, handleInputChange,
}) => {
  let renderInput;
  if (name === 'interestRate') {
    renderInput = (
      <InputStyles
        id={id}
        name={name}
        type="text"
        value={Money.formatInterestRatePercent((value || 0))}
        onChange={
          (e) => handleInputChange({
            name: e.target.name,
            value: Money.percentStringToDecimal(e.target.value),
          })
        }
      />
    );
  }
  if (name === 'downPaymentPercent') {
    renderInput = (
      <InputStyles
        id={id}
        name={name}
        type="text"
        value={Money.formatDownPaymentPercent((value || 0))}
        onChange={
          (e) => handleInputChange({
            name: e.target.name,
            value: Money.percentStringToDecimal(e.target.value),
          })
        }
      />
    );
  }
  if (name === 'downPayment' || name === 'homePrice') {
    renderInput = (
      <InputStyles
        id={id}
        name={name}
        type="text"
        value={Money.formatMoney((value || 0))}
        onChange={
          (e) => handleInputChange({
            name: e.target.name,
            value: Money.moneyStringToDecimal(e.target.value),
          })
        }
      />
    );
  }
  return (
    <>
      {renderInput}
    </>
  );
};

export default Input;

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
