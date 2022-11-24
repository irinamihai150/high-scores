import React, { useState } from "react";
import PlayerScore from "./PlayerScore";
import allCountryScores from "./Scores";

allCountryScores.sort(function (a, b) {
  if (a.name <= b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});
allCountryScores.forEach((country) => country.scores.sort((a, b) => b.s - a.s));

const HighScoreTable = () => {
  const [scores, setScores] = useState(allCountryScores);
  const [isAscending, setIsAscending] = useState(false);

  function handleClick() {
    if (isAscending === false) {
      setScores(
        scores.map((country) => {
          return {
            name: country.name,
            scores: country.scores.sort((a, b) => a.s - b.s),
          };
        })
      );
      setIsAscending(true);
    } else {
      setScores(
        scores.map((country) => {
          return {
            name: country.name,
            scores: country.scores.sort((a, b) => b.s - a.s),
          };
        })
      );
      setIsAscending (false);
    }
    console.log(isAscending);
  }

  return (
    <div className="container">
      <h3>High Scores per country:</h3>
      <button onClick={handleClick}>Click</button>
      {scores.map(({ name, scores }) => {
        return (
          <table className="table">
            <thead>
              <tr>
                <th>High scores: {name}</th>
              </tr>
            </thead>
            <PlayerScore scores={scores} />
          </table>
        );
      })}
    </div>
  );
};

export default HighScoreTable;
