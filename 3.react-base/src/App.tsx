
import Card from './components/Card'
import Header from './components/Header'
import Layout from './components/Layout'

function App() {


  return (
    <>
      <Header></Header>
      
      <Layout>
        <Layout.Left>Contenu Gauche</Layout.Left>
        <Layout.Right>
          Contenu Droite
          <Card>
            <Card.Header> Card Header</Card.Header>
            <Card.Content> Card Content</Card.Content>
          </Card>  
        </Layout.Right>
      </Layout>
    </>
  )
}

export default App
