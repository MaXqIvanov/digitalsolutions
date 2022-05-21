
import React from 'react'
import s from '../../scss/onePostPage.module.scss'
export const OneComment = ({ comment }: any) => {
  return (
    <div className={s.main_comment}>
      <div className={s.main_comment_wrap}>
        <div className={s.comment_name}>{comment.name}</div>
        <div className={s.comment_email}>email: {comment.email}</div>
        <div className={s.comment_body}>{comment.body}</div>
      </div>
    </div>
  )
}
