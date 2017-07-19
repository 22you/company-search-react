import React from 'react'
import Mytable from '../../../libs/component/MyTable';

class Staff extends React.Component {
    constructor(props) {
        super(props)
        const width = this.props.width
        this.state = {
            columns: [
                {
                    title: "姓名",
                    dataIndex: 'name',
                    width,
                }, {
                    title: "职位",
                    dataIndex: 'zhiwei',
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
                    mod="staff"
                />
            </div>
        )
    }
}

Staff.defaultProps = {
    width: 300
}
export default Staff
