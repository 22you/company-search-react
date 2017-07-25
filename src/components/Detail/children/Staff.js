import React from 'react'
import Mytable from '../../../libs/component/MyTable'

class Staff extends React.Component {
    render = () => <Mytable columns={this.props.columns} mod="staff"/>
}

Staff.defaultProps = {
    columns: [
        {
            title: "姓名",
            dataIndex: 'name'
        }, {
            title: "职位",
            dataIndex: 'zhiwei'
        }
    ]
}
export default Staff
