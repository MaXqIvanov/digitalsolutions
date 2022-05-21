import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { OneComment } from '../components/one_post-page/OneComment'
import { getComments, getOnePost } from '../redux/postsSlice'
import { setUserReload } from '../redux/usersSlice'
import s from '../scss/onePostPage.module.scss'
export const OnePostPage = () => {
    const dispatch = useDispatch()
    const { user, loadData } = useSelector((state:any)=> state.users)
    const { onePost, comments } = useSelector((state:any)=> state.posts)
    let urlElements = window.location.pathname.split('/')
    let urlElelement = (urlElements[2])
    useEffect(() => {
        if (user?.name == undefined) {
            const searchString = new URLSearchParams(window.location.search);
            let currentId: any = searchString.get('userId');
            dispatch(setUserReload(Number(currentId)))
        }
        if (onePost?.title == undefined) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${urlElelement}`).then((elem:any)=>
            dispatch(getOnePost(elem.data))
        )
        }
    }, [loadData])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${urlElelement}`).then((elem:any)=>
            dispatch(getComments(elem.data))
    )}, [])
    
  return (
    <div className={s.main}>
        <div className={s.main_wrap}>
            <div className={s.block_info_user}>
                {user?.name}
            </div>
            <div className={s.block_posts}>
                <div className={s.block_posts_wrap}>
                    <div className={s.block_post_title}><span>{onePost?.title}</span></div>
                    <div className={s.block_post_body}><span>{onePost?.body}</span></div>
                </div>
            </div>
            <div className={s.block_comments}>
                <div className={s.block_comments_title}>Комментарии</div>
                <div>
                    {comments ? comments.map((elem:any)=><OneComment comment={elem}/>)
                    :<div>комментариев нет</div>
                    }
                </div>
            </div>
        </div> 
    </div>
  )
}
