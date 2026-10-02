import "./App.css";
import ResortContainer from"./Components/ResortContainer.tsx";
import listings from "./data/data";

function App() {
  return( 
    <>
  
      <h1>Resorts Lite</h1>
      <ResortContainer listings = {listings}/>
  
    </>
  );
}

export default App;
