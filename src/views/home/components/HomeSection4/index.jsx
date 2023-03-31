import React, { memo } from 'react'
import { SectionWrapper } from './style'
import PropTypes from 'prop-types'
import SectionHeader from '@/components/SectionHeader'
import ScrollView from '@/base_ui/ScrollView'

const HomeSection4 = memo(({ infoData = {} }) => {
  return (
    <SectionWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className='wrapper'>
        <ScrollView>
          {infoData.list.map((item) => (
            <div className='longfor-item' key={item.city}>
              <div className='content'>
                <img className='cover' src={item.picture_url} alt='' />
                <div class='info'>
                  <div class='city'>{item.city}</div>
                  <div class='price'>均价 {item.price}</div>
                </div>
                <div className='bg'></div>
              </div>
            </div>
          ))}
        </ScrollView>
      </div>
    </SectionWrapper>
  )
})

HomeSection4.propTypes = {
  infoData: PropTypes.object.isRequired,
}

HomeSection4.displayName = 'HomeSection4'

export default HomeSection4
