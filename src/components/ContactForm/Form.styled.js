import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 25px;
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

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 20px;
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  font-size: 25px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1),
      -23px 0 20px -23px rgba(0, 0, 0, 0.8),
      23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  }
  cursor: pointer;
  margin-bottom: 25px;
  margin-top: 20px;
`;
