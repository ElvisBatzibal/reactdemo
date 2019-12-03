import React from 'react';


export default class HelloMessage extends React.Component{

    render()
    {
        const {name} = this.props;

        return (
            <div>
                Bienvenido,<br/> Nombre: {name}
            </div>
        )
        
    }
}