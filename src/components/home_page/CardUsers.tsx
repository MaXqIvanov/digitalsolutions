
import React from 'react'
import s from '../../scss/homePage.module.scss'
export const CardUsers = ({elem}:any) => {
  return (
    <div className={s.cards_users_block}>
        <div className={s.cards_users}>
            <div className={s.cards_users_wrap}>
                <div>{elem.name}</div>
                <div>{elem.city}</div>

                <div className={s.cards_button_profile}><span>Смотреть профиль</span></div>
            </div>
        </div>

    </div>
  )
}
