import React, { useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import ContextoGlobal from '../contexts/ContextoGlobal';

const Detalle = () => {

    const {id} = useParams();

    const { pizzas, agregarPizza } = useContext(ContextoGlobal);  

    // const idxPizza = pizzas.findIndex((p) => p.id === id);
    // const pizzaDetalle = pizzas[idxPizza];  
  

    const pizzaDetalle  = pizzas.filter((p) => p.id === id);
    console.log(pizzaDetalle)

    return (
        <Card style={{ width: '18rem', marginTop: '1em' }}>
          <Card.Img variant="top" src={pizzaDetalle[0].img} />
          <Card.Body>
            <Card.Title>{pizzaDetalle[0].name}</Card.Title>
            <Card.Text>
              <h5>Ingredientes</h5>
              <ul>
                {
                  pizzaDetalle[0].ingredients.map((i) => <li key={i}>{i}</li>)
                }
              </ul>
            </Card.Text>
            <Card.Text>
               <h4>{pizzaDetalle[0].price}</h4>
            </Card.Text>
            <Button variant="danger" onClick={()=> agregarPizza(pizzaDetalle[0])}>Añadir</Button>
          </Card.Body>
        </Card>
      );
}

export default Detalle