import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function EditarProduto() {
    const location = useLocation();
    const produto = location.state?.produto || {};

  return (
    <div className="container">
        <h1>Editar Produto {produto.id}</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control placeholder="Nome do produto" defaultValue={produto.nome} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Preço</Form.Label>
                    <Form.Control placeholder="Preço do Produto" defaultValue={produto.preco}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Descrição do Produto" defaultValue={produto.descricao}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tamanho</Form.Label>
                    <Form.Control placeholder="Tamanho do Produto" defaultValue={produto.tamanho}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Género</Form.Label>
                    <Form.Control placeholder="Género do Produto" defaultValue={produto.genero}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Cor</Form.Label>
                    <Form.Control placeholder="Cor do Produto" defaultValue={produto.cor}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Coleção</Form.Label>
                    <Form.Control placeholder="Coleção do Produto" defaultValue={produto.colecao}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control placeholder="Categoria do Produto" defaultValue={produto.categoria}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Marca</Form.Label>
                    <Form.Control placeholder="Marca do Produto" defaultValue={produto.marca}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Utilizador</Form.Label>
                    <Form.Control placeholder="Utilizador do Produto" defaultValue={produto.utilizador}/>
                </Form.Group>

                <Button variant="primary" type="submit">Guardar</Button>
                <div>
                    <Link to="/produtos">Voltar à Lista</Link>
                </div>
            </Form>
    </div>
  )
}

export default EditarProduto
