import React, { useEffect,useState} from 'react' 
function MyUseEffect(){

    const[count,setCount]=useState(10);
    const[pointer,setPointer]=useState(20);
    useEffect(()=>{
        console.log("hi, inside useEffect+ updated count :"+count);
        console.log("updated pointer :"+pointer);
    },[count,pointer])

    function doPointer(){
        setPointer(pointer+100)
    }

    function doIncrement(){
        setCount(count+30)
        doPointer()
    }
    return(<div>
            <h1>Counter: {count}</h1>
            <br></br>
            <h2>Pointer: {pointer}</h2>
            <button onClick={doIncrement}>Increment</button>
            <button onClick={doPointer}>Pointer</button>
            <h2>My useeffect</h2>
        </div>    
        )
}
export default MyUseEffect