import "@fortawesome/fontawesome-free/css/all.min.css";
import "tailwindcss/tailwind.css";

// todo: you must install the FontAwesome by Command " npm install --save @fortawesome/fontawesome-free"
// todo : install tailwind by command "npm install tailwindcss@^1"
// todo : make the tailwind config file alongside with postcss config file by command "npx tailwindcss init -p"
//* todo: you can import any icon in any component !
import Content from "./components/Content";
import Sidebar from "./components/sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="overflow-y-auto flex-grow ">
        <Navbar />
        <hr className="border-blue-500 my-4 hover:border-blue-700 ml-64" />
        <Content />
      </div>
    </div>
  );
}

export default App;
