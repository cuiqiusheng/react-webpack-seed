import React from 'react'
import { Icon } from 'antd'
import { FormattedMessage } from 'react-intl'

export default [
  {
    name: 'overview',
    title: (
      <span>
        <Icon type="home" />
        <FormattedMessage id="overview" />
      </span>
    ),
    menus: [
      { title: 'dataScreen', linkTo: '/overview/data', permissions: [ 'admin', 'user' ] },
      { title: 'warningScreen', linkTo: '/overview/warning', permissions: [ 'admin', 'user' ] },
      { title: 'expScreen', linkTo: '/overview/exp', permissions: [ 'admin', 'user' ] },
      { title: 'monitorScreen', linkTo: '/overview/monitor', permissions: [ 'admin', 'user' ] },
    ],
    // linkTo: '/app/overview',
    permissions: [ 'admin', 'user' ],
  },
  {
    name: 'scan',
    title: (
      <span>
        <Icon type="appstore-o" />
        <FormattedMessage id="scan" />
      </span>
    ),
    menus: [
      { title: 'createTask', linkTo: '/app/task/create/taskSettings', permissions: [ 'admin', 'user' ] },
      { title: 'taskList', linkTo: '/app/task/list', permissions: [ 'admin', 'user' ] },
    ],
    permissions: [ 'admin', 'user' ],
  },
  {
    name: 'proxy',
    title: (
      <span>
        <Icon type="api" />
        <FormattedMessage id="proxy" />
      </span>
    ),
    linkTo: '/app/proxy',
    permissions: [ 'admin', 'user' ],
  },
  {
    name: 'user',
    title: (
      <span>
        <Icon type="user" />
        <FormattedMessage id="userManage" />
      </span>
    ),
    linkTo: '/app/user',
    permissions: [ 'admin' ],
  },
  {
    name: 'logManage',
    title: (
      <span>
        <Icon type="file" />
        <FormattedMessage id="logManage" />
      </span>
    ),
    linkTo: '/app/log',
    permissions: [ 'admin' ],
  },
  {
    name: 'systemConfig',
    title: (
      <span>
        <Icon type="setting" />
        <FormattedMessage id="systemConfig" />
      </span>
    ),
    menus: [
      { title: 'netConfig', linkTo: '/app/system/net', permissions: [ 'admin', 'user' ] },
      { title: 'systemUpgrade', linkTo: '/app/system/upgrade', permissions: [ 'admin', 'user' ] },
      { title: 'authorizationManage', linkTo: '/app/system/authorization', permissions: [ 'admin' ] },
    ],
    permissions: [ 'admin', 'user' ],
  },
]
