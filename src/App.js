import {Button, Input, Dropdown, Menu, Icon} from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import Foot from './components/Foot/Foot'
import logo from './static/icon-large.png';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false, // 按钮加载状态
      value: '', // input 的值
      showDropDown: false, // 是否显示下拉菜单
      searchResult: [], // 搜索结果,
      dropdownLink: ''
    };
  }

  searchData = (event) => {
    const value = event
      .target
      .value
      .trim();
    const showDropDown = !!value;
    axios
      .get('/search', {name: value})
      .then((res) => {
        this.setState({value, showDropDown, searchResult: res.data.data});
      })
      .catch((err) => {
        console.log(err)
      })
  }

  renderResult = () => {
    let items = this
      .state
      .searchResult
      .map(function (d) {
        return <Menu.Item key={d.id}>
          <Link to={`/detail/bj/baseInfo?id=${d.id}&name=${d.name}`}>{d.name}</Link>
        </Menu.Item>
      })
    if (!items.length) {
      items = <Icon type="loading" className="loading"/>
    }
    return <Menu className="dropDown">
      {items}
    </Menu>
  }

  showResult = () => {
    const value = this.state.value;
    if (value) {
      this.setState({loading: true})
      this
        .props
        .history
        .push('/detail')
    }
  }
  render() {
    return (
      <div>
        <div className="box">

          <div className="index-logo">
            <img src={logo} alt=""/>
          </div>

          <tr>
            <td className="input">
              <Input
                placeholder="请输入企业名称"
                size="large"
                className="input"
                value={this.state.value}
                onPressEnter={this.searchData}
                onChange={this.searchData}/>
            </td>
            <td>
              <Button
                type="primary"
                className="searchBtn"
                loading={this.state.loading}
                onClick={this.showResult}>
                搜索
              </Button>
            </td>
          </tr>
          <Dropdown overlay={this.renderResult()} visible={this.state.showDropDown}>
            <a className="ant-dropdown-link">{this.state.dropdownLink}</a>
          </Dropdown>
        </div>

        <div className="foot-box">
          <Foot/>
        </div>
      </div>
    )
  }
}

export default App