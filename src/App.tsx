import { Routes, Route } from "react-router-dom";
import {AxiosFetch, Fetch} from "src/components/screens/DataFetching";


function App() {

  return (
    <Routes>
      <Route path="/" element={<AxiosFetch />} />
      <Route path="/fetch" element={<Fetch />} />
    </Routes>
  );
}

export default App;
