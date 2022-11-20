import React from "react";
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
            <tbody>
              {scores.map(({ n, s }) => {
              scores.sort((a, b) =>
                a.s < b.s ? 1 : b.s < a.s ? -1 : 0
              );
                return (
                  <tr className="wrap">
                    <td className="player-name">
                      {n} {s}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default HighScoreTable;
