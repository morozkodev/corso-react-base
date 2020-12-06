//import './App.css';

import TabellaRicerca from './components/tabella-ricerca/TabellaRicerca';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>tabella dati filtrati</h1>
          <TabellaRicerca utenti={Utenti}/>
      </header>      
      <br/><br/><br/>
    </div>
  );
}

export default App;
const Utenti = [
  { id: 1, nome: 'Alan', cognome: 'Turin', categoria: 'admin', attivo: 1 },
  { id: 2, nome: 'Marie', cognome: 'Curie', categoria: 'admin', attivo: 1 },
  { id: 3, nome: 'Margherita', cognome: 'Hack', categoria: 'admin', attivo: 1 },
  { id: 4, nome: 'Leonardo', cognome: 'Da Vinci', categoria: 'utenti', attivo: 1 },
  { id: 5, nome: 'Linus', cognome: 'Torvalds', categoria: 'utenti', attivo: 1 },
  { id: 6, nome: 'Richard', cognome: 'Stallman', categoria: 'utenti', attivo: 0 },
  { id: 7, nome: 'Francis', cognome: 'Bacon', categoria: 'utenti', attivo: 0 },
  { id: 8, nome: 'Archimede', cognome: 'Di Siracusa', categoria: 'utenti', attivo: 1 },
];