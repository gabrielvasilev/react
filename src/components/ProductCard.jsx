import { Card, Button } from "react-bootstrap";
import { ItemCount } from "./ItemCount";

export const ProductCard = ({img, name, stock}) =>{

    return(
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Descripción producto</Card.Text>
                <Card.Text>Stock: {stock}</Card.Text>
            </Card.Body>
            <ItemCount stock="5"/>
            </Card>
        </div>
    )

}