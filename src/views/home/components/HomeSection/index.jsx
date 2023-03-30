import React, { memo } from 'react'
import { SectionWrapper } from './style'
import PropTypes from 'prop-types'
import SectionHeader from '@/components/SectionHeader'
import SectionFooter from '@/components/SectionFooter'
import SectionList from '@/components/SectionList'

const HomeSection = memo(({ infoData = {} }) => {
  return (
    <SectionWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionList list={infoData.list} width="25%" />
      <SectionFooter />
    </SectionWrapper>
  )
})

HomeSection.propTypes = {
  infoData: PropTypes.object.isRequired,
}

HomeSection.displayName = 'HomeSection'

export default HomeSection
