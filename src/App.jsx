import styled from "styled-components";
import GlobaleStyle from "./styles/GlobalStyled";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  background-color: beige;
  padding: 20px;
`;

const App = () => {
  return (
    <>
      <GlobaleStyle />
      <StyledApp>
        <Row>
        <Row type="horizontal">
        <Heading type="h1">the wild bear</Heading>
          <div>
            
            <Button variations='primary' sizes='medium'>check in</Button>
            <Button variations='secoundary' sizes='medium'>check out</Button>
          </div>
        </Row>
        <Row>
          <Heading as="h3">the wild bear</Heading>
          <form>
            <Input type="number" placeholder="number of guest" />
            <Input type="number" placeholder="number of guest" />
          </form>
        </Row>
        </Row>
      </StyledApp>
    </>
  );
};

export default App;
