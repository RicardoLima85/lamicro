import Button from "./components/button";

import "./app.css";

import logo from "./assets/images/logo.jpg";

const App = () => {
  const website = "http://lamicro.ddns.net:8181/web_laudos/login.asp";

  return (
    <div className="wrapper">
      <img src={logo} alt="Logo" />

      <Button onClick={() => window.open(website)}>Resultados de exames</Button>

      <div className="contact-info">
        <p>Endereço: Av. Frei Benjamin, 1620 - Brasil, Vitória da Conquista - BA, 45051-440</p>
        <p>Telefone: (77) 98155-3591</p>
      </div>
    </div>
  );
};

export default App;
