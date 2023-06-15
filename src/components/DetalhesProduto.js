import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const DetalhesProduto = ({labels, produto, toggleVisibilityDetails}) => {
  return (
    <div className='container'>
        <h1>Detalhe Produto</h1>
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

        <Button variant="primary" type="submit" onClick={toggleVisibilityDetails}>Voltar</Button>
    </div>
  )
}

export default DetalhesProduto
