import React from "react";

function Tickler() {
  function tickle(event) {
    console.log(event);
  }

  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;

// function Tickler() {
//   return <button onClick={() => console.log("hi")}>Tickle me!</button>;
// }
