import "./App.css";
import Navbar from "./component/header/Navbar";
import Content from "./component/section/Content";
import Picture from "./component/second_section/Picture";


function App() {
  return (
    <>
    <Navbar/>
    <div className="main_content">
    <Content/>
    <Picture  src="../ContentPic/shoes.png"/>
    </div>
    </>
  );
}

export default App;
