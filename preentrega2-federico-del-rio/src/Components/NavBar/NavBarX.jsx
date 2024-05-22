import '../../Styles/Navbar.css'
import Cart from './Cart'
import BotonNav from './BotonNav'
export default function NavBar() {
    return (
        <>
            <header>
                <nav className="Boxtitulo">
                    <nav className="Titulo">
                            <BotonNav ruta={"/"} title={"SUB | BURGER"} />
                        <nav className="NavBox">
                            <BotonNav ruta={"/"} title={"Todo"} />
                            <BotonNav ruta={"/Carne"} title={"Carne"} />
                            <BotonNav ruta={"/Pollo"} title={"Pollo"} />
                        </nav>
                        <Cart />
                    </nav>

                </nav>

            </header>
        </>
    );
}