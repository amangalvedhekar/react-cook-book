import { Routes, Route } from "react-router-dom";
import {AxiosFetch, Fetch, SWRFetch} from "src/components/screens/DataFetching";


function App() {

  return (
    <Routes>
      <Route path="/" element={<AxiosFetch />} />
      <Route path="/fetch" element={<Fetch />} />
      <Route path="/swr" element={<SWRFetch />} />
    </Routes>
  );
}

export default App;
