import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ConfirmDelete from './ConfirmDelete';

const ApagarProduto = ({ produto, labels, handleApagarProduto, toggleVisibilityDelete }) => {
    const [confirmedDelete, setConfirmedDelete] = useState(false)
    const [showModal, setShowModal] = useState(false);

    const handleDeleteSubmit = () => {
        setShowModal(true);
    };

    const handleConfirmDelete = () => {
        handleApagarProduto(produto);
        setShowModal(false);
    }


    return (
    <div className='container'>
        <h1>Apagar Produto</h1>
        <h3>{produto.nome}</h3>
        <br />
        <Table responsive>
            <tbody>
            {labels.map((label, index) => (
                <tr key={index}>
                <td className='bold-text '>{label}</td>
                <td>{produto[label.toLowerCase()]}</td>
                </tr>
            ))}
            </tbody>
        </Table>

        <Button variant="danger" type="submit" onClick={handleDeleteSubmit}>Apagar</Button>
        <Button variant="secondary" type="submit" onClick={toggleVisibilityDelete}>Cancelar</Button>

        {showModal &&<ConfirmDelete
            texto={produto.nome}
            showModal={showModal}
            setShowModal={setShowModal}
            handleConfirmDelete={handleConfirmDelete}/>}
    </div>

    );
};

export default ApagarProduto;