import React from 'react'
import Mytable from '../../../libs/component/MyTable'

class Changeinfo extends React.Component {
    render = () => <Mytable columns={this.props.columns} mod="changeinfo"/>
}

Changeinfo.defaultProps = {
    columns: [
        {
            title: "变更时间",
            dataIndex: 'time',
            width: 120
        }, {
            title: "变更项目",
            dataIndex: 'name',
            width: 120
        }, {
            title: "变更前",
            dataIndex: 'befor',
        }, {
            title: "变更后",
            dataIndex: 'after',
            width: 350
        }
    ]
}
export default Changeinfo
