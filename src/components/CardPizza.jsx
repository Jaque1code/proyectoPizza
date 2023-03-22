import { useContext } from 'react'; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import ContextoGlobal from '../contexts/ContextoGlobal';
import { calculaTotalPedido } from '../utils/utils';

function CardPizza({pizza}) {

  const navigate = useNavigate();

  const {agregarPizza} = useContext(ContextoGlobal);

  const verDetalle = () => {
    navigate(`/detalle/${pizza.id}`)
  }



    
  return (
    <Card style={{ width: '18rem', marginTop: '1em' }}>
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <div>
           <h5>Ingredientes</h5>
           <ul>
            {
              pizza.ingredients.map((i) => <li key={i}>{i}</li>)
            }
           </ul>
          </div>
        <div>
           <h4>{pizza.price}</h4>
        </div>
        <Button variant="primary" onClick={() =>verDetalle()}>ver mas</Button>
        <Button variant="danger" onClick={()=>agregarPizza(pizza)}>Añadir</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPizza;