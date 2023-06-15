import React from 'react';
import Button from 'react-bootstrap/Button';

const Header = ({textTitle, textBtn, toggleVisibilityCreate}) => {
  return (
    <div>
        <h1>{textTitle}</h1>
        <Button variant="primary" onClick={toggleVisibilityCreate}>{textBtn}</Button>
    </div>
  )
}

export default Header
