import BotonNav from "../NavBar/BotonNav";
import '../../Styles/Tarjetas.css'

export default function ItemCard({ stock, title, price, description, image, idProd }) {
  return (
    <>

      <section className="ContenedorT">
        <div className="Grid">
          <div className="BoxImg">
            <img src={image} alt="" />
          </div>
          <div>
            <p>{title}</p>
            <p>${price}</p>
          </div>
          <p className="Descri">{description}</p>
          <div className="BotonD">
            <BotonNav className="DetalleB" ruta={`/product/${idProd}`} title={"Detalles"} />
          </div>
          <span className="Stock">
            Stock Disponible: {stock}
          </span>
        </div>
      </section>

    </>
  );
}
