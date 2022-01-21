import { useContext } from 'react';
import {Container, CardProduct, ButtonAdd} from './style';

import {GetProducts} from '../App';

export default function ProductsList(props){
  const productsList = useContext(GetProducts);

  return(
    <Container>
      <div className="products">
        {productsList.products.map((product) => (
          <CardProduct key={product.id}>
            <div className="name-add">
              <h5>{product.name}</h5>
              <ButtonAdd onClick={()=>productsList.addToCar(product)}>+</ButtonAdd>
            </div>

            <div className="infos-nutritional">
              <p>Família {product.family}</p>
              <p>Carboidratos {product.nutritions.carbohydrates}</p>
              <p>Proteínas {product.nutritions.protein}</p>
              <p>Calorias {product.nutritions.calories}</p>
              <p>Açúcar {product.nutritions.sugar}</p>
            </div>
          </CardProduct>
        ))}
      </div>
    </Container>
  );
}