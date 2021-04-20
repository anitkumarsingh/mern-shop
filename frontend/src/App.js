import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from 'react-bootstrap';
import './App.css';

const App = () =>{
  return (
    < >
    <Header/>
      <Container>
        <main className="main-header py-3">
          <h1>Welocome to Mern-ProShop</h1>
        </main>
      </Container>
    <Footer/>
    </>
  );
}

export default App;
