import React from 'react'
import Mytable from '../../../libs/component/MyTable'

class Investment extends React.Component {
    render = () => <Mytable columns={this.props.columns} mod="investment"/>
}

Investment.defaultProps = {
    columns: [
        {
            title: "被投资企业名称",
            dataIndex: 'companyName',
            width: 450
        }, {
            title: "被投资法定代表人",
            dataIndex: 'person',
            width: 200
        }, {
            title: "注册资本",
            dataIndex: 'regMoney',
        }, {
            title: "投资数额",
            dataIndex: 'moeny',
            width: 350
        }, {
            title: "投资占比",
            dataIndex: 'percent',
            width: 150
        }, {
            title: "注册时间",
            dataIndex: 'regTime',
        }, {
            title: "状态",
            dataIndex: 'state',
        }
    ]
}
export default Investment