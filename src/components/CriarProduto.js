import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { labels } from '../pages/Produtos/Dados';
import { useState } from 'react';


const CriarProduto = ({toggleVisibilityCreate, labels, handleCriarProduto}) => {
    const [newProduto, setNewProduto] = useState({
        nome: '',
        preco: '',
        descricao: '',
        tamanho: '',
        genero: '',
        cor: '',
        colecao: '',
        categoria: '',
        marca: '',
        utilizador: '',
      });

    const handleSubmit = (event) => {
        event.preventDefault();
        handleCriarProduto(newProduto);
      };

      const handleInputChange = (event) => {
        setNewProduto({ ...newProduto, [event.target.name]: event.target.value})

    };

  return (
    <div className="container">
        <h1>Criar Produto</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label className='bold-text'>{labels[0]}</Form.Label>
                    <Form.Control name={labels[0]}
                        onChange={handleInputChange}
                        placeholder="Nome do produto" />
                </Form.Group>
                <Form.Group>
                    <Form.Label className='bold-text'>{labels[1]}</Form.Label>
                    <Form.Control name={labels[1]}
                        onChange={handleInputChange}
                        placeholder="Preço do Produto" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className='bold-text'>{labels[2]}</Form.Label>
                    <Form.Control name={labels[2]}
                        onChange={handleInputChange}
                        as="textarea" 
                        rows={3} 
                        placeholder="Descrição do Produto"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label className='bold-text'>{labels[3]}</Form.Label>
                    <Form.Control name={labels[3]}
                        onChange={handleInputChange}
                        placeholder="Tamanho do Produto" />
                </Form.Group>
                <Form.Group>
                    <Form.Label className='bold-text'>{labels[4]}</Form.Label>
                    <Form.Control name={labels[4]}
                        onChange={handleInputChange}
                        placeholder="Género do Produto" />
                </Form.Group>
                <Form.Group>
                    <Form.Label className='bold-text'>{labels[5]}</Form.Label>
                    <Form.Control name={labels[5]}
                        onChange={handleInputChange}
                        placeholder="Cor do Produto" />
                </Form.Group>
                <Form.Group>
                    <Form.Label className='bold-text'>{labels[6]}</Form.Label>
                    <Form.Control name={labels[6]}
                        onChange={handleInputChange}
                        placeholder="Coleção do Produto" />
                </Form.Group>
                <Form.Group>
                    <Form.Label className='bold-text'>{labels[7]}</Form.Label>
                    <Form.Control name={labels[7]}
                        onChange={handleInputChange}
                        placeholder="Categoria do Produto" />
                </Form.Group>
                <Form.Group>
                    <Form.Label className='bold-text'>{labels[8]}</Form.Label>
                    <Form.Control name={labels[8]}
                        onChange={handleInputChange}
                        placeholder="Marca do Produto" />
                </Form.Group>
                <Form.Group>
                    <Form.Label className='bold-text'>{labels[9]}</Form.Label>
                    <Form.Control name={labels[9]}
                        onChange={handleInputChange}
                        placeholder="Utilizador do Produto" />
                </Form.Group>

                <Button variant="primary" type="submit">Guardar</Button>
                <Button variant="secondary" type="submit" onClick={toggleVisibilityCreate}>Cancelar</Button>
            </Form>
    </div>
  )
}

export default CriarProduto
