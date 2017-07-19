import React from 'react'
import Mytable from '../../../libs/component/MyTable'

class Holder extends React.Component {
    constructor(props) {
        super(props)
        const width = this.props.width
        this.state = {
            columns: [
                {
                    title: "股东",
                    dataIndex: 'name',
                    width,
                }, {
                    title: "出资比例",
                    dataIndex: 'percent',
                    width,
                }, {
                    title: "认缴出资",
                    dataIndex: 'money',
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
                    mod="holder"
                />
            </div>
        )
    }
}

Holder.defaultProps = {
    width: 300
}
export default Holder
