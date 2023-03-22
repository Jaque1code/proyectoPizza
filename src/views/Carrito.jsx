import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import ContextoGlobal from '../contexts/ContextoGlobal'
import { calculaTotalPedido } from '../utils/utils';

const Carrito = () => {
    const { pizzaPedidas, totalPedido, setPizzaPedidas, setTotalPedido } = useContext(ContextoGlobal);


     const cambiarCantidad = (id,incrementar) =>  {
        const idx = pizzaPedidas.findIndex((p) => p.id === id); 

        if (idx >= 0) {
          if (incrementar) 
              pizzaPedidas[idx].cant += 1;
          else
              pizzaPedidas[idx].cant -= 1;    

          if (pizzaPedidas[idx].cant === 0){
              pizzaPedidas.splice(idx,1)
           }
          
           setPizzaPedidas([...pizzaPedidas]);
        }
        setTotalPedido(calculaTotalPedido(pizzaPedidas))
     }

     const asignarCantidad = (value, id) => {
      const idx = pizzaPedidas.findIndex((p) => p.id === id);
      
      if(idx >= 0 && !isNaN(value) && Number(value) >= 0) {
        pizzaPedidas[idx].cant = Number(value);
        setPizzaPedidas([...pizzaPedidas])
      } 
      setTotalPedido(calculaTotalPedido(pizzaPedidas));
      
  }
      
  return (
    <div className="p-5">
        <h3>Detalle del pedido</h3>

        <div className="b-light w-75 m-auto p-5">
                <div  className="d-flex justify-content-between py-2">
                              
                <div className=" d-flex  w-50 justify-content-between py-2"> 
                   <h6 className ="mb-0 text-capitalize p-2">Producto</h6>
                </div>
                
                <div className="d-flex w-50 justify-content-end align-items-center"> 
                   <h6 className ="mb-0 p-2 text-success w-50">
                       Subtotal
                   </h6>
                   <strong className="w-50 text-align-center">Cantidad</strong>
                </div>
              </div>
              { 
                pizzaPedidas.map((pizza, i) => {
                    return (<div key={i} className="d-flex justify-content-between py-2">
                              
                             <div className="d-flex w-50 justify-content-between py-2"> 
                                <img src={pizza.img} width="50" alt="" />
                                <h6 className ="mb-0 text-capitalize p-2">
                                  <NavLink to={`/detalle/${pizza.id}`}>{pizza.name}</NavLink>
                                </h6>
                             </div>
                             
                             <div className="d-flex w-50 justify-content-end align-items-center"> 
                                <h6 className ="mb-0 p-2 text-success w-50">
                                    ${(pizza.price * pizza.cant)}
                                </h6>
                                <div className="w-50 text-center">
                                    <Button variant="danger" onClick={()=>cambiarCantidad(pizza.id, false)}>-</Button>
                                    <input className="mx-1" style={{width:'60px'}} type="text" value={pizza.cant} 
                                            onChange={(e) => asignarCantidad(e.target.value, pizza.id) }/>
                                     
                                    <Button variant="success" onClick={()=>cambiarCantidad(pizza.id, true)}>+</Button>
                                </div>
                                
                             </div>

                           </div>
                    );
                })
            }
            <div>total Pedido: {totalPedido}</div>
        </div>
    </div>
  )
}

export default Carrito