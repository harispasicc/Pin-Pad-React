import React, { useEffect, useState } from "react";

const pin = "1234";

function PinPad() {
  const [userPin, setUserPin] = useState("");
  const [okMessage, setOkMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [lockedMessage, setLockedMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  const [count, setCount] = useState(0);
  const [countdownMsg, setCountdownMsg] = useState(false);

  const handlerValueChange = event => {
    if (userPin.length > 3) {
      return;
    }
    setUserPin(userPin.concat(event.target.name));
  };

  useEffect(() => {
    if (count === 3) {
      setErrorMessage(false);
      setLockedMessage("LOCKED");
      setDisabledButton(true);
      setCountdownMsg(true);
      setUserPin("");
      setDisabled(true);
      setCount(count);

      setTimeout(() => {
        setDisabledButton(false);
        setCountdownMsg(false);
      }, 30000);
      setCount(0);
    }
  }, [count]);

  const enterHandler = () => {
    if (pin === userPin) {
      setOkMessage("OK");
      setUserPin("");
      setCount(0);
      setDisabled(true);
    } else {
      setErrorMessage("ERROR");
      setUserPin("");
      setDisabled(true);
      setLockedMessage(false);
      setOkMessage(false);
      setCount(count + 1);
    }

    setTimeout(() => {
      setOkMessage("");
      setDisabled(false);
      setUserPin("");
      setErrorMessage("");
      setDisabled(false);
      setLockedMessage("");
      setDisabled(false);
    }, 3000);
  };

  const clearHandler = () => {
    setUserPin("");
    setErrorMessage("");
    setOkMessage("");
    setLockedMessage("");
    setCount(count);
    setDisabled(false);
  };

  return (
    <div className="title">
      <h1>Pin Pad</h1>
      {countdownMsg && <p>Application will be LOCKED for 30s</p>}{" "}
      <div className="container">
        <form className="output">
          {!disabled && (
            <input
              onChange={handlerValueChange}
              className="output"
              type="password"
              value={userPin}
              maxLength={4}
            />
          )}
          {okMessage && <p className="bg-ok">{okMessage}</p>}
          {errorMessage && <p className="bg-error">{errorMessage}</p>}
          {lockedMessage && <p className="bg-locked">{lockedMessage}</p>}
        </form>
        <button name="1" disabled={disabledButton} onClick={handlerValueChange}>
          1
        </button>
        <button name="2" disabled={disabledButton} onClick={handlerValueChange}>
          2
        </button>
        <button name="3" disabled={disabledButton} onClick={handlerValueChange}>
          3
        </button>
        <button name="4" disabled={disabledButton} onClick={handlerValueChange}>
          4
        </button>
        <button name="5" disabled={disabledButton} onClick={handlerValueChange}>
          5
        </button>
        <button name="6" disabled={disabledButton} onClick={handlerValueChange}>
          6
        </button>
        <button name="7" disabled={disabledButton} onClick={handlerValueChange}>
          7
        </button>
        <button name="8" disabled={disabledButton} onClick={handlerValueChange}>
          8
        </button>
        <button name="9" disabled={disabledButton} onClick={handlerValueChange}>
          9
        </button>
        <button disabled={disabledButton} onClick={clearHandler}>
          clear
        </button>

        <button name="0" disabled={disabledButton} onClick={handlerValueChange}>
          0
        </button>

        <button disabled={disabledButton} onClick={enterHandler} type="submit">
          enter
        </button>
      </div>
    </div>
  );
}

export default PinPad;
