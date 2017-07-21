import React from 'react'
import Mytable from '../../../libs/component/MyTable'

class Investment extends React.Component {
    constructor(props) {
        super(props)
        const width = this.props.width
        this.state = {
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
                    width,
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
                    width,
                }, {
                    title: "状态",
                    dataIndex: 'state',
                    width,
                }
            ]
        }
    }
    render() {
        const state = this.state
        return (
            <div>
                <Mytable
                    columns={state.columns}
                    mod="investment"
                />
            </div>
        )
    }
}

Investment.defaultProps = {
    width: 300
}
export default Investment