import React from 'react'
import TitleLogo from './NavBar/titleLogo'
import SearchBar from './NavBar/searchBar'
import CurrencyCard from './NavBar/currencyCard'
import ThemeSwitchButton from './NavBar/themeSwitchButton'

const NavBar = () => {
  return (
    <div className='border-b border-secondaryText py-5 flex items-center justify-between bg-primaryBg text-white px-5 lg:px-20 2xl:px-36'>
        <div>
            <TitleLogo />
        </div>
        <div>
            <SearchBar/>
        </div>
        <div>
            <CurrencyCard currency='USD' amount={285.90}/>
        </div>
        <div>
            <ThemeSwitchButton/>
        </div>
    </div>
  )
}

export default NavBar