import { useContext } from 'react';

//Importação do contexto.
import {GetProducts} from '../App';

import {Container, Counter} from './style';
import {Link} from 'react-router-dom';

export default function Menu(){
  //Uso do contexto importado neste componente.
  const counter = useContext(GetProducts);

  return(
    <Container>
      <header>
        <div className="logo">
        <h3>BuyHere</h3>
        </div>

        <div className="items">
          <Link to="/">Produtos</Link>
          <Link to="/car">
            Carrinho
          </Link>
          <Counter>{counter.carProducts.length}</Counter>
        </div>
      </header>
    </Container>
  );
}