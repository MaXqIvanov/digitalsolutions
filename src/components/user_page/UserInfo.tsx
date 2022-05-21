
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserReload } from '../../redux/usersSlice'
import s from '../../scss/userPage.module.scss'

export const UserInfo = () => {
    const dispatch = useDispatch()
    const { user, loadData } = useSelector((state:any) => state.users)

    useEffect(() => {
        if (user?.name == undefined) {
            let urlElements = window.location.pathname.split('/')
            let urlElelement = (urlElements[1])
            dispatch(setUserReload(urlElelement))
        }
    }, [loadData])
  return (
    <div>
        <div className={s.block_user_topLine}>
                <div className={s.block_user_name}>
                    <span>
                        {user?.name}
                    </span>
                </div>
            </div>
            <div className={s.block_user_bottomLine}>
                <div style={{overflow: 'hidden'}} className={s.block_user_bottomLine_main}>
                    <div className={s.block_user_city}><span>{user?.address?.city}</span></div>
                    <div className={s.block_user_mail}><span>{user?.email}</span></div>
                    <div className={s.block_user_phone}><span>{user?.phone}</span></div>
                    <div className={s.block_user_site}><span>web-site:{user?.website}</span></div>
                    <div className={s.block_user_company}><span>company:{user?.company?.name}</span>
                    <span>bs:{user?.company?.bs}</span>
                    </div>
                </div>
            </div>
    </div>
  )
}
