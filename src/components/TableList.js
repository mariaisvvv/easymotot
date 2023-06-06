import React from 'react'
import Table from 'react-bootstrap/Table';


const TableList = ({labels, produtos, toggleVisibilityEdit, toggleVisibilityDelete, toggleVisibilityDetails}) => {

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
                <td className="truncate">{produto.nome}</td>
                <td>{produto.preco}</td>
                <td className="truncate">{produto.descricao}</td>
                <td>{produto.tamanho}</td>
                <td>{produto.genero}</td>
                <td>{produto.cor}</td>
                <td>{produto.colecao}</td>
                <td>{produto.categoria}</td>
                <td>{produto.marca}</td>
                <td>{produto.utilizador}</td>
                <td>
                  <div className='reference-links'>
                    <a href='#' onClick={() => toggleVisibilityEdit(produto)}> Editar </a>
                    <a href='#' onClick={() => toggleVisibilityDetails(produto)}> Detalhes </a>
                    <a href='#' onClick={() => toggleVisibilityDelete(produto)}> Apagar </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
    </div>
  )
}

export default TableList
