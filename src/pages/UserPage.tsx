import React from 'react';
import { UserInfo } from '../components/user_page/UserInfo';
import { UserPosts } from '../components/user_page/UserPosts';
import { UserPublications } from '../components/user_page/UserPublications';
import s from '../scss/userPage.module.scss';

export const UserPage = () => {
  return (
    <div className={s.main}>
      <div className={s.block_user}>
        <UserInfo />
        <div className={s.buttons_user}>
          <div className={s.block_user_button_write}>
            <span>Написать сообщение</span>
          </div>
          <div className={s.block_user_button_offer}>
            <span>Предложить сходить на концерт</span>
          </div>
        </div>
      </div>
      <UserPosts />
      <UserPublications />
    </div>
  );
};
