import React, { memo, useState } from 'react'
import { SectionWrapper } from './style'
import PropTypes from 'prop-types'
import SectionHeader from '@/components/SectionHeader'
import SectionFooter from '@/components/SectionFooter'
import SectionList from '@/components/SectionList'

const HomeSection2 = memo(({ infoData = {} }) => {
  const [name, setName] = useState('佛山')
  
  return (
    <SectionWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionList list={infoData.dest_list[name]} width="33.3333%" />
      <SectionFooter name={name} />
    </SectionWrapper>
  )
})

HomeSection2.propTypes = {
  infoData: PropTypes.object.isRequired,
}

HomeSection2.displayName = 'HomeSection2'

export default HomeSection2
