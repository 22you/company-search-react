import { Layout, Breadcrumb, Menu, Icon } from 'antd';
import React from 'react';
import '../App.css';
import logo from '../static/icon-large.png';

const SubMenu = Menu.SubMenu;

const { Header, Content, Sider} = Layout;

class App extends React.Component {
  state = {
    curItem: 'baseInfo',
    openKeys: ['bj'],
  }
  handleClick = (e) => {
    console.log(e)
    this.setState({
      curItem: e.key,
    })
  }
  openChange = (keys) => {
    this.setState({
      openKeys: [keys.pop()]
    })
  }
  // 渲染菜单
  setMenu() {
    const menuItem = this.props.menu.map(function (m, i) {
      const parent = m.parent;
      const items = m.item.map((item, index) => <Menu.Item key={item.id}>{item.text}</Menu.Item>);
      return <SubMenu key={parent.id} title={<span><Icon type={parent.icon} />{parent.text}</span>}>
        {items}
      </SubMenu>
    })
    return <Menu mode="inline"
      onClick={this.handleClick}
      selectedKeys={[this.state.curItem]}
      openKeys={this.state.openKeys}
      onOpenChange={this.openChange}
    >
      {menuItem}
    </Menu>
  }
  render() {
    const SildMenu = this.setMenu();
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider className="silder">
          {/*logo*/}
          <a>
            <img className="header-logo" src={logo} alt=""></img>
          </a>

          {/*菜单选项*/}
          {SildMenu}
        </Sider>

        <Layout>

          <Header style={{ background: '#fff', padding: 0 }}>
            {/*面包屑*/}
            <Breadcrumb style={{ margin: '12px 0', marginLeft: 50 }}>
              <Breadcrumb.Item>公司</Breadcrumb.Item>
              <Breadcrumb.Item>大菜单</Breadcrumb.Item>
              <Breadcrumb.Item>小菜单</Breadcrumb.Item>
            </Breadcrumb>
          </Header>



          <Content className="content">
            <div style={{ padding: 20, background: '#fff', textAlign: 'center' }}>
              ...
            <br />
              Really
            <br />...<br />...<br />...<br />
              long
            <br />...<br />...<br />...<br />...<br />...<br />...
            <br />...<br />...<br />...<br />...<br />...<br />...
            <br />...<br />...<br />...<br />...<br />...<br />...
            <br />...<br />...<br />...<br />...<br />...<br />...
            <br />...<br />...<br />...<br />...<br />...<br />...
            <br />...<br />...<br />...<br />...<br />...<br />...
            <br />...<br />...<br />...<br />...<br />...<br />
              content
          </div>
          </Content>

          <div className="foot">
            <span className="foot-span">
              &copy; 新智资讯 2014-2015 <a href="mailto:contact@beyondlink.net">联系我们</a> | <a href="http://www.miibeian.gov.cn/" target="_blank">京ICP备11010360号-3</a>
            </span>
          </div>

        </Layout>
      </Layout>
    )
  }
}

App.defaultProps = {
  menu: [{
    parent: {
      text: '企业背景',
      id: 'bj',
      icon: 'laptop'
    },
    item: [{
      text: '基本信息',
      id: 'baseInfo'
    }, {
      text: '主要人员',
      id: 'staff'
    }, {
      text: '股东信息',
      id: 'holder'
    }, {
      text: '对外投资',
      id: 'investment'
    }, {
      text: '变更记录',
      id: 'changeinfo'
    }]
  }, {
    parent: {
      text: '企业发展',
      id: 'dev',
      icon: 'rocket'
    },
    item: [{
      text: '融资历史',
      id: 'companyrongzi'
    }, {
      text: '核心团队',
      id: 'companyteammember'
    }, {
      text: '企业业务',
      id: 'companyproduct'
    }, {
      text: '投资事件',
      id: 'jigoutzanli'
    }, {
      text: '竞品信息',
      id: 'companyjingpin'
    }]
  }, {
    parent: {
      text: '司法风险',
      id: 'sffx',
      icon: 'exclamation-circle-o'
    },
    item: [{
      text: '法律诉讼',
      id: 'lawsuit'
    }, {
      text: '法院公告',
      id: 'court'
    }, {
      text: '被执行人',
      id: 'zhixing'
    }]
  }, {
    parent: {
      text: '经营风险',
      id: 'jyfx',
      icon: 'exclamation-circle-o'
    },
    item: [{
      text: '行政处罚',
      id: 'punishment'
    }, {
      text: '股权出质',
      id: 'equity'
    }]
  }, {
    parent: {
      text: '经营状况',
      id: 'jyzk',
      icon: 'clock-circle-o'
    },
    item: [{
      text: '招投标',
      id: 'bid'
    }, {
      text: '招聘',
      id: 'recruit'
    }, {
      text: '税务评级',
      id: 'taxcredit'
    }, {
      text: '抽查检查',
      id: 'check'
    }, {
      text: '产品信息',
      id: 'productinfo'
    }]
  },  {
    parent: {
      text: '知识产权',
      id: 'zscq',
      icon: 'book',
    },
    item: [{
      text: '商标信息',
      id: 'tm'
    }, {
      text: '专利',
      id: 'patent'
    }, {
      text: '著作权',
      id: 'copyr'
    }, {
      text: '网站备案',
      id: 'icp'
    }]
  }],
};

export default App