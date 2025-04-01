import Button from "./components/button";

import "./app.css";

import logo from "./assets/images/logo.jpg";

const App = () => {
  const website = "http://lamicro.ddns.net:8181/web_laudos/login.asp";

  return (
    <div className="wrapper">
      <img src={logo} alt="Logo" />

      <Button onClick={() => window.open(website)}>Resultados de exames</Button>
    </div>
  );
};

export default App;
