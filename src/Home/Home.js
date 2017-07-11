import React from 'react'
// import App from './App';



export default class Home extends React.Component {
    render () {
        console.log(this.props)
        return <div className="content">
            {this.props.children}
        </div>
    }
}