import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  return (
    <div className="root">
       <div className='.main_container'>
        <button className='horizontal' disabled>Up</button>
        <div className='container'>
          <button className='vertical' disabled>Left</button>
          <div className='main'>
            <div className='box' ></div>
          </div>
          <button className='vertical'>Right</button>
        </div>
        <button className='horizontal' >Bottom</button>
       </div>
    </div>
  );
}

export default App;
