import { Link } from 'react-router-dom';
const Categorias = () => {
    return (
             <li >
              
                <ul >
                  <li><Link  to={"/category/1"}>Novela</Link></li>
                  <li><Link  to={"/category/2"}>Divulgacion</Link></li>
                  <li><Link  to={"/category/3"}>Clasico</Link></li>
                  <li><Link  to={"/category/4"}> Filosofia </Link></li>
                  <li><Link  to={"/category/5"}> Auto Ayuda </Link></li>


                </ul>
              </li>
              
    );
}

export default Categorias;
