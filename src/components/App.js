import React, { useEffect, useState } from "react";
import "../App.css";
import "../Assets/css/bootstrap.min.css";

function App() {
  const [first, setFirst] = useState("");
  const [operator, setOperator] = useState("");
  const [second, setSecond] = useState("");
  const [result, setResult] = useState("");

  const handleOperate = (e) => {
    !operator
      ? setOperator(e)
      : !second
      ? setOperator(e)
      : setFirst(result) || setSecond("") || setResult("");
  };

  const handleEqual = () => {
    switch (operator) {
      case "/":
        setResult(parseInt(first / second));
        break;
      case "x":
        setResult(parseInt(first * second));
        break;
      case "-":
        setResult(parseInt(first - second));
        break;
      case "+":
        setResult(parseInt(first + second));
        break;
      default:
        setResult("");
        break;
    }
  };

  const handleSetNumber = (n) => {
    if (!second) operator ? setSecond(n) : setFirst(n);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              height: "18rem",
              width: "15rem",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              backgroundColor: "white",
            }}
            className="row"
          >
            <div class="input-group mb-2">
              <input
                type="text"
                class="form-control"
                value={result.length >= 0 ? (!second ? first : second) : result}
              />
            </div>

            <div
              className="containerButtonCalc"
              style={{ marginBottom: "50px" }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ margin: "5px" }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleSetNumber(7)}
                  >
                    7
                  </button>
                </div>
                <div style={{ margin: "5px" }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleSetNumber(8)}
                  >
                    8
                  </button>
                </div>
                <div style={{ margin: "5px" }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleSetNumber(9)}
                  >
                    9
                  </button>
                </div>
                <div style={{ margin: "5px" }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleOperate("/")}
                  >
                    /
                  </button>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ margin: "5px" }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleSetNumber(4)}
                  >
                    4
                  </button>
                </div>
                <div style={{ margin: "5px" }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleSetNumber(5)}
                  >
                    5
                  </button>
                </div>
                <div style={{ margin: "5px" }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleSetNumber(6)}
                  >
                    6
                  </button>
                </div>
                <div style={{ margin: "5px" }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleOperate("x")}
                  >
                    x
                  </button>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ margin: "5px" }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleSetNumber(1)}
                  >
                    1
                  </button>
                </div>
                <div style={{ margin: "5px" }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleSetNumber(2)}
                  >
                    2
                  </button>
                </div>
                <div style={{ margin: "5px" }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleSetNumber(3)}
                  >
                    3
                  </button>
                </div>
                <div style={{ margin: "5px" }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleOperate("-")}
                  >
                    -
                  </button>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ margin: "2px" }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleSetNumber(0)}
                  >
                    0
                  </button>
                </div>
                <div style={{ margin: "2px" }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEqual()}
                  >
                    =
                  </button>
                </div>
                <div style={{ margin: "2px" }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleOperate("+")}
                  >
                    +
                  </button>
                </div>
                <div style={{ margin: "2px" }}>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      setFirst("") ||
                      setSecond("") ||
                      setResult("") ||
                      setOperator("")
                    }
                  >
                    AC
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
