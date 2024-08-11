import React from 'react'
import { Dots,CommentIcon, ReplyIcon, LikeIcon, ShareIcon, StatisticIcon } from './Icons'

function PostItem({item}) {
  return (
    <li className='flex items-start relative  space-x-[15px] pt-[10px] pb-[21px] px-[25px] border-b-[1px] border-slate-400'>
        <img src={item.imgUrl} alt="Avatar Icon" width={60} height={60} />
        <div className=''>
        <div>
            <div className='flex space-x-[5px]'>
                <strong>{item.name}</strong>
                <span>{item.email}</span>
            </div>
            <p>{item.decription}</p>
        </div>
        {item.postImg ?  <img className='mt-[15px]' src={item.postImg} alt="Post img" width={679} height={453}/> : "" }
        <div className='flex justify-between my-[22px]'>
            <button className='text-[#536471] flex items-center gap-[10px]'>
                <CommentIcon />
                <span>{item.commentCount}</span>
            </button>
            <button className='text-[#536471] flex items-center gap-[10px]'>
                <ReplyIcon/>
                <span>{item.replyCount}</span>
            </button>
            <button className='text-[#536471] flex items-center gap-[10px]'>
                <LikeIcon/>
                <span>{item.likeCount}</span>
            </button>
            <button className='text-[#536471] flex items-center gap-[10px]'>
                <ShareIcon/>
                <span>{item.shareCount}</span>
            </button>
            <button className='text-[#536471] flex items-center space-x-[10px]'>
                <StatisticIcon/>
                <span>{item.statisticCount}</span>
            </button>
        </div>
        </div>
        <button className='absolute top-[21px] right-[25px]'>
            <Dots/>
        </button>
    </li>
  )
}

export default PostItem
