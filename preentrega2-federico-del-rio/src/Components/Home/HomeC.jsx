import { useEffect, useState } from 'react'
import Itemtarjet from '../ProductsView/Itemtarjet';
import { getProducts } from '../../asyncMock';
import CatePollo from '../CatePollo/CategoriaPollo';
import CateCarne from '../CateCarne/CategoriaCarne';

export default function HomeC(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((data) => setProducts(data))
    }, []);
    console.log(products);
    return (<>

    <section>
        <h2 className="Dtext">Bienvenidos a mi tienda!</h2>

        <section>
          {products.map((product) => (
            <Itemtarjet
              key={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
              stock={product.stock}
              idProd={product.id}
            />
          ))}
        </section>
        <section>
          <CatePollo />
          <CateCarne/>
        </section>
      </section>
        
    </>)
}