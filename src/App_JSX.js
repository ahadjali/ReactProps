import logo from './logo.svg';
import './App.css';
import Student from './Student';
import Instructor from './Instructor';

function App() {
  let firstName = "moez";
  const withHo = (name) => {
    return name.toUpperCase()
  };

  // const pickBorder = () => {
  //   return firstName === "Anis" ? "1px solid black" : "1px solid white";
  // };

  const pickBorder = () => {
    if (firstName === "Anis") {
      return "1px solid black";
    } else {
      return "1px solid white";
    }
  };

  const innerButton = () => {
    switch (firstName) {
      case "Anis":
        return "Start Now";
      case "Emna":
        return "Start Tomorrow";
      case "Moez":
        return "Start Next Month";
      default:
        return "Exit";
    }
  }


  return (
    <div className="App" colSpan="5" style={{ color: "red", }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="green-box" />
        {firstName === "Anis" ? <Student /> : <Instructor />}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with {firstName}
          <br />
          sss {withHo("Jad")}
          <br />
          <button
            style={{ border: pickBorder }}
            className={firstName === "Anis" ? "classe-anis" : "classe-moez"}
          >
            {innerButton()}
          </button>
        </a>
      </header>
    </div>
  );
}

export default App;
