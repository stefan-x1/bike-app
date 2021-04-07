import "./App.css";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import MainSection from "./components/MainSection/MainSection";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <hr/>
      <Title title='Bikes' />
      <hr/>
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
