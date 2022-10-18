import React from "react";

//bootstrap
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
//-----------

const ItemDetail = ({ producto }) => {
    return <>
        <h1>{producto.title}</h1>
        <CardGroup>
            <Card key={producto.id} className="p-2">
                <Card.Img variant="top" src={producto.image} />
                <Card.Body>
                    <Card.Title>${producto.price}</Card.Title>
                    <Card.Text>
                       {producto.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    </>
}

export default ItemDetail;