import React, { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Layout from '../components/Layout'
import { produtosList, icons, labels } from './Produtos/Dados'
import Produtocard from '../components/Produtocard';
import FiltrosProduto from '../components/FiltrosProduto';

const Produtos2 = () => {
  const [atualCategory, setActualCategory] = useState('top')
  const [filteredProdutos, setFilteredProdutos] = useState([])

  useEffect(() => {
    setFilteredProdutos([])
    const filtered = produtosList.filter((produto) => produto.categoria === atualCategory);
    setFilteredProdutos(filtered)
  }, [atualCategory]);

  const convertToUpper = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)

  };
  

  const showCategory = (categoryId) => {
    switch(categoryId){
      case 1: setActualCategory('botas')
      break
      case 2: setActualCategory('luvas')
      break
      case 3: setActualCategory('capacetes')
      break
      case 4: setActualCategory('casacos')
      break
      case 5: setActualCategory('calcas')
      break
      default: setActualCategory('top')
    }
  }

  return (
    <div>
      <Layout />
        <div >
          <Container  fluid className='icon-container'>
            <Row className="justify-content-md-center">
              {icons.map((icon) => (
                <Col key={icon.id} xs='2' md='2' lg="1">
                  <Image className='icons' src={icon.src} onClick={() => showCategory(icon.id)}/>
                </Col>
              ))}
            </Row>
          </Container>
          <div>
            <FiltrosProduto categoria={convertToUpper(atualCategory)} labels={labels}/>
          </div>
          <div className="home-products">
            {filteredProdutos.map((produto) => (<Produtocard key={produto.id} produto={produto}/>))}
          </div>
        </div>
        
    </div>
  )
}

export default Produtos2
