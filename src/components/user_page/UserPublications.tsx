
import React from 'react'
import s from '../../scss/userPage.module.scss'
export const UserPublications = () => {
  return (
    <div className={s.block_publications}>
      <div className={s.block_publications_wrap}>
         <div className={s.block_pub_title}>Публикации</div>
         <div className={s.block_pub_rect}>
           <div className={s.rect1}></div>
           <div className={s.rect2}></div>
           <div className={s.rect3}></div>
           <div className={s.rect4}></div>
           <div className={s.rect5}></div>
           <div className={s.rect6}></div>
         </div>
      </div>
    </div>
  )
}
