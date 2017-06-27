import React from 'react'
import { Menu, Icon} from 'antd';

const SubMenu = Menu.SubMenu;


class SlideMenu extends React.Component {
    handleClick = (e) => {
        this.setState({
            curItem: e.key,
        })
    }
    state = {
        curItem: 'baseInfo',
        defaultOpenKeys: ['bj']
    }
    render() {
        const menu = this.props.menu.map(function(m, i) {
            const parent = m.parent;
            const items = m.item.map((item, index) => <Menu.Item key={item.id}>{item.text}</Menu.Item>);
            return <SubMenu  key={parent.id} title={<span><Icon type={parent.icon}/>{parent.text}</span>}>
                {items}
            </SubMenu>
        })
        return <Menu theme="light" mode="inline"
        onClick={this.handleClick}
        selectedKeys={[this.state.curItem]}
        defaultOpenKeys={this.state.defaultOpenKeys}
        >
            {menu}
        </Menu>
    }
}

SlideMenu.defaultProps = {
    menu: [{
        parent: {
            text: '企业背景',
            id: 'bj',
            icon: 'user'
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
    }]
};

export default SlideMenu