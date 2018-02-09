

const service = {

  getMenu() {
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
    return data;
  },

};

export default service;
