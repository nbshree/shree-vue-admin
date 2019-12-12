import _import from '@/utils/import';

const Layout = _import('layout/index');

export const asyncRouterMap = [
  // 综合管理
  {
    path: '/manage',
    component: Layout,
    name: 'manage',
    meta: {
      title: '综合管理',
      icon: 'comp'
    },
    redirect: 'app/list',
    children: [
      {
        path: 'app/list',
        component: _import('supportManage/appList/index'),
        name: 'appList',
        meta: {
          title: 'App管理',
          icon: 'comp',
          permission: 'supportManage:appList:index'
        }
      },
      {
        path: 'user/list',
        component: _import('supportManage/userList/index'),
        name: 'userList',
        meta: {
          title: '用户管理',
          icon: 'user',
          permission: 'supportManage:userList:index'
        }
      }
    ]
  },
  //table
  {
    path: '/table',
    component: Layout,
    name: 'table',
    meta: {
      title: 'table',
      icon: 'comp'
    },
    redirect: 'app/list',
    children: [
      {
        path: 'table/dynamic',
        component: _import('table/dynamic-table/index'),
        name: 'dynamic-table',
        meta: {
          title: '动态表格',
          icon: 'comp',
          permission: 'supportManage:appList:index'
        }
      },
      {
        path: 'table/complex',
        component: _import('table/complex-table/index'),
        name: 'complex-table',
        meta: {
          title: '综合功能表格',
          icon: 'comp',
          permission: 'supportManage:appList:index'
        }
      }
    ]
  }
  // 更新中心
  // {
  //   path: '/update',
  //   component: Layout,
  //   name: 'update',
  //   meta: {
  //     title: '更新中心',
  //     icon: 'comp'
  //   },
  //   children: [
  //     {
  //       path: 'project/list',
  //       component: _import('updateCenter/projectList/index'),
  //       name: 'projectList',
  //       meta: {
  //         title: '项目列表',
  //         icon: 'comp',
  //         permission: 'updateCenter:projectList:index'
  //       }
  //     },
  //     {
  //       path: 'eseal/firmware',
  //       component: _import('updateCenter/esealFirmware/index'),
  //       name: 'esealFirmware',
  //       meta: {
  //         title: '智能锁固件',
  //         icon: 'comp',
  //         permission: 'updateCenter:esealFirmware:index'
  //       }
  //     }
  //   ]
  // }
];
