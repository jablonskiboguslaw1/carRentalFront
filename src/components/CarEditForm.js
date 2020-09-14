import React,{Component} from 'react'
import { get } from '../helpers/api'

class CarEditForm extends Component{

state={
    carItem : null,
    fetched : false

}
componentDidMount= async() =>{
    const carItem = await get(this.props.match.params.itemId)
    this.setState({carItem, fetched:true})
}

render(){
    return(
        <div>
            Edit Car {this.props.match.params.itemId}
            {this.state.fetched 
            ? <p>CarItme fetched</p>
            : <p>Loading...</p>}
        </div>
    )
    }
}

export default CarEditForm