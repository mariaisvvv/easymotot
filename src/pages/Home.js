import Layout from "../components/Layout"
import { produtosList } from "./Produtos/Dados"
import Produtocard from "../components/Produtocard"

const Home = () => {
  console.log(produtosList[0]);

  return (
    <>
      <div className="home-background">
        <Layout />
        <h1>EasyMoto Home</h1>
        <h4>Usufrui dos teus sonhos em segurança</h4>
      </div>
      <div className="home-products">
        {produtosList
          .sort((a, b) => b.quantidade - a.quantidade).slice(0,4).map((produto) => (
          <Produtocard  key={produto.id} produto={produto}/>
        ))}
      </div>
    </>
  )
}

export default Home
