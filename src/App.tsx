import {Outlet} from "react-router-dom";
import "./App.css";

export function App(): React.JSX.Element { 
  return (
    <main className="app">
      <h1>Fil d'actualité XYZ</h1>
      <Outlet/>
    </main>
  );
}

export default App;
