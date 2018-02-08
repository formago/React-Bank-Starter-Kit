import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

const data = [];
data.push(
  {
    menuId: 1,
    parentMenuId: 0,
    menuName: 'home',
    url: '/Cabinet/',
    icon: 'home',
    childList: [],
  },
  {
    menuId: 2,
    parentMenuId: 0,
    menuName: 'Documents',
    url: '/Cabinet/Documents',
    icon: 'file',
    childList: [],
  },
  {
    menuId: 3,
    parentMenuId: 0,
    menuName: 'Statements',
    url: '/Cabinet/Statements',
    icon: 'file-text',
    childList: [],
  },
  {
    menuId: 4,
    parentMenuId: 0,
    menuName: 'Testing',
    url: '',
    icon: 'file',
    childList: [
      {
        menuId: 5,
        parentMenuId: 0,
        menuName: 'Ant D',
        url: '/Cabinet/AntDPage',
        icon: 'file',
        childList: [],
      },
      {
        menuId: 6,
        parentMenuId: 0,
        menuName: 'Table',
        url: '/Cabinet/TablePage',
        icon: 'file',
        childList: [],
      },
    ],
  },
);

export default class CabinetMenu extends React.Component {

  call = function (it) {
    if (it.childList.length === 0) {
      return (<MenuItem key={it.menuId}>
        <Icon type={it.icon} />
        <span>{it.menuName}</span>
        <Link to={it.url}></Link>
      </MenuItem>);
    }
    return (<SubMenu key={it.menuId} title={<span><Icon type={it.icon} /><span>{it.menuName}</span></span>}>
      {it.childList.map((subit) => (this.call(subit)))}
    </SubMenu>);
  }

  menuItems = data.map((it) => this.call(it));

  render() {
    const cc = (
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {this.menuItems}
      </Menu>
    );

    return cc;
  }
}

