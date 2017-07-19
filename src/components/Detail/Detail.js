import { Layout, Breadcrumb, Menu, Icon } from 'antd';
import React from 'react';
import logo from '../../static/icon-large.png';
import { Link, Route } from 'react-router-dom'
import NoData from '../../libs/component/NoData'
import Staff from './children/Staff'
import Info from './children/Info'
import Holder from './children/Holder'
import { parseUrl } from '../../libs/utils'

const SubMenu = Menu.SubMenu;

const { Header, Content, Sider } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props)
    const { history, match } = this.props;
    const location = history.location;
    const params = match.params;
    const query = parseUrl(location.search);
    this.state = {
      openKeys: [params.mod || 'bj'],
      curItem: params.item || 'baseInfo',
      bread1: '企业背景',
      bread2: '基本信息',
      companyName: query.name,
    };
  }
  handleClick = (e) => {
    this.initState(e)
  }

  componentDidMount() {
    this.initState()
  }

  initState(e) {
    const { history, match } = this.props;
    const location = history.location;
    const query = parseUrl(location.search);
    const params = match.params;
    const curItem = e ? e.key : params.item;
    const openKey = this.state.openKeys[0] || params.mod;
    const breads = this.getBread(openKey , curItem);
    this.setState({
      curItem,
      openKeys: [openKey],
      bread1: breads.bread1.text,
      bread2: breads.bread2.text,
      companyName: query.name
    })
  }

  openChange = (keys) => {
    this.setState({
      openKeys: [keys.pop()]
    })
  }
  // 渲染菜单
  setMenu = () => {
    const { location } = this.props;
    const menuItem = this.props.menu.map(function (m, i) {
      const parent = m.parent;
      const items = m.item.map((item, index) => {
        const to = `/detail/${parent.id}/${item.id}${location.search}`;
        return <Menu.Item key={item.id}><Link to={to}>{item.text}</Link></Menu.Item>
      });
      return <SubMenu key={parent.id} title={<span><Icon type={parent.icon} />{parent.text}</span>}
      >
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
    const routes = this.setRoute();
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider style={styles.sider}>
          {/*logo*/}
          <a>
            <img style={styles.headerLogo} src={logo} alt=""></img>
          </a>

          {/*菜单选项*/}
          {SildMenu}
        </Sider>

        <Layout>

          <Header style={{ background: '#fff', padding: 0 }}>
            {/*面包屑*/}
            <Breadcrumb style={{ margin: '12px 0', marginLeft: 50 }}>
              <Breadcrumb.Item>{this.state.companyName}</Breadcrumb.Item>
              <Breadcrumb.Item>{this.state.bread1}</Breadcrumb.Item>
              <Breadcrumb.Item>{this.state.bread2}</Breadcrumb.Item>
            </Breadcrumb>
          </Header>



          <Content style={styles.content} className="content">
            <div style={styles.detailContent}>
                {routes}  
            </div>
          </Content>

          <div style={styles.foot}>
            <span className="foot-span">
              &copy; 新智资讯 2014-2015 <a href="mailto:contact@beyondlink.net">联系我们</a> | <a href="http://www.miibeian.gov.cn/" target="_blank">京ICP备11010360号-3</a>
            </span>
          </div>

        </Layout>
      </Layout>
    )
  }

  setRoute() {
    const { menu } = this.props;
    let routes = [];
    menu.forEach(m => {
      m.item.forEach(it => {
        it.parentId = m.parent.id;
      })
      routes = routes.concat(m.item);
    })
    routes = routes.map(item => {
      const path = `/detail/${item.parentId}/${item.id}`;
      return <Route path={path} component={item.component || NoData} key={`${item.parentId}-${item.id}`}/>
    })
    return routes
  }

  getBread(openKey, itemId) {
      const menu = this.props.menu;
      const itemGruop = menu.filter((m) => m.parent.id === openKey)[0]
      return {
          bread1: {
            id: openKey,
            text: itemGruop.parent.text
          },
          bread2: {
            id: itemId,
            text: (itemGruop.item.filter(it => it.id === itemId)[0] || {}).text
          }
      }
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
      id: 'baseInfo',
      component: Info,
    }, {
      text: '主要人员',
      id: 'staff',
      component: Staff,
    }, {
      text: '股东信息',
      id: 'holder',
      component: Holder
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

const styles = {
  headerLogo: {
    position: 'fixed',
    left: 28,
    top: 15,
    width: 150,
    height: 30
  },
  header: {
    position: 'fixed',
    top: 0,
    width: '100%',
    height: 60
  },
  sider: {
    backgroundColor: 'white',
    paddingTop: 65,
    overflowX: 'hidden',
    overflowY: 'auto'
  },
  foot: {
    paddingTop: 10,
    height: 40,
    textAlign: 'center',
  },
  content: {
    margin: '24px 16px 0px',
    overflow: 'auto'
  },
  detailContent: {
    width: '100%',
    height: '100%',
    overflow: 'auto',
    padding: 20,
    background: '#fff',
    textAlign: 'center' 
  }
};


export default App