import styled from 'styled-components';

const StButton = styled.button``;

const Button = ({ children, disabled = false }) => {
  return <StButton disabled={disabled ? `disabled` : ''}>{children}</StButton>;
};

export default Button;
