
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getPosts } from '../../redux/postsSlice'
import s from '../../scss/userPage.module.scss'
export const UserPosts = () => {
    const navPosts = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state:any)=> state.users)
    const {posts} = useSelector((state:any)=> state.posts)
    useEffect(() => {
        let urlElements = window.location.pathname.split('/')
        let urlElelement = (urlElements[1])
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${urlElelement}`).then((elem:any)=>
             dispatch(getPosts(elem.data))
        )
    }, [])
    
  return (
    <div className={s.block_posts}>
        <div className={s.block_posts_title}>Посты</div>
        <div className={s.block_posts_post}>
            {posts ? posts.map((elem:any)=> <div key={elem.id} className={s.templatePost}>
                <div className={s.templatePost_wrap}>
                    <div>{elem.title}</div>
                    <div className={s.post_body}>{elem.body}</div>
                    <span className={s.post_more}>...</span>
                </div>
            </div>)  : <div>Постов нет</div>}
            <div onClick={()=>navPosts('/posts')} className={s.view_allPosts}><span>Посмотреть все</span></div>
        </div>
    </div>
  )
}
