import { Home } from "./components/Home";
import { Todos } from "./components/Todos";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { EditTodo } from "./components/EditTodo";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/todo" element={<Todos />}></Route>
        <Route path="/edit/:id" element={<EditTodo />}></Route>
      </Routes>
    </div>
  );
}
