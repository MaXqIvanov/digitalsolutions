import React from 'react'
import { useNavigate } from 'react-router-dom';
import s from '../../scss/postsPage.module.scss'
export const Template_post = ({elem, id}:any) => {
  const navOnePost = useNavigate()
  console.log(elem);
  
  return (
    <div className={s.temp_post_main}>
      <div className={s.temp_post_main_wrap}>
        <div className={s.temp_post_title}>{elem.title}</div>
        <div className={s.temp_post_body}>{elem.body}</div>
        <span className={s.temp_post_more}>...</span>
        <div onClick={()=>navOnePost(`/posts/${elem.id}?userId=${id}`)} className={s.temp_button_post}><span>посмотреть подробнее</span></div>
      </div>
    </div>
  )
}
