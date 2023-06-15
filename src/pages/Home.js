import Layout from "../components/Layout"
import { produtosList } from "./Produtos/Dados"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
  console.log(produtosList[0]);

  const orderShowed = () => {

  }

  return (
    <>
      <div className="home-background">
        <Layout />
        <h1>EasyMoto Home</h1>
        <h4>Usufrui dos teus sonhos em segurança</h4>
      </div>
      <div className="home-products">
        {produtosList
          .sort((a, b) => b.quantidade - a.quantidade) 
          .slice(0, 5) 
          .map((produto) => (
          <Card className="home-product-card" key={produto.id}>
            <div className="image-card">
              <Card.Img variant="top" src={produto.images}/>
            </div>
            <Card.Body>
              <Card.Title>{produto.preco}</Card.Title>
              <Card.Text className="truncate">
                {produto.nome}
              </Card.Text>
              <Button variant="primary">Ver Detalhes</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Home
