import React, { useState } from "react";

function PinPad() {
  const [pin, setPin] = useState("1234");
  const [userPin, setUserPin] = useState("");
  const [okMessage, setOkMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [lockedMessage, setLockedMessage] = useState("");
  const [waitMessage, setWaitMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  const [count, setCount] = useState(0);

  const handlerValueChange = e => {
    setUserPin(e.target.value);
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

    if (count === 2) {
      setErrorMessage(false);
      setLockedMessage("LOCKED");
      setDisabled(true);
      setDisabledButton(true);
    } else {
      setWaitMessage("Wait for 30s");
      setDisabled(true);
    }

    setCount(count + 1);
  };

  const clearHandler = () => {
    setUserPin("");
    setErrorMessage("");
    setOkMessage("");
    setLockedMessage("");
    setCount(0);
    setDisabled(false);
  };

  setTimeout(() => {
    setDisabledButton(false);
  }, 30000);

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
      <div className="output">
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
      </div>
      <button
        disabled={disabledButton}
        id="display"
        onClick={() => setUserPin(userPin => `${userPin}1`)}
      >
        1
      </button>
      <button
        disabled={disabledButton}
        onClick={() => setUserPin(userPin => `${userPin}2`)}
      >
        2
      </button>
      <button
        disabled={disabledButton}
        onClick={() => setUserPin(userPin => `${userPin}3`)}
      >
        3
      </button>
      <button
        disabled={disabledButton}
        onClick={() => setUserPin(userPin => `${userPin}4`)}
      >
        4
      </button>
      <button
        disabled={disabledButton}
        onClick={() => setUserPin(userPin => `${userPin}5`)}
      >
        5
      </button>
      <button
        disabled={disabledButton}
        onClick={() => setUserPin(userPin => `${userPin}6`)}
      >
        6
      </button>
      <button
        disabled={disabledButton}
        onClick={() => setUserPin(userPin => `${userPin}7`)}
      >
        7
      </button>
      <button
        disabled={disabledButton}
        onClick={() => setUserPin(userPin => `${userPin}8`)}
      >
        8
      </button>
      <button
        disabled={disabledButton}
        onClick={() => setUserPin(userPin => `${userPin}9`)}
      >
        9
      </button>
      <button disabled={disabledButton} onClick={clearHandler}>
        clear
      </button>
      <button
        disabled={disabledButton}
        onClick={() => setUserPin(userPin => `${userPin}9`)}
      >
        0
      </button>
      <button disabled={disabledButton} onClick={enterHandler} type="submit">
        enter
      </button>
      <p>{count}</p>
    </div>
  );
}

export default PinPad;
