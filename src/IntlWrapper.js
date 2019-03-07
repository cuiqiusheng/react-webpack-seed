import React from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import zh from 'react-intl/locale-data/zh'

import enUS from './locale/en'
import zhCN from './locale/zh'

addLocaleData([ ...en, ...zh ])
const intlLocales = {
  zh: zhCN,
  en: enUS,
}
const userLocale = localStorage.getItem('locale') || 'zh'

const IntlWrapper = ({ children }) => (
  <IntlProvider locale="en" messages={intlLocales[userLocale]}>
    { children }
  </IntlProvider>
)

export default IntlWrapper
