import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Heading from "./ui/Heading";
import Button from "./ui/Button";

function App() {
  return (
    <>
      <GlobalStyles />
      <Heading>Hello World</Heading>
      <Button size="small" variation="danger">
        Check
      </Button>
    </>
  );
}

export default App;
