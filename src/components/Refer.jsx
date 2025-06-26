import React, { useRef } from "react";

const Refer = () => {
  const inputInfo = useRef();
  const handleFocus = function () {
    inputInfo.current.focus();
  };
  return (
    <div>
      <p>{}</p>

      <input type="text" ref={inputInfo} />
      <button onClick={handleFocus}>Click</button>
    </div>
  );
};

export default Refer;
