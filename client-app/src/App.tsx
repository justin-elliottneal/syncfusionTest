import React, { useState } from 'react';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import './App.css';


const App: React.FC = (props) => {
  const [hideDialog, setHideDialog] = useState(false);
  
  const dialogClose = () => { 

    setHideDialog(false);
  
}
  const handleClick = (e: React.MouseEvent) => {

      setHideDialog(true);
    
  }





  return (

    
    <div className="App">
     
    <br /><br />
     <div className="App" id='dialog-target'>
      <button className='e-control e-btn' id='targetButton1' onClick={handleClick}>Open Test</button>
      
      <DialogComponent width='250px' height="250px" content='Hello Bar Squared.' target='.App' visible={ hideDialog } close={dialogClose} onClick={dialogClose} ></DialogComponent>
  </div>

  
    </div>
    
  );
}

export default App;
