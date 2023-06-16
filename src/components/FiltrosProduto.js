import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';

const FiltrosProduto = ({categoria, labels}) => {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        {categoria !== 'Top' && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1>{categoria}</h1>
            <Button style={{ marginLeft: '30px' }} variant="primary" onClick={handleShow} className="me-2">
            Filtrar
            </Button>
        </div>
        )}
        <Offcanvas placement='end' name='end' show={show} onHide={handleClose} >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Filtrar {categoria}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='off-canvas'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>{labels[9]}</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>{labels[7]}</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>{labels[6]}</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>{labels[4]}</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>{labels[3]}</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant='secondary' onClick={handleClose} >Cancelar</Button>
                    <Button>Aplicar filtro</Button>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    </div>
  )
}

export default FiltrosProduto
