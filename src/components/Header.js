import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Header = ({textTitle, textBtn, handleCriarProduto}) => {
  return (
    <div>
        <h1>{textTitle}</h1>
        <Link to="/criar-produto">
          <Button variant="primary" onClick={() => handleCriarProduto}>{textBtn}</Button>
        </Link>
    </div>
  )
}

export default Header
