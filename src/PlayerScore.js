import React from "react";


export default function PlayerScore({ scores }) {
  return (
      <tbody>
        {scores
          .sort((a, b) => b.s - a.s)
          .map(({ n, s }) => {
            return (
              <tr className="wrap">
                <td className="player-name">
                  {n} {s}
                </td>
              </tr>
            );
          })}
      </tbody>
  );
}
