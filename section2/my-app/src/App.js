import "./App.css";
import Button1 from "./conponent/Button/Button";

function App() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-blue-500">
          Hello, Tailwind CSS!
        </h1>
      </div>
      <div>
        <Button1 />
      </div>
    </div>
  );
}

export default App;
