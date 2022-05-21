import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TemplatePost } from '../components/posts_page/TemplatePost';
import { getPosts } from '../redux/postsSlice';
import { setUserReload } from '../redux/usersSlice';
import s from '../scss/postsPage.module.scss';

export const PostsPage = () => {
  const dispatch = useDispatch();
  const { user, loadData } = useSelector((state: any) => state.users);
  const { postHidden } = useSelector((state: any) => state.posts);
  useEffect(() => {
    if (user?.name == undefined) {
      const searchString = new URLSearchParams(window.location.search);
      const currentId: any = searchString.get('userId');
      dispatch(setUserReload(Number(currentId)));
    }
    if (postHidden?.title == undefined) {
      const searchString = new URLSearchParams(window.location.search);
      const currentId: any = searchString.get('userId');
      axios
        .get(`https://jsonplaceholder.typicode.com/posts?userId=${currentId}`)
        .then((elem: any) => dispatch(getPosts(elem.data)));
    }
  }, [loadData]);

  return (
    <div className={s.main}>
      <div className={s.main_wrap}>
        <div className={s.block_name}>Все посты - {user?.name}</div>
        <div className={s.container_posts}>
          {postHidden ? (
            postHidden.map((elem: any) => (
              <div key={elem.id}>
                <TemplatePost id={user.id} elem={elem} />
              </div>
            ))
          ) : (
            <div>постов нет</div>
          )}
        </div>
      </div>
    </div>
  );
};
