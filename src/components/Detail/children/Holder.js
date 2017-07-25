import React from 'react'
import Mytable from '../../../libs/component/MyTable'

class Holder extends React.Component {
    render = () => <Mytable columns={this.props.columns} mod="holder"/>
}

Holder.defaultProps = {
    columns: [
        {
            title: "股东",
            dataIndex: 'name',
        }, {
            title: "出资比例",
            dataIndex: 'percent',
        }, {
            title: "认缴出资",
            dataIndex: 'money',
        }
    ]
}
export default Holder
