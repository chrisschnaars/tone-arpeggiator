import styled from "styled-components";
import Header from "../components/Header";
import Sequencer from "./Sequencer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Sequencer />
    </Wrapper>
  );
}

export default App;
