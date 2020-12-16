import './App.css';
import {
  Switch,
  Route,
  useLocation,
  useHistory
} from "react-router-dom";
import Page1 from './Page1';

function App() {

  const history = useHistory()


  const handleClick = (e) => {
    const expanders = document.querySelectorAll(".card-expander");
    const element = document.createElement("div")
    const body = document.querySelector(".App")
    

    element.className = "active"

    element.style.left = e.clientX + "px";
    element.style.top = e.clientY + "px";


    body.appendChild(element)

    window.requestAnimationFrame(() => {
      element.style.transform = "scale(5000)"
    })

    setTimeout(() => history.push("/page1"), 700)

  }

  const handleClose = () => {
    const element = document.querySelector(".active")
    const exit = document.querySelector(".exit")

    exit.style.opacity = 0;
    element.remove()

  }


  return (
    <div className="App">
      <Switch>


        <Route path="/page1" component={Page1}/>

        <Route path="/">
        {/* <div onClick={handleClose} className="exit">
        EXIT.
      </div> */}
      
      <div className="nav">
        <h1>Ben Taylor</h1>
        <ul>
          <li>hi.</li>
          <li>bye.</li>
          <li>surprise.</li>
        </ul>
      </div>


      <div className="cards">
        <div onClick={handleClick} className="card">
          <div data-id="1" className="card-expander"></div>
          <div className="card-content">
            <h1>card title</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quasi aut reprehenderit architecto dolorem dolorum consequatur ad voluptate vitae delectus?</p>
            <p>Learn more</p>
          </div>
        </div>

        <div onClick={handleClick} className="card">
          <div className="card-expander"></div>
          <div className="card-content">
            <h1>card title</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quasi aut reprehenderit architecto dolorem dolorum consequatur ad voluptate vitae delectus?</p>
            <p>Learn more</p>
          </div>
        </div>

        <div onClick={handleClick} className="card">
          <div className="card-expander"></div>
          <div className="card-content">
            <h1>card title</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quasi aut reprehenderit architecto dolorem dolorum consequatur ad voluptate vitae delectus?</p>
            <p>Learn more</p>
          </div>
        </div>

        <div onClick={handleClick} className="card">
          <div className="card-expander"></div>
          <div className="card-content">
            <h1>card title</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quasi aut reprehenderit architecto dolorem dolorum consequatur ad voluptate vitae delectus?</p>
            <p>Learn more</p>
          </div>
        </div>

        <div onClick={handleClick} className="card">
          <div className="card-expander"></div>
          <div className="card-content">
            <h1>card title</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quasi aut reprehenderit architecto dolorem dolorum consequatur ad voluptate vitae delectus?</p>
            <p>Learn more</p>
          </div>
        </div>
      </div>
        </Route>
      </Switch>

      
    </div>
  );
}

export default App;
