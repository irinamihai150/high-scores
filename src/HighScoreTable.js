import React from "react";
import allCountryScores from "./scores";
const HighScoreTable = () => {
  return (
    <div className="container">
      <h3>High Scores per country:</h3>
      {allCountryScores.map(({ name, scores }, key) => {
        allCountryScores.sort(function (a, b) {
          if (a.name <= b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        return (
          <table className="table">
            <thead>
              <tr>
                <th>High scores: {name}</th>
              </tr>
            </thead>
            <tbody>
              {scores.map(({ n, s }) => {
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
