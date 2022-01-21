//Hooks usados na aplicação.
import {useEffect, useState, createContext} from 'react';

//Estilos da página
import {Container} from './style';
import GlobalStyle from '../../styles/Global';

//Importação do componente Menu que não será alterado de acordo com a navegação.
import Menu from '../Menu';

//Importação das rotas.
import Routes from '../../Routes';
import { BrowserRouter } from 'react-router-dom';

//Contexto usado para manipular os dados em toda aplicação.
export const GetProducts = createContext();

export default function App(){
  //Estados dos produtos da API e os que foram selecionados para o carrinhos respectivamente.
  const [products, setProducts] = useState([]);
  const [carProducts, setCarProducts] = useState([]);

  //Chamada a API.
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

  //Função que adiciona produtos ao carrinho.
  function handleAddToCar(product){
    setCarProducts((prevSetCarproducts) => [
      ...prevSetCarproducts, product
    ]);  
  };

  //Função que deleta um produto pelo seu index.
  function handleDelete(id){
    setCarProducts((prevProduct) => (
      prevProduct.filter((product,index) => index !== id)
    ))
  };

  //Função que limpa os produtos do carrinho
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