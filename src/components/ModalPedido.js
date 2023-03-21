import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useCart } from '../context/CartContext';

function ModalPedido({openModal, pedido}) {
    const {clear} = useCart();

    if (!openModal)
    {
        return
    }
    return (
        <div
        className="modal show"
        style={{ display: 'block', position: 'fixed' }}
        >
        <Modal.Dialog>
            <Modal.Header closeButton onClick={() => clear()}>
            <Modal.Title>Pedido finalizado:</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <p>
                Anote seu número do pedido de compras: 
                <p style={{ fontSize: "25px"}}>{pedido}</p>
            </p>

            </Modal.Body>

            <Modal.Footer>
            {/* <Button variant="secondary">Close</Button> */}
            <Button variant="primary" onClick={() => clear()}>Finalizar</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </div>
    );
}

export default ModalPedido;