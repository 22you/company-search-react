import React from 'react'
import Mytable from '../../../libs/component/MyTable'

class Companyrongzi extends React.Component {
    render = () => <Mytable columns={this.props.columns} mod="companyrongzi"/>
}

Companyrongzi.defaultProps = {
    columns: [
        {
            title: "时间",
            dataIndex: 'time',
            width: 180
        }, {
            title: "轮次",
            dataIndex: 'round',
            width: 120
        }, {
            title: "估值",
            dataIndex: 'value',
            width: 300
        }, {
            title: "金额",
            dataIndex: 'money',
            width: 350
        }, {
            title: "比例",
            dataIndex: 'percent',
            width: 350
        }, {
            title: "投资方",
            dataIndex: 'touzifang',
            width: 350
        }, {
            title: "新闻来源",
            dataIndex: 'source',
            width: 350
        }
    ]
}
export default Companyrongzi
