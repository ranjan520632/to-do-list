import React, { useState } from 'react';
const App = () => {

  const [inputList, setInputList] = useState("");
  const itemEvent = () => {};
  return(
   <>
  <div className="main_div">
    <div className="center_div">
      <br />
      <h1> ToDo List</h1>
      <br />
      <input type="text" placeholder="Add an item!" onChange={itemEvent}/>
      <button> + </button>
      <ol>
        <li> {inputList} </li>
      </ol>

    </div>

  </div>
</>
  );
};

export default App;