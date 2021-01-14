import logo from './logo.svg';
import './App.css';
import AlpacasView from './components/AlpacasView';
import ContactComp from './components/ContactComp';
import AboutComp from './components/AboutComp';

function App() {
  return (
    <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light ">
        <a href="#" className="navbar-brand text-primary">ALPACABOOK</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto w-100 d-flex">
                <li className="nav-item">
                    <a className="nav-link" id="open-about" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" id="open-contact">Contact</a>
                  </li>
                  <li className="nav-item ml-md-auto ml-sm-auto-0">
                    <a className="nav-link" href="#">Signup</a>
                  </li>
            </ul>
        </div>
    </nav>
    <div id="content" className="container ">
      <AlpacasView/>
{/*     
      <ContactComp/>
      <AboutComp/> */}
      </div>
    </div>
  );
}

export default App;
