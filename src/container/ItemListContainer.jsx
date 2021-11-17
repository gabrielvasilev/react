import { useEffect, useState } from "react"
import { ItemCount } from "../components/ItemCount"
import { ItemList } from "../components/ItemList"
import { pedirDatos } from "../helpers/pedirDatos"
import { ProductCard } from "../components/ProductCard"

export const ItemListContainer = () =>{

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    useEffect(() =>{

        setLoading(true)
        pedirDatos()
            .then((resp) =>{
                setProductos(resp)
            })
            .catch((error) =>{
                console.log(error)
            })
            .finally(()=>{
                setLoading(false)
            })

    }, [])

    return(
        <div>
            <h1>{mensaje.greeting}</h1>
            <hr />
            <ProductCard name="Producto" img={productoFoto} stock="10"/>
            <ItemCount/>

            {
                loading
                ? <h2>Cargando..</h2>
                : <ItemList productos={productos}/>
            }
        </div>
    )

}