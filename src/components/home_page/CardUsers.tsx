
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../../redux/usersSlice'
import s from '../../scss/homePage.module.scss'
export const CardUsers = ({elem}:any) => {
  const navUser = useNavigate()
  const dispatch = useDispatch()

  const watchProfile = ()=> {
    dispatch(setUser(elem))
    navUser(`/${elem.id}`)
  }
  return (
    <div className={s.cards_users_block}>
        <div className={s.cards_users}>
            <div className={s.cards_users_wrap}>
                <div className={s.cards_users_name}>{elem.name}</div>
                <div className={s.cards_users_city}>{elem.address.city}</div>

                <div onClick={()=>watchProfile()} className={s.cards_button_profile}><span>Смотреть профиль</span></div>
            </div>
        </div>

    </div>
  )
}
