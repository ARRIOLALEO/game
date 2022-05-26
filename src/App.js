import "./App.css";
import { useEffect } from "react";
import {Route, Routes} from "react-router-dom"
import MainPage from "./components/MainPage";
import { useDispatch } from "react-redux";
import Play from "./components/Play";
import Statistics from "./components/Statistics";
import { callTheApi } from "./redux/QuestionsSlice";
function App() {
  useEffect(() => {
    dispatch(callTheApi());
  }, []);
    
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/play" element={<Play />}></Route>
        <Route path="/statistics" element={<Statistics />}></Route>
      </Routes>
    </div>
  );
}

export default App;
