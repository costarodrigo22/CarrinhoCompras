import {useEffect, useState, createContext} from 'react';

import {Container} from './style';
import GlobalStyle from '../../styles/Global';

import Menu from '../Menu';

import Routes from '../../Routes';
import { BrowserRouter } from 'react-router-dom';

export const GetProducts = createContext();

export default function App(){
  const [products, setProducts] = useState([]);
  const [carProducts, setCarProducts] = useState([]);

  useEffect(() => {
    fetch('http://www.fruityvice.com/api/fruit/all')
      .then(async (response) => {
        const json = await response.json();
        setProducts(json);
      })
      .catch((error) => {
        console.log(error);
      })
  },[]);

  function handleAddToCar(product){
    setCarProducts((prevSetCarproducts) => [
      ...prevSetCarproducts, product
    ]);  
  };

  function handleDelete(id){
    setCarProducts((prevProduct) => (
      prevProduct.filter((product,index) => index !== id)
    ))
  };

  function handleClean(){
    setCarProducts([]);
  }


  return(
    <BrowserRouter>
      <GetProducts.Provider value={
        {
          products : products, 
          carProducts: carProducts,
          addToCar: handleAddToCar,
          deleteProduct: handleDelete,
          clean: handleClean,
        }}>
        <GlobalStyle />
        <Container>
          <Menu />
          <Routes />
        </Container>
      </GetProducts.Provider>
    </BrowserRouter>
  );
}