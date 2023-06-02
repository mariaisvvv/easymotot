import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function CriarProduto() {
  return (
    <div className="container">
        <h1>Criar Produto</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control placeholder="Nome do produto" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Preço</Form.Label>
                    <Form.Control placeholder="Preço do Produto" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Descrição do Produto"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tamanho</Form.Label>
                    <Form.Control placeholder="Tamanho do Produto" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Género</Form.Label>
                    <Form.Control placeholder="Género do Produto" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Cor</Form.Label>
                    <Form.Control placeholder="Cor do Produto" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Coleção</Form.Label>
                    <Form.Control placeholder="Coleção do Produto" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control placeholder="Categoria do Produto" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Marca</Form.Label>
                    <Form.Control placeholder="Marca do Produto" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Utilizador</Form.Label>
                    <Form.Control placeholder="Utilizador do Produto" />
                </Form.Group>

                <Button variant="primary" type="submit">Criar</Button>
                <div>
                    <Link to="/produtos">
                        <a> Voltar à Lista</a>
                    </Link>
                </div>
            </Form>
    </div>
  )
}

export default CriarProduto
