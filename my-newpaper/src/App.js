import logo from './logo.svg';
import './App.css';
import Pic1 from './article1';
import Pic2 from './article2';
import Pic3 from './article3';
import Pic4 from './article4';
import Pic5 from './article5';
import Pic6 from './article6';
import Nav from './nav';



function App() {
  return (
    <body>
      <Nav />
    <div className="App">

      <Pic1 url={"./images/photo1.jpg"} />
      <Pic2 url ={"./images/photo2.jpg"} />
      <Pic3 url ={"./images/photo3.jpg"} />
      <Pic4 url ={"./images/photo4.jpg"}/>
      <Pic5 url ={"./images/photo5.jpg"}/>
      <Pic6 url ={"./images/photo6.jpg"}/>

      </div>

      </body>

  );
 
}


export default App;
