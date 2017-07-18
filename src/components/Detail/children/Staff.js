import React from 'react'
import { Table } from 'antd'
const json = require('../../../libs/data.json')

class Staff extends React.Component {
    render() {
        return (
            <div>
                {JSON.stringify(json.baseInfo)}
            </div>
        )
    }
}

export default Staff

