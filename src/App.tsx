import Container from "components/Container/Container";
import Header from "components/Header/Header";
import SearchForm from "components/SearchForm/SearchForm";

function App() {
  return (
    <Container>
      <Header />
      <SearchForm
        isError
        onSubmit={(text) => {
          console.log(text);
        }}
      />
    </Container>
  );
}

export default App;
