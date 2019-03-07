/**
 * @summary 表单项
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Select, DatePicker } from 'antd'

import { flexLayout as formItemLayout } from 'Constants/layout'
import { IntlComponent } from 'Components/Common'

const { Item } = Form
const { Option } = Select
const { TextArea } = Input

class FormItem extends IntlComponent {

  static propTypes = {
    conf: PropTypes.object.isRequired,
  }

  renderOptions = () => {
    const { options } = this.props.conf
    if (!_.isArray || _.isEmpty(options)) {
      return null
    }
    return options && options.map(option => <Option key={option.key}>{option.value}</Option>)
  }

  renderElem = () => {
    const {
      type,
      width,
      placeholder,
      maxLength,
      mode,
      onChange,
      rows,
      autoFocus,
      htmlType,
      disabled,
      prefix,
    } = this.props.conf

    const elems = {
      Input: (
        <Input
          placeholder={this.localeMessage(placeholder)}
          maxLength={maxLength || 30}
          autoFocus={autoFocus}
          type={htmlType}
          disabled={disabled}
          onChange={onChange}
          prefix={prefix}
        />
      ),
      TextArea: (
        <TextArea
          placeholder={this.localeMessage(placeholder)}
          maxLength={maxLength || 50}
          style={{ resize: 'none' }}
          rows={rows || 3}
        />
      ),
      Select: (
        <Select
          mode={mode}
          onChange={onChange}
        >
          { this.renderOptions() }
        </Select>
      ),
      DatePicker: (
        <DatePicker
          style={{ width }}
          placeholder={this.localeMessage(placeholder)}
        />
      ),
    }

    return elems[type]
  }

  render() {
    const {
      layout,
      dataIndex,
      rules,
      initialValue,
      getFieldDecorator,
    } = this.props.conf

    let { label } = this.props.conf

    const extra = {}

    if (rules) {
      rules.forEach(rule => {
        if (rule.message) {
          rule.message = this.localeMessage(rule.message)
        }
      })
      extra.rules = rules
    }
    if (initialValue) {
      extra.initialValue = initialValue
    }
    if (label && _.isString(label)) {
      label = this.localeMessage(label)
    }

    return (
      <Item
        label={label}
        {...layout || formItemLayout}
      >
        {getFieldDecorator(dataIndex, extra)(
          this.renderElem()
        )}
      </Item>
    )
  }
}

export default FormItem
