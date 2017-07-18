import React from 'react'
import { Table } from 'antd'

class MyTable extends React.Component {
    render() {
        return (
            <div>
                <Table {...this.props}/>
            </div>
        )
    }
}