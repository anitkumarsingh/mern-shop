import Header from './components/Blocks/Header';
import Footer from './components/Blocks/Footer';
import {Container} from 'react-bootstrap';
import Products from './components/Home/Products/Index';
import './styles/App.css';

const App = () =>{
  return (
    < >
    <Header/>
      <Container>
        <main className="main-header py-3">
        <h1>Latest Products</h1>
          <Products/>
        </main>
      </Container>
    <Footer/>
    </>
  );
}

export default App;
