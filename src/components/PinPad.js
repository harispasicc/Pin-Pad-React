import React, { useState } from "react";

function PinPad() {
  const [pin, setPin] = useState("1234");
  const [userPin, setUserPin] = useState("");
  const [okMessage, setOkMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [lockedMessage, setLockedMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  const [disabledClear, setDisabledClear] = useState(false);
  const [count, setCount] = useState(1);

  const handlerValueChange = event => {
    if (userPin.length > 3) {
      setDisabledButton(true);
      return;
    }
    setUserPin(userPin.concat(event.target.name));

    console.log(userPin);
  };

  const enterHandler = () => {
    if (pin === userPin) {
      setOkMessage("OK");
      setDisabled(true);
    } else {
      setErrorMessage("ERROR");
      setDisabled(true);
      setLockedMessage(false);
      setOkMessage(false);
    }

    if (count === 3) {
      setErrorMessage(false);
      setLockedMessage("LOCKED");
      setDisabled(true);
      setDisabledButton(true);
      setDisabledClear(true);
      alert("After 30 seconds you can clear and continue!");

      return;
    }

    setCount(count + 1);
  };

  const clearHandler = () => {
    setUserPin("");
    setErrorMessage("");
    setOkMessage("");
    setLockedMessage("");
    setCount(1);
    setDisabled(false);
  };

  setTimeout(() => {
    setDisabledButton(false);
  }, 40000);

  setTimeout(() => {
    setOkMessage("");
    setDisabled(false);
    setErrorMessage("");
    setDisabled(false);
    setLockedMessage("");
    setDisabled(false);
  }, 5000);

  return (
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
      {/* <p>{count}</p> */}
    </div>
  );
}

export default PinPad;
