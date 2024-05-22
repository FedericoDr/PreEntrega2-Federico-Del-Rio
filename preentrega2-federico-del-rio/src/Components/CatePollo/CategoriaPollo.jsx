import { useEffect, useState } from 'react';
import Itemtarjet from '../ProductsView/Itemtarjet';
import { getProducts } from '../../asyncMock';

export default function CatePollo() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <>
      <section>
        <h2 className="Dtext">Hamburgesas de pollo</h2>

        <section>
          {products
            .filter((pollo) => pollo.category === "pollo")
            .map((pollo) => (
              <Itemtarjet
                key={pollo.id}
                title={pollo.title}
                price={pollo.price}
                description={pollo.description}
                image={pollo.image}
                stock={pollo.stock}
                idProd={pollo.id}
              />
            ))}
        </section>
      </section>
    </>
  );
}
