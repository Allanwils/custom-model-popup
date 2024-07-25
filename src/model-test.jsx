import { useState } from "react";
import Model from "./model";
import './model.css';

function ModelTest() {
  const [showModelPopup, setShowModelPopup] = useState(false);

  const handleToggleModelPopup = () => {
    setShowModelPopup(!showModelPopup);
  };

  function onClose() {
    setShowModelPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModelPopup}>Open Model Popup</button>
      {showModelPopup && <Model onClose={onClose} body={<div>Customized Body</div>} />}
    </div>
  );
}

export default ModelTest;
