import React from 'react'

function Square(props) {
    return (
        <div>
            <button className="square" onClick={props.onClick}>
                {props.value}
            </button>
            
        </div>
    )
}
export default Square


// We feel happier and freer when we are not dragged into things we don't want to do.