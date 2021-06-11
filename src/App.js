import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import Score from './Components/Score/Score';
import Lifes from './Components/Life/Life';

import './index.css';

function App() {

  const films = [
    {
      id: 0,
      title: "kung fu panda",
      emogi: "💥🐼👊"
    },
    {
      id: 1,
      title: "titanic",
      emogi: "🛳️👩‍❤️‍💋‍👨🗻⬇️"
    },
    {
      id: 2,
      title: "fast and furious",
      emogi: "🚗💨😡"
    }
  ];

  const [nameFilm, setNameFilm] = useState("");
  const [filmeEmogi, setFilmeEmogi] = useState(films[0]);
  const [score, setScore] = useState(0);
  const [life, setLife] = useState(3);

  const handleChange = (e) => {
    setNameFilm(e.target.value);
  };

  const check = () => {
    if (nameFilm === filmeEmogi.title) {
      setScore(score + 1);
      return setNameFilm("");
    }
    setLife(life - 1);
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Wrong name',
        showConfirmButton: false,
        timer: 1000
    });
  }

  useEffect(() => {
    if (score == 3) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '🥳 ¡Won! 🥳',
        showConfirmButton: false,
        timer: 1500
      });
      setScore(0);
      return setLife(3);
    }

    if (life == 0) {
      Swal.fire({
        icon: 'error',
        title: 'You lost ☹️',
      });
      setLife(3);
    }

    setFilmeEmogi(films[score]);

  }, [life, score])

  return (
    <div className="app">
      <header>
        <h1>guess the movie</h1>
      </header>
      <article className="box-emogi">
        <span>{filmeEmogi.emogi}</span>
      </article>
      <article className="box-input">
        <input type="text" onChange={handleChange} value={nameFilm} placeholder="write the name of the movie"/>
        <button onClick={check}>verificar</button>
      </article>
      <article className="box-accountant">
        <Lifes life={life} />
        <Score score={score} />
      </article>

    </div>
  );
}

export default App;
