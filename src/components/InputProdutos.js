import React from 'react'
import Form from 'react-bootstrap/Form';

const InputProdutos = ({label, placeholder, name, value, onChange}) => {
  return (
 
    <Form.Group>
        <Form.Label className='bold-text'>{label}</Form.Label>
        <Form.Control placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}/>
    </Form.Group>
      

  )
}

export default InputProdutos
