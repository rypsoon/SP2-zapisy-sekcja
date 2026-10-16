import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const sekcje = ['Piłka nożna', 'Szachy', 'Robotyka', 'Pływanie'];

  const [imieNazwisko, setImieNazwisko] = useState('');
  const [numerSekcji, setNumerSekcji] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(imieNazwisko);

    const numer = parseInt(numerSekcji, 10);
    if (numer >= 1 && numer <= sekcje.length) {
      console.log(sekcje[numer - 1]);
    } else {
      console.log('Nieprawidłowy numer sekcji');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Liczba sekcji: {sekcje.length}</h2>

      <ol>
        {sekcje.map((sekcja, index) => (
          <li key={index}>{sekcja}</li>
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="imieNazwisko" className="form-label">
            Imię i nazwisko:
          </label>
          <input
            type="text"
            className="form-control"
            id="imieNazwisko"
            value={imieNazwisko}
            onChange={(e) => setImieNazwisko(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="numerSekcji" className="form-label">
            Numer sekcji:
          </label>
          <input
            type="number"
            className="form-control"
            id="numerSekcji"
            value={numerSekcji}
            onChange={(e) => setNumerSekcji(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Zapisz
        </button>
      </form>
    </div>
  );
}

export default App;