import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import TableList from '../../components/TableList';

const labels = ['Nome', 'Preço', 'Descrição', 'Tamanho', 'Género', 'Cor', 'Coleção', 'Categoria', 'Marca', 'Utilizador']
const produtosList = [
  {
    id: 1,
    nome: 'Produto 1',
    preco: '10,99 €',
    descricao: 'Descrição 1',
    tamanho: 'XL',
    genero: 'Masculino',
    cor: 'Vermelho',
    colecao: 'Coleção 1',
    categoria: 'Category 1',
    marca: 'Marca 1',
    utilizador: 'Utilizador 1',
  },
  {
    id: 2,
    nome: 'Produto 2',
    preco: '19,99 €',
    descricao: 'Descrição 2',
    tamanho: 'L',
    genero: 'Feminino',
    cor: 'Azul',
    colecao: 'Coleção 2',
    categoria: 'Category 2',
    marca: 'Marca 2',
    utilizador: 'Utilizador 2',
  },
  {
    id: 3,
    nome: 'Produto 3',
    preco: '14,99 €',
    descricao: 'Descrição 3',
    tamanho: 'M',
    genero: 'Masculino',
    cor: 'Verde',
    colecao: 'Coleção 3',
    categoria: 'Category 3',
    marca: 'Marca 3',
    utilizador: 'Utilizador 3',
  },
]

const Produtos = () => {
  const [produtos, setProdutos] = useState(produtosList);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleCriarProduto = (produto) => {
    const novoProduto = {
      id: produtos.length + 1,
      ...produto,
    };
    setProdutos([...produtos, novoProduto]);
  };

  const handleEditarProduto = (editedProduct) => {
    setProdutos((prevProdutos) => {
      const updatedProdutos = prevProdutos.map((produto) => {
        if (produto.id === editedProduct.id) {
          return { ...editedProduct };
        }
        return produto;
      });
      return updatedProdutos;
    });
  };

  return (
    <div>
      <Layout />
      <div className="container">
        <Header 
          handleCriarProduto={handleCriarProduto}
          textTitle='Lista de Produtos'
          textBtn='Criar novo Produto'/>
        <TableList 
          labels={labels} 
          produtos={produtosList} 
          handleEditarProduto={handleEditarProduto}
          key={refreshKey} />
      </div>
    </div>
  );
}

export default Produtos;
