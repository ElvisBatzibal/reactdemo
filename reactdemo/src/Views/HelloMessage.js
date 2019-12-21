import React,{Component} from 'react';


export default class HelloMessage extends Component{

    alertName(a)
    {
        alert(a);
    }


    render()
    {
        const {name} = this.props;

        return (
            <div>
                Bienvenido,<br/> Nombre: {name}
                <div>
                    <button onClick={()=>this.alertName(name)}>Click Me</button>
               </div>
            </div>
           
            
        )
        
    }
}