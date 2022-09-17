import DayList from "./component/DayList";
import Header from "./component/Header";
import WordList from "./component/WordList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/word/:day" element={<WordList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
