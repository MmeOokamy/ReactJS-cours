import './App.css';
import { Container, Col, Row } from 'react-bootstrap';
import HelloWorld from './HelloWorld'

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-4 text-center" >To Do List</h1>
          <HelloWorld />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
