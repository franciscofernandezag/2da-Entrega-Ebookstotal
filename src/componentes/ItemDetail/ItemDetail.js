import { ItemCount } from "../ItemCount/ItemCount";
export const ItemDetail = ({ item }) => {
  return (
    <div>
      <div >
        <img src={`../img/${item.img}`}  alt={`Imagen de ${item.nombre}`} />
      </div>
      <div >
        <div >
          <h3 > {item.titulo}  </h3>
          <p > Autor :  {item.autor}</p>
          <p > Genero : {item.genero} </p>
          <p > Reseña : {item.resumen} </p>
          <p > precio : ${new Intl.NumberFormat('de-DE').format(item.precio)} </p>
          
          <ItemCount valInicial={1} stock={item.stock}/>
          <button >Finalizar </button>
         </div>
      </div>
    </div>
  );
};

export default ItemDetail;
