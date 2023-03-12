import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  gap: 5px;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  outline: 0;
  &:focus,
  &:hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1),
      -23px 0 20px -23px rgba(0, 0, 0, 0.8),
      23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  }
`;
