import DayList from "./component/DayList";
import Header from "./component/Header";
import WordList from "./component/WordList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateWord from "./component/CreateWord";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<WordList />} />
          <Route path="/create_word" element={<CreateWord />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
