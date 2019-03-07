import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Dropdown } from 'antd'
// import { Link } from 'react-router-dom'
import { IntlComponent } from 'Components/Common'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { logout } from 'Containers/Login/actions'
import ModifyPassword from 'Containers/User/ModifyPassword'

import LocaleSelector from './LocaleSelector'
import style from './style.scss'

class Header extends IntlComponent {

  static propTypes = {
    userInfo: PropTypes.object,
    updateTime: PropTypes.number,
  }

  static defaultProps = {
    userInfo: {},
    updateTime: 0,
  }

  constructor(props) {
    super(props)
    this.state = {
      visibleModifyPassword: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.updateTime !== nextProps.updateTime) {
      this.setState({ visibleModifyPassword: false })
    }
  }

  menu = () => (
    <Menu theme="dark">
      <Menu.Item key="password" onClick={this.updatePassword}><Icon type="key" /> {this.localeMessage('modifyPassword')} </Menu.Item>
      <Menu.Item key="logout" onClick={this.logout}><Icon type="poweroff" /> {this.localeMessage('logout')}</Menu.Item>
    </Menu>
  )

  logout = () => {
    this.props.logout()
  }

  // 点击修改密码
  updatePassword = () => {
    this.setState({ visibleModifyPassword: true })
  }

  // 关闭弹窗
  closeModal = () => {
    this.setState({ visibleModifyPassword: false })
  }

  render() {
    const { userInfo } = this.props
    const { visibleModifyPassword } = this.state
    return (
      <React.Fragment>
        <section className={style.header}>
          <div />
          <div className={style.headerActions}>
            <LocaleSelector />
            <Dropdown overlay={this.menu()}>
              <div className={style.userWrapper}>
                <Icon className={style.userIcon} type="user" />
                <span className={style.username}>{userInfo.username}</span>
              </div>
            </Dropdown>
          </div>
        </section>
        <ModifyPassword
          visible={visibleModifyPassword}
          onCancel={this.closeModal}
        />
      </React.Fragment>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch)
}

function mapStateToProps(state) {
  return {
    userInfo: state.user.userInfo,
    updateTime: state.user.updateTime,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
