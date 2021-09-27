import React from 'react'

import './Style.css'

const Home = () => {
    return (
        <div className="home">
            <h2>
                Prueba de Manuel Izquierdo
            </h2>

            <p>En el enlace --table-- está la parte de la prueba en la que hay que pintar una tabla y
                que se pueda ordenar por columna y que tenga paginación. Esta parte está hecha con hooks
                tal y como se exigía en la entrevista.
            </p>

            <p>
                En la parte de products, se puede filtar por categoría, es totalmente responsive y
                está desarrollado con redux. La he hecho con redux para manejar el estado de la app
                de una manera diferente a la tabla. Totalmente responsive con grid que es como se está 
                utilizando css a día de hoy para hacer diseños más complejos sin media queries
            </p>
        </div>
    )
}

export default Home
