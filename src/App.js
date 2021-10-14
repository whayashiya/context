import React from "react";
import { AuthContext } from "./providers/auth";
import { ThemeContext } from "./providers/theme";
import './styles/styles.css';

function App() {
  const { user, setUser } = React.useContext(AuthContext);

  const {rucas, setRucas} = React.useContext(AuthContext);

  const {theme, setTheme} = React.useContext(ThemeContext);

  return (
    <div className={theme.color}>
      <h1>Olá Mundo, { user.name } é { rucas.bonito } </h1>
      <input type="text" onChange={(e) => setUser({name: e.target.value})}  />
      <input type="text" onChange={(e) => setRucas({bonito: e.target.value})}  />      

      <button onClick={(e) => theme.color === 'White' ? setTheme({ color: 'Dark'}) : setTheme({ color: 'White'}) } >Tema</button>
    </div>
  );
}

export default App;
