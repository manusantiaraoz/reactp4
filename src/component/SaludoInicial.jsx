import React from 'react';

const SaludoInicial = ({saludo}) => {
    return (
        <article className="display-3">
            hello {saludo}  
        </article>
    );
};

export default SaludoInicial;