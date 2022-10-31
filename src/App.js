import "./App.css";
import React from "react";

import Avatardetails from "./Avatardetails";
const App = () => {

return (
    <>
  <Avatardetails name='sam' time='4:00 PM' text='Hello dear i am sam' />  
  <Avatardetails name='jhon' time='10:30 PM' text='Hello dear i am jhon' /> 
  <Avatardetails name='william' time='11:00 AM' text='Hello dear i am wiiliam' /> 
  </>
  );
};

export default App;
