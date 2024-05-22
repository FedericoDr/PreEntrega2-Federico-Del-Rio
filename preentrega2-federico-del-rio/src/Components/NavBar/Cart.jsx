import { useState } from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import '../../Styles/Navbar.css'


export default function Cart() {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  };

  return (
    <>

      <div className="Carrito" onClick={handleClick}><FaShoppingBasket style={{ color: 'black', fontSize: '25px', position: 'relative', top: '9px', right: '7px' }} />{contador} </div>
    </>
  );
}
