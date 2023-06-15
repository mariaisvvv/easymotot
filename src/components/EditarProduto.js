import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputProdutos from './InputProdutos';

const EditarProduto = ({produto, handleEditarProduto, toggleVisibilityEdit}) => {
    const [editedProduto, setEditedProduto] = useState(produto);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleEditarProduto(editedProduto);
    }

    const handleInputChange = (event) => {
        setEditedProduto({ ...editedProduto, [event.target.name]: event.target.value})

    };

  return (
    <div className="container">
        <h1>Editar Produto</h1>
        <h3>{editedProduto.nome}</h3>
            <Form onSubmit={handleFormSubmit}>
            <InputProdutos 
                    label='Nome'
                    placeholder='Nome do Produto'
                    name='nome'
                    value={editedProduto.nome}
                    onChange={handleInputChange}
                />
                <InputProdutos 
                    label='Preço'
                    placeholder='Preço do Produto'
                    name='preco'
                    value={editedProduto.preco}
                    onChange={handleInputChange}
                />
                <Form.Group>
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control as="textarea" rows={3} 
                        placeholder="Descrição do Produto"
                        value={editedProduto.descricao}
                        name='descricao'
                        onChange={handleInputChange}/>
                </Form.Group>
                <InputProdutos 
                    label='Tamanho'
                    placeholder='Tamanho do Produto'
                    name='tamanho'
                    value={editedProduto.tamanho}
                    onChange={handleInputChange}
                />
                <InputProdutos 
                    label='Género'
                    placeholder='Género do Produto'
                    name='genero'
                    value={editedProduto.genero}
                    onChange={handleInputChange}
                />
                <InputProdutos 
                    label='UtiliCorzador'
                    placeholder='Cor do Produto'
                    name='cor'
                    value={editedProduto.cor}
                    onChange={handleInputChange}
                />
                <InputProdutos 
                    label='Coleção'
                    placeholder='Coelção do Produto'
                    name='colecao'
                    value={editedProduto.colecao}
                    onChange={handleInputChange}
                />
                <InputProdutos 
                    label='Categoria'
                    placeholder='Categoria do Produto'
                    name='categoria'
                    value={editedProduto.categoria}
                    onChange={handleInputChange}
                />
                <InputProdutos 
                    label='Marca'
                    placeholder='Marca do Produto'
                    name='marca'
                    value={editedProduto.marca}
                    onChange={handleInputChange}
                />
                <InputProdutos 
                    label='Utilizador'
                    placeholder='Utilizador do Produto'
                    name='utilizador'
                    value={editedProduto.utilizador}
                    onChange={handleInputChange}
                />

                <Button variant="primary" type="submit">Guardar</Button>
                <Button variant="secondary" type="submit" onClick={toggleVisibilityEdit}>Cancelar</Button>
            </Form>
    </div>
  )
}

export default EditarProduto
