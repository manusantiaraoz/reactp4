import React from 'react';
import { useState } from 'react';

const SaludoInicial = ({saludo}) => {

    const [msj,setMsj] = useState("");


    return (
        <article className="display-3">
             <p> hello {saludo} </p> 
             <h3>{msj}</h3>  
            <button className='btn btn-danger' onClick={() => setMsj("(from changed state)")} > mostrar mensaje</button>
        </article>
    );
};

export default SaludoInicial;