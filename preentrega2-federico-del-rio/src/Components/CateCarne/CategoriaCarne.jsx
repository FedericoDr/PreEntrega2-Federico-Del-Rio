import { useEffect, useState } from 'react';
import Itemtarjet from '../ProductsView/Itemtarjet';
import { getProducts } from '../../asyncMock';

export default function CateCarne() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  console.log(products);

  return (
    <>
      <section>
        <h2 className="Dtext">Hamburguesas de carne</h2>

        <section>
          {products
            .filter((carne) => carne.category === "carne")
            .map((carne) => (
              <Itemtarjet
                key={carne.id}
                title={carne.title}
                price={carne.price}
                description={carne.description}
                image={carne.image}
                stock={carne.stock}
                idProd={carne.id}
              />
            ))}
        </section>
      </section>
    </>
  );
}
