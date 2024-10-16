import React from "react";
import { useState ,useEffect} from "react";
import { Button } from "react-bootstrap";
function Intro(){
    
        const [counter,setCounter]=useState(0);
        const increment =() =>  {
            setCounter(counter+1)

        }
        const decrement =() =>  {
            setCounter(counter-1)

        }

        useEffect(() => {
            fetch('http://localhost:9000').then(
                response=>(response.text()))
            .then(response=>console.log(response)).catch(error=>console.log(error));
        }
        )
        return (

        <div>
            Counter: current: {counter}
                    <Button onClick={increment}> increase value</Button>
                    <Button onClick={decrement}> decrease value</Button>


        </div>
    );

}

export default Intro;