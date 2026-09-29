import { Outlet } from "react-router-dom";
import "./App.css";

export function App(): React.JSX.Element {
  return (
    <main className="app">
      <header>
        <h1>Fil d'actualité XYZ</h1>
      </header>
      <Outlet />
    </main>
  );
}

export default App;
