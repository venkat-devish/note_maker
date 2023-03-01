import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home, NewNote } from "./pages";

function App() {
  return (
    <Container className="my-4">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewNote />} />
          <Route path="/:id">
            <Route index element={<Home />} />
            <Route path="edit" element={<Home />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
