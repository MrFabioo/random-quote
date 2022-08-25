import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Raleway';
  font-size: 28px;
`;

export const QuoteBox = styled.div`
  border-radius: 3px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px 50px;
  width: 450px;
  background-color: white;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: row;
  svg {
    margin-right: 10px;
  }
`;

export const Author = styled.div`
  padding-top: 20px;
  font-size: 16px;
  text-align: right;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    margin-top: 30px;
    height: 38px;
    min-width: 40px;
    border: none;
    border-radius: 3px;
    color: white;
    cursor: pointer;
  }
`;

export const Brands = styled.div`
  button {
    margin-right: 5px;
  }
  svg {
    height: 19px;
  }
`;

export const NewQuote = styled.button`
  padding: 8px 18px 6px 18px;
  align-self: flex-end;
`;
