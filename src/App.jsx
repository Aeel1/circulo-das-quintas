import React, { useState } from "react";
import "./App.css";
import circuloImage from "./assets/circulo.png";

const SCALES = {
  C: ["C", "D", "E", "F", "G", "A", "B"],
  G: ["G", "A", "B", "C", "D", "E", "F#"],
  D: ["D", "E", "F#", "G", "A", "B", "C#"],
  A: ["A", "B", "C#", "D", "E", "F#", "G#"],
  E: ["E", "F#", "G#", "A", "B", "C#", "D#"],
  B: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
  F: ["F", "G", "A", "Bb", "C", "D", "E"],
  Bb: ["Bb", "C", "D", "Eb", "F", "G", "A"],
  Eb: ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
  Ab: ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
  Db: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
  Gb: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
};

const App = () => {
  const [note, setNote] = useState(null);
  const [inputs, setInputs] = useState(Array(7).fill(""));
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleGenerateNote = () => {
    const notes = Object.keys(SCALES);
    const randomNote = notes[Math.floor(Math.random() * notes.length)];
    setNote(randomNote);
    setInputs(Array(7).fill(""));
    setIsButtonDisabled(true);
  };

  const handleInputChange = (index, value) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;
    setInputs(updatedInputs);

    if (
      updatedInputs.every(
        (input, i) => input.toUpperCase() === SCALES[note][i].toUpperCase()
      )
    ) {
      setIsButtonDisabled(false);
    }
  };

  return (
    <div className="app-container">
      <div className="music-icon">🎵</div>
      <p className="title">
        Estudo da Escala Maior
      </p>
      <p>
        Clique para gerar uma nota aleatória do Círculo das 5ª
      </p>
      <div className="button-container">
        <button onClick={handleGenerateNote} disabled={isButtonDisabled}>
          Gerar Nota
        </button>
      </div>
      <p className="example-text">
        Exemplo de preenchimento: C, C#, Cb
      </p>
      {note && (
        <>
          <p className="note-selected">Nota Selecionada: {note}</p>
          <div className="inputs">
            {inputs.map((value, index) => (
              <div className="input-group" key={index}>
                <label className="input-label">
                  {["1º Grau", "2ª Maior", "3ª Menor", "4ª Justa", "5ª Justa", "6ª Maior", "7ª Maior"][index]}
                </label>
                <input
                  type="text"
                  value={value}
                  onChange={(e) =>
                    handleInputChange(index, e.target.value.toUpperCase())
                  }
                />
              </div>
            ))}
          </div>
        </>
      )}
      <div className="circulo-container">
        <img src={circuloImage} alt="Círculo das Quintas" />
        <p>
          A expressão ciclo das quintas corresponde a uma sucessão de notas
          musicais que são distanciadas por intervalos. De forma mais clara e
          resumida, esse conceito se aplica em determinadas circunstâncias onde
          existe a necessidade de se formar escalas maiores e armaduras de
          clave.
        </p>
      </div>
    </div>
  );
};

export default App;
