import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from "react-router-dom";

export const ItemList = ({ products, title }) => {
    const productosSinElectronica = products.filter(item => item.category != 'electronics');

    return <>
        <Card body>{title}</Card>
        <CardGroup>
            {
                productosSinElectronica.map((item) => {
                    return (
                            <Card key={item.id} className="p-2">
                                <Card.Img src={item.image} />
                                <Card.Body>
                                    <Card.Title>${item.price}</Card.Title>
                                    <Card.Text>
                                        {item.title}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Link to={'/producto/' + item.id}>
                                        <Button variant="primary">VER</Button>
                                    </Link>
                                </Card.Footer>
                            </Card>
                    )
                })
            }
        </CardGroup>
    </>
}