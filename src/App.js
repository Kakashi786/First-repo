import React, { useEffect, useState } from "react";

function App() {
  const [arr, setArr] = useState([]);
  const B = ["Apple", "orange", "pineAapple", "Guavava", "Apple Good"];

  useEffect(() => {
    setArr(B);
  }, []);

  const X = (e) => {
    let a = e.target.value;
    let k = B.filter((ele, index) => {
      var replace = `${a}`;
      var re = new RegExp(replace, "g");

      if (ele.match(re)) {
        return true;
      }
      return false;
    });
    console.log(k);
    setArr(k);
  };

  return (
    <>
      <h1>list</h1>
      <input type={"text"} onChange={X} />
      <ol>
        {arr.map((x) => {
          return <li>{x}</li>;
        })}
      </ol>
    </>
  );
}

export default App;
