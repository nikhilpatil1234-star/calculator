
import { useState } from 'react';
import './App.css';

function App() {
const [result,setResult]=useState('');
let enterNo=(e)=>{
  // if( e.target.value ==="."&& result.includes('.')) return
setResult(result.concat(e.target.value))
}
let equal=(eve)=>{
  setResult(eval(result).toString())
}
let clear=()=>{
  setResult('')
}
const del=(e)=>{
  setResult(String(result).slice(0,-1))
}

  return (
    <div className="App">
 <div className='screen'>
<input type="text" name="hello" id="screen" placeholder='0'value={result} />
</div>
<div  className='number'>
 <input type="button" value="9" className='btn' onClick={enterNo}/>
 <input type="button" value="8" className='btn'onClick={enterNo}/>
 <input type="button" value="7"className='btn' onClick={enterNo}/>
 <input type="button" value="6" className='btn'onClick={enterNo}/>
 <input type="button" value="5" className='btn'onClick={enterNo}/>
 <input type="button" value="4"className='btn' onClick={enterNo}/>
 <input type="button" value="3" className='btn'onClick={enterNo}/>
 <input type="button" value="2" className='btn'onClick={enterNo}/>
 <input type="button" value="1" className='btn'onClick={enterNo}/>
 <input type="button" value="0" className='btn'onClick={enterNo}/>
 <input type="button" value="+"className='btn' onClick={enterNo}/>
 <input type="button" value="-"className='btn' onClick={enterNo}/>
 <input type="button" value="*"className='btn' onClick={enterNo}/>
 <input type="button" value="%" className='btn'onClick={enterNo}/>
 <input type="button" value="/" className='btn'onClick={enterNo}/>
 <input type="button" value="." className='btn'onClick={enterNo}/>
 <input type="button" value="Del" className='btn'onClick={del}/>
 <input type="button" value="A/C"className='btn'  onClick={clear}/>
 <input type="button" value="=" className='btn btn1' onClick={equal}/>
</div>

    </div>
  );
}

export default App;
