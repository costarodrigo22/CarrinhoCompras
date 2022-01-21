import { useContext } from 'react';

import {GetProducts} from '../../components/App';

import {Container, CardProductCar, EmptyCard} from './style';

import deleteItem from '../../assets/images/delete.svg';
import clean from '../../assets/images/clean-cart.svg';
import emptyBox from '../../assets/images/empty-box.svg';

export default function LittleCar(props){
  const cart = useContext(GetProducts);

  return(
    <Container>
      {cart.carProducts.length > 0 ?
        <>
          <div className='car'>
            {cart.carProducts.map((carts, index) => (
              <CardProductCar key={index}>
                <div className="name-delete">
                  <h5>{carts.name}</h5>
                  <button onClick={() => cart.deleteProduct(index)} className="button-delete"><img src={deleteItem} /></button>
                </div>

                <div className="infos-nutritional">
                  <p>Família {carts.family}</p>
                  <p>Carboidratos {carts.nutritions.carbohydrates}</p>
                  <p>Proteínas {carts.nutritions.protein}</p>
                  <p>Calorias {carts.nutritions.calories}</p>
                  <p>Açúcar {carts.nutritions.sugar}</p>
                </div>
              </CardProductCar>
            ))}
          </div>
          <div className="clean-cart"><img src={clean}/> <p onClick={()=>cart.clean()}>Limpar carrinho</p></div>
        </>
        :
        <EmptyCard>
          <img src={emptyBox} />
          <p className="text-one">Você ainda não tem nenhum produto no seu carrinho</p>
          <p className="text-two">Clique no botão acima <p className="text-center">"Produtos"</p> para iniciar as compras</p>
        </EmptyCard>
      }
    </Container>
  );
}