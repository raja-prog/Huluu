import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'
import {
  HomeIcon,
  LightningBoltIcon,
  BadgeCheckIcon,
  SearchIcon,
  CollectionIcon,
  UserIcon
} from '@heroicons/react/outline';

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='flex flex-col items-center h-auto sm:flex-row m-5 justify-between'>
<div className='flex flex-grow justify-evenly max-w-2xl ' >

    <HeaderItem title='Home' Icon={HomeIcon} ></HeaderItem>
    <HeaderItem 
    title='trending' Icon={LightningBoltIcon}
     ></HeaderItem>
    <HeaderItem 
    title='verified' Icon={BadgeCheckIcon}
     ></HeaderItem>
    <HeaderItem 
    title='collections' Icon={CollectionIcon}
     ></HeaderItem>
    <HeaderItem 
    title='search' Icon={SearchIcon}
     ></HeaderItem>
     <HeaderItem 
    title='account' Icon={UserIcon}
     ></HeaderItem>
</div>

<Image src='https://links.papareact.com/ua6' className='object-contain' width={200} height={100} alt='logo'/>
    </header>
  )
}

export default Header