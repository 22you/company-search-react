import React from 'react'
import axios from 'axios'
import { message, Card, Table} from 'antd'
import { parseUrl } from '../../../libs/utils'
import './info.css'

class Info extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pagination: false
        };
    }
    render() {
        const state = this.state;
        return (
            <div>
                <Card style={style.headerCard}>
                    <img src={state.logo} style={style.headerLogo} alt={state.name}></img>
                    <table style={style.headerTable} className="header-table">
                        <tr>
                            <td>
                                <h3>{state.name}</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>电话：{state.phoneNumber}</td>
                            <td>邮箱：{state.mail}</td>
                        </tr>
                        <tr>
                            <td>网址： {state.webAddress}</td>
                            <td>地址：{state.regLocation}</td>
                        </tr>
                    </table>
                </Card>

                 <Table dataSource={[{
                     regStatus: state.regStatus,
                     legalPersonName: state.legalPersonName,
                     regCapital: state.regCapital,
                     fromTime: state.fromTime
                 }]}
                columns={this.props.tableColum}
                style={{marginTop: 30}}
                pagination={state.pagination}
                />

                <table style={style.footTable}>
                    <tr>
                        <td>工商注册号：{state.regNumber}</td>
                        <td>组织机构代码：{state.orgNumber}</td>
                    </tr>
                    <tr>
                        <td>统一信用代码：{state.creditCode}</td>
                        <td>企业类型：{state.companyOrgType}</td>
                    </tr>
                    <tr>
                        <td>行业：{state.industry}</td>
                        <td>营业期限：{state.fromTime}至{state.toTime}</td>
                    </tr>
                    <tr>
                        <td>核准日期：{state.approvedTime}</td>
                        <td>登记机关：{state.regInstitute}</td>
                    </tr>
                    <tr>
                        <td>注册地址：{state.regLocation}</td>
                        <td></td>
                    </tr>
                </table>
                <p style={{textAlign: 'left'}}>经营范围：{state.businessScope}</p> 
            </div>
        )
    }
    componentDidMount() {
        const { location } = this.props;
        const search = location.search;
        const query = parseUrl(search);
        axios.get(`/info`, query)
        .then((res) => {
            this.setState(res.data.data)
        })
        .catch(message.error)
    }
}

Info.defaultProps = {
    tableColum: [
        {
            title: '法人代表',
            dataIndex: 'legalPersonName',
            key: 'legalPersonName'
        }, {
            title: '注册资本',
            dataIndex: 'regCapital',
            key: 'regCapital'
        }, {
            title: '注册时间',
            dataIndex: 'fromTime',
            key: 'fromTime'
        }, {
            title: '经营状态',
            dataIndex: 'regStatus',
            key: 'regStatus'
        }
    ]
};

const style = {
    headerCard: {
        width: '100%',
        height: 180
    },
    headerLogo: {
        position: 'absolute',
        left: 50,
        top: 30,
        width: 150,
        height: 120,
        border: '1px solid #eee',
    },
    headerTable: {
        position: 'absolute',
        left: 300,
        top: 15,
        textAlign: 'left',
        fontSize: 15,
    },
    headerTb: {
        margin: 20,
        display: 'table-cell'
    },
    footTable: {
        width: '100%',
        fontSize: 13,
        textAlign: 'left',
    }
};

export default Info