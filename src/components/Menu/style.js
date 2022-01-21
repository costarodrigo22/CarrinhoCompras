import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background: #5061FC;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;

  header{
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    .items{
      display: flex;
      align-items: center;
    }

    a{
      text-decoration: none;
      color: #fff;
      padding: 10px;
      border: 2px solid #fff;
      border-radius: 5px;
      font-weight: bold;

      & + a{
        margin-left: 15px;
      }
    }

    a:hover{
      background: #fff;
      color: #5061FC;
      transition: all 0.3s;
    }
  }
`;

export const Counter = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff1a1a;
  border-radius: 50%;
  font-size: 12px;
  margin-top: 25px;
  margin-left: -15px;
`;