import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* border: 2px solid black; */
  border-radius: 25px;
  width: 40%;
  max-height: 100%;
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.2);

  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Title = styled.h2`
  font-size: 40px;
`;
