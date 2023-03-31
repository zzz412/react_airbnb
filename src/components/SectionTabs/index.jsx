import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ScrollView from '@/base_ui/ScrollView'

const SectionTabs = memo(({ tabList = [], tabChange }) => {
  const [current, setCurrent] = useState(0)

  const changeCount = (i) => {
    setCurrent(i)
    tabChange && tabChange(i)
  }

  return (
    <TabsWrapper>
      <ScrollView>
        {tabList.map((item, index) => (
          <div
            key={item}
            className={classNames('item', { active: index === current })}
            onClick={() => changeCount(index)}
          >
            {item}
          </div>
        ))}
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabList: PropTypes.array.isRequired,
  tabChange: PropTypes.func
}

SectionTabs.displayName = 'SectionTabs'

export default SectionTabs
