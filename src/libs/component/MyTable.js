import React, { Component } from 'react'
import { Table, Spin, Message } from 'antd'
import axios from 'axios'

class MyTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loading: true
        }
    }
    render() {
        const prop = this.props;
        const state = this.state;
        const columns = prop.columns.map(c => {
            c.width = c.width || prop.columnWidth
            return c
        })
        console.log(columns)
        const content = state.loading
            ? <div style={style.spin}><Spin size="large"/></div>
            : <Table
                dataSource={state.data}
                columns={columns}
                pagination={prop.pagination || false}/>
        return (
            <div>
                {content}
            </div>
        )
    }

    hideLoading = () => {
        this.setState({
            loading: false
        })
    }

    componentDidMount() {
        const mod = this.props.mod;
        if (!mod) {
            return this.hideLoading()
        }
        axios.get(`/${mod}`)
        .then(res => {
            this.setState({data: res.data.data, loading: false})
        })
        .catch(() => {
            this.hideLoading()
            Message.error('获取数据失败')
        })
    }
}

MyTable.defaultProps = {
    columnWidth: 300
}
const style = {
    spin: {
        width: 200,
        height: 200,
        margin: '0 auto',
        position: 'absolute',
        left: '50%',
        top: '50%'
    }
};
export default MyTable