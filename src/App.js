import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap'


function App() {
  return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/2364086?v=4/50px50" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
  );
}

export default App;
