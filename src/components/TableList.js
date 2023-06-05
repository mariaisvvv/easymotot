import React from 'react'
import Table from 'react-bootstrap/Table';

const TableList = ({labels, produtos, editProduto}) => {
  return (
    <div>
        <Table responsive>
          <thead className="thead-dark">
          <tr>
              {labels.map((label) => (
                <th key={label}>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id}>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
                <td>{produto.descricao}</td>
                <td>{produto.tamanho}</td>
                <td>{produto.genero}</td>
                <td>{produto.cor}</td>
                <td>{produto.colecao}</td>
                <td>{produto.categoria}</td>
                <td>{produto.marca}</td>
                <td>{produto.utilizador}</td>
                <td>
                    <a href='#' onClick={() => editProduto(produto)}> Editar </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
    </div>
  )
}

export default TableList
