import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .products{
    width: 70%;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 60px;
    margin-bottom: 20px;
  }
`;

export const CardProduct = styled.div`
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

  .name-add{
    display: flex;
    align-items: center;
    justify-content: space-between;
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

export const ButtonAdd = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  font-weight: bold;
  font-size: 15px;
  color: #5061FC;
  background: #80ff80;

  :hover{
    background: #25ff20;
  }
`;