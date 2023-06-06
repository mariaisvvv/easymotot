import React, { useState } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import TableList from '../components/TableList';
import EditarProduto from '../components/EditarProduto';
import ApagarProduto from '../components/ApagarProduto';
import DetalhesProduto from '../components/DetalhesProduto';

const labels = ['Nome', 'Preco', 'Descricao', 'Tamanho', 'Genero', 'Cor', 'Colecao', 'Categoria', 'Marca', 'Utilizador']
const produtosList = [
  {
    id: 1,
    nome: 'CAPACETE NEXX SX100R ABISAL BLACK RED MATT',
    preco: '186,30 €',
    descricao: 'Capacete Nexx SX.100R Abisal Preto / Vermelho Mate. Capacete integral em material termoplástico muito leve. Destaca-se por oferecer um design aerodinâmico, moderno e esportivo ideal para o uso diário. Tem uma pala de sol integrada, um sistema de ventilação eficaz e um forro interior muito confortável. Destaca-se o spoiler traseiro projetado para oferecer excelente desempenho aerodinâmico.',
    tamanho: 'S',
    genero: 'Feminino',
    cor: 'Cizento',
    colecao: 'Anual',
    categoria: 'capacetes',
    marca: 'Nexx',
    utilizador: 'Ana',
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
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [visibleDetails, setVisibleDetails] = useState(false);
  const [editableProduct, setEditedProduto] = useState({
    id: 0,
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

  const toggleVisibilityDelete = (product) => {
    setEditedProduto(product);
    setVisibleDelete(prevState => !prevState);
  }

  const toggleVisibilityEdit  = (product) => {
    setEditedProduto(product);
    setVisibleEdit(prevState => !prevState);
  }

  const toggleVisibilityDetails  = (product) => {
    setEditedProduto(product);
    setVisibleDetails(prevState => !prevState);
  }

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
          return editedProduct;
        }
        return produto;
      });
      return updatedProdutos;
    });
    setVisibleEdit(prevState => !prevState);
  };

  const handleApagarProduto = (produto) => {
    setProdutos((prevProdutos) => {
      return prevProdutos.filter((p) => p.id !== produto.id)
    });
    setVisibleDelete(prevState => !prevState);
  }

  return (
    <div>
      <Layout />
      <div className="container">
        { !visibleDelete && !visibleEdit && (
        <>
            <Header 
              handleCriarProduto={handleCriarProduto}
              textTitle='Lista de Produtos'
              textBtn='Criar novo Produto'
            />
            <TableList 
              labels={labels} 
              produtos={produtos} 
              toggleVisibilityEdit={toggleVisibilityEdit}
              toggleVisibilityDelete={toggleVisibilityDelete}
              toggleVisibilityDetails={toggleVisibilityDetails}
            />
          </>
        )}
        {visibleEdit && <EditarProduto 
          produto={editableProduct} 
          toggleVisibilityEdit={toggleVisibilityEdit}
          setVisibleEdit={setVisibleEdit}/>}
        {visibleDelete && <ApagarProduto 
          produto={editableProduct}
          labels={labels}
          handleApagarProduto={handleApagarProduto}
          toggleVisibilityDelete={toggleVisibilityDelete}/>}
        {visibleDetails && <DetalhesProduto 
          produto={editableProduct}
          labels={labels}
          toggleVisibilityDetails={toggleVisibilityDetails}/>}
      </div>
    </div>
  );
}

export default Produtos;
