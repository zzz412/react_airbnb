import React, { memo, useCallback, useMemo, useState } from 'react'
import { SectionWrapper } from './style'
import PropTypes from 'prop-types'
import SectionHeader from '@/components/SectionHeader'
import SectionFooter from '@/components/SectionFooter'
import SectionList from '@/components/SectionList'
import SectionTabs from '@/components/SectionTabs'

const HomeSection2 = memo(({ infoData = {} }) => {
  // 默认第一个字段的name作为初始显示
  const [name, setName] = useState(infoData.dest_address[0].name)

  // 处理tabs需要的数据 =>  ['佛山', '北京', '长沙']
  const tabList = useMemo(() => infoData.dest_address.map((item) => item.name), [infoData])

  // 处理tab改变
  const tabChange = useCallback((i) => { setName(tabList[i]) }, [tabList])

  return (
    <SectionWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabList={tabList} tabChange={tabChange} />
      <SectionList list={infoData.dest_list[name]} width='33.3333%' />
      <SectionFooter name={name} />
    </SectionWrapper>
  )
})

HomeSection2.propTypes = {
  infoData: PropTypes.object.isRequired,
}

HomeSection2.displayName = 'HomeSection2'

export default HomeSection2
