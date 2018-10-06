import React from 'react'

class SelectBox extends React.Component{
    state ={
        items: this.props.items || []
    }

    render(){
        return<div>{
            this.state.items.map(item => <div key={item.id}>
                {item.value}
            </div>)
        }
        </div>
    }

}

export default SelectBox