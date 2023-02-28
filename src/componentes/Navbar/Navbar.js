import CartWidget from "../CartWidget/CartWidget";

import Categorias from "./Catergorias/Categorias";

const Navbar = () => {

    return (
        <nav >
            <div >
         
            <div >
                <ul >

                    <Categorias/>
                </ul>
                <CartWidget cantCarrito={5}/>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;