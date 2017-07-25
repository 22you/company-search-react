import React from 'react'
import Mytable from '../../../libs/component/MyTable'

const columns = [{
    title: '时间',
    dataIndex: 'time'
}]

export default class Companyproduct extends React.Component {
    render = () => <Mytable columns={columns}/>
}