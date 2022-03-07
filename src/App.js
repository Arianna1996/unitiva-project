import Header from "./components/Layout/Header";
import MainSection from "./components/Layout/MainSection";
import Footer from "./components/Layout/Footer";
import GlobalStyles from "./components/GlobalStyles.style";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header></Header>
      <MainSection></MainSection>
      <Footer></Footer>
    </>
  );
}

export default App;
