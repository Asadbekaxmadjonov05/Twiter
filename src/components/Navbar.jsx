import React from 'react';
import { Link,} from 'react-router-dom';
import {Dots, TwitterIcon, HomeIcon, ExploreIcon, NotificationsIcon, MassagesIcon , BookmarksIcon, ListsIcon, ProfileFillIcon, MoreICon } from "../components/Icons";
import NavbarItem from './NavbarItem';
import Button from "../components/Button"
import Avatar from "../assets/images/avatar.png"

function Navbar() {
  const userData = JSON.parse(window.localStorage.getItem("token"))
    const navbarList = [
        {
            id:1,
            titel:"Home",
            path:"/",
            icon:<HomeIcon/>,
        },
        {
            id:2,
            titel:"Explore",
            path:"/explore",
            icon:<ExploreIcon/>,
        },
        {
            id:3,
            titel:"Notification",
            path:"/notification",
            icon:<NotificationsIcon/>,
        },
        {
            id:4,
            titel:"Massages",
            path:"/massages",
            icon:<MassagesIcon/>,
        },
        {
            id:5,
            titel:"Bookmarks",
            path:"/bookmarks",
            icon:<BookmarksIcon/>,
        },
        {
            id:6,
            titel:"Lists",
            path:"/lists",
            icon:<ListsIcon/>,
        },
        {
            id:7,
            titel:"ProfileFill",
            path:"/profileFill",
            icon:<ProfileFillIcon/>,
        },
        {
            id:8,
            titel:"More",
            path:"/more",
            icon:<MoreICon/>,
        },
    ]
  return (
    <div className="w-[20%] border-r-[1px]  h-[100vh] border-slate-400 pt-[31px] pr-[53px] overflow-y-auto">
      <Link to={'/'}>
        <TwitterIcon />
      </Link>
      <ul className='mt-[49px] mb-[30px] space-y-[30px]'>
        {navbarList.map(item =><NavbarItem key={item.id} item={item}/>)}
      </ul>
      <Button title={"Tweeet"} type={'button'}/>
      <div className='flex  items-center gap-[20px] mt-[260px]'>
        <div className='flex space-x-2'>
        <img src={Avatar} alt="Avatar Icon" width={50} height={50} />
        <div className='flex flex-col'>
          <strong>{userData.login}</strong>
          <a href='mailto:@bobur_mavlonov'>@{userData.login}</a>
        </div>
        </div>
        <button><Dots/></button>
      </div>
    </div>
  );
}

export default Navbar;
