import React from "react";
import PlayerScore from "./PlayerScore";
import allCountryScores from "./scores";

allCountryScores.sort(function (a, b) {
  if (a.name <= b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});

const HighScoreTable = () => {
  return (
    <div className="container">
      <h3>High Scores per country:</h3>
      {allCountryScores.map(({ name, scores }) => {
        return (
          <table className="table">
            <thead>
              <tr>
                <th>High scores: {name}</th>
              </tr>
            </thead>
                <PlayerScore scores= {scores}/>
          </table>
        );
      })}
    </div>
  );
};

export default HighScoreTable;
