import { ItemCount } from "../components/ItemCount"
import { ProductCard } from "../components/ProductCard"

export const ItemListContainer = (mensaje) =>{

    return(
        <div>
            <h1>{mensaje.greeting}</h1>
            <hr />
            <ProductCard name="Producto" img={productoFoto} stock="10"/>
            <ItemCount/>
        </div>
    )

}