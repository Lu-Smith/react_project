import { Nav, Logo, Wrapper } from "./styles/App.styled";
import Category from './components/Category';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search';
import { GiKnifeFork } from "react-icons/gi";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Wrapper>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>YumYum</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
       </Wrapper>
       <Footer />
      </BrowserRouter>
    </div>
  );
}




export default App;
