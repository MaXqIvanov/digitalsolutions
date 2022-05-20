
import React from 'react'
import { InfoView } from '../components/home_page/InfoView'
import { ViewProfile } from '../components/home_page/ViewProfile'
import s from '../scss/homePage.module.scss'

export const HomePage = () => {
  return (
    <div className={s.main}>
        <div className={s.block_img}>
            <div className={s.Title_Groups}>
                <div className={s.Title_Groups__Name}>
                    <span className={s.Big_Words}>T</span>WENTY
                    <span className={s.Big_Words}> O</span>NE
                    <span className={s.Big_Words}> P</span>ILOTS
                </div>
                <div className={s.Title_Groups__Data}>
                    22.03.23 в 21:00
                </div>
                <div className={s.back_shadow}></div>
            </div>
            <div className={s.buttons_block_img}>
                <div className={s.custom_arrow_btn_white}><span className={s.arrow_img_left}></span></div>
                <div className={s.custom_btn_buy_tickets_block}><div className={s.custom_btn_buy_tickets}>
                    <span>купить билеты</span>
                    </div></div>
                <div className={s.custom_arrow_btn_black}><span className={s.arrow_img_right}></span></div>
            </div>
        </div>
        <ViewProfile />
        <InfoView />
    </div>
  )
}
