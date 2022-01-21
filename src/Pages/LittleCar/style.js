import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #E5E5E5;

  .clean-cart{
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 20px;

    img{
      margin-right: 5px;
      width: 30px;
    }

    p{
      margin-right: 35px;
      color: #FC5050;
      font-weight: bold;
      font-size: 15px;
      cursor: pointer;

      :hover{
        text-decoration: underline;
      }
    }

  }

  .car{
    width: 70%;
    padding: 10px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 60px;
    margin-bottom: 20px;
  }
`;

export const CardProductCar = styled.div`
  width: 200px;
  height: 130px;
  background: #fff;
  border-radius: 5px;
  margin: 10px;
  padding: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  h5{
    width: 90px;
    height: 20px;
    color: #5061FC;
    background: #E0E3FF;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .name-delete{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .button-delete{
    border: none;
  }

  .infos-nutritional{
    margin-top: 8px;    
    p{
      font-size: 13px;
      color: #BCBCBC;
      font-weight: normal;
    }

  }
`;

export const EmptyCard = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img{
    margin-bottom: 20px;
  }

  .text-one{
    color: #BCBCBC;
  }

  .text-two{
    display: flex;
    color: #BCBCBC;
  }
  .text-center{
    margin: 0 6px 0 6px;
    color: #5061FC;
    font-weight: bold;
  }
`;