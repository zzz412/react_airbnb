import IconSearchBar from '@/assets/svg/icon-search-bar'
import React, { memo, useMemo, useState } from 'react'
import { CenterWrapper } from './style'
import search_titles from "@/assets/data/search_titles.json";
import SearchTabs from "@/layout/components/AppHeader/components/SearchTabs";
import SearchInfos from "@/layout/components/AppHeader/components/SearchInfos";
import { CSSTransition } from "react-transition-group";


const HeaderCenter = memo(({isSearch, clickSearch}) => {
  const [index, setIndex] = useState(0)
  const titles = useMemo(() => search_titles.map(item => item.title), [])

  const tabClick = (index) => {
    setIndex(index)
  }

  const barClick = () => {
    clickSearch && clickSearch()
  }

  return (
    <CenterWrapper>
        <CSSTransition classNames="bar" in={!isSearch} timeout={250} unmountOnExit>
          <div className='search-bar' onClick={barClick}>
            <div className='text'>搜索房源和体验</div>
            <div className='icon'>
              <IconSearchBar/>
            </div>
          </div>
        </CSSTransition>
        <CSSTransition classNames="tabs" in={isSearch} timeout={250} unmountOnExit>
          <div className='search-tabs'>
            <SearchTabs titles={titles} tabClick={tabClick}/>
            <div className='items'>
              <SearchInfos infos={search_titles[index].searchInfos}/>
            </div>
          </div>
        </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter
