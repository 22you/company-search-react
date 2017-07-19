import React from 'react'
import { Table, Spin, Message } from 'antd'
import axios from 'axios'

class MyTable extends React.Component {
    state = {
        data: [],
        loading: true
    }
    render() {
        const prop = this.props;
        const state = this.state;
        const content = state.loading
            ? <div style={style.spin}><Spin size="large"/></div>
            : <Table
                dataSource={this.state.data}
                columns={prop.columns}
                pagination={prop.pagination || false}/>
        return (
            <div>
                {content}
            </div>
        )
    }

    componentDidMount() {
        const mod = this.props.mod;
        if (!mod) {
            return this.setState({
                loading: false
            })
        }
        axios.get(`/${mod}`)
        .then(res => {
            this.setState({data: res.data.data, loading: false})
        })
        .catch(err => {
            this.setState({
                loading: false
            })
            Message.error('获取数据失败')
        })
    }
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