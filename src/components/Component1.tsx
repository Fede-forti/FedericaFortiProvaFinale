import React from "react";
import axios from "axios";
import { API_UTENTE } from "../api/api";

interface IUtente {
  idUtente: number;
  nome: string;
  cognome: string;
  eta: number;
  email: string;
  password: string;
}

const Component1 = () => {
  const [nome, setNome] = React.useState<string>("");
  const [cognome, setCognome] = React.useState<string>("");
  const [eta, setEta] = React.useState<number>(0);
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confermaPassword, setConfermaPassword] = React.useState<string>("");

  const handleValidazioneSringa = (
    e: React.ChangeEvent<HTMLInputElement>,
    set: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const value = e.target.value;

    const regex = /^[a-zA-Z\s]+$/;

    if (regex.test(value)) {
      set(value);
    } else {
      alert("Inserire solo lettere e spazi");
    }
  };

  const handleValidazionePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.includes(":")) {
      alert("Password non valida");
    } else {
      setPassword(e.target.value);
    }
  };

  const handleConfermaPassword = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (password !== confermaPassword) {
      alert("Le password non coincidono");
    } else {
      gestisciInserimento(e);
    }
  };

  function gestisciInserimento(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    
    const data: IUtente = {
      idUtente: 0,
      nome: nome,
      cognome: cognome,
      eta: eta,
      email: email,
      password: password,
    };
    axios
      .post(API_UTENTE, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <h1>Registrazione Utente</h1>
      <form >
        <label>Nome: </label><br/>
        <input type="text" value={nome} onChange={(e) => handleValidazioneSringa(e, setNome)}/><br/><br/>
        <label>Cognome: </label><br/>
        <input type="text" value={cognome} onChange={(e) => handleValidazioneSringa(e, setCognome)}/><br/><br/>
        <label>Età: </label><br/>
        <input type="number" min={18} step={1} value={eta} onChange={(e) => setEta(Number(e.currentTarget.value))}/><br/><br/>
        <label>Email: </label><br/>
        <input type="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)}/><br/><br/>
        <label>Password: </label><br/>
        <input type="password" value={password} onChange={(e) => handleValidazionePassword(e)}/><br/><br/>
        <label>Conferma Password: </label><br/>
        <input type="password" value={confermaPassword} onChange={(e) => setConfermaPassword(e.currentTarget.value)}/><br/><br/>
        <button onClick={(e) => handleConfermaPassword(e)}>Inserisci</button>
      </form>
    </>
  );
};

export default Component1;
