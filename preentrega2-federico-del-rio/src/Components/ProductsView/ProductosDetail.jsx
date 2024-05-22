import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../asyncMock';
import '../../Styles/Tarjetas.css';



export default function ProductosDetail() {
    const [products, setProducts] = useState({});
    const { prodId } = useParams();
    const [count, setcount] = useState(0);


    useEffect(() => {
        setProducts(getProduct(prodId));
    }, []);

    return (
        <>
            <h2 className="Dtext">Detalle del producto</h2>
            <section className="ContenedorT">
                <div className="Grid">
                    <div className="BoxImg">
                        <img src={products.image} alt="" />
                    </div>
                    <div>
                        <p>{products.title}</p>
                        <p className="Descri">{products.descripcion}</p>
                        <p>$:{products.price}</p>
                        <p>ID:{prodId}</p>
                    </div>
                    <p>{products.description}</p>
                    <div>
                        <div className="Score">
                            <button onClick={() => { count > 0 && setcount(count - 1); }} >-</button>
                            <p>{count}</p>
                            <button onClick={() => { count < products.stock && setcount(count + 1) }} >+</button>
                        </div>
                    </div>
                    <span className="Stock">
                        Stock Disponible: {products.stock}
                    </span>
                </div>
            </section>
        </>
    );
}