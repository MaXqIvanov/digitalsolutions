import React from 'react';
import { Form } from 'react-bootstrap';
import s from '../../scss/homePage.module.scss';
export const InfoView = () => {
  return (
    <div className={s.block_about}>
      <div className={s.block_about_wrap}>
        <div className={s.block_about_top}>
          <div className={s.block_about_top_left}>
            <div className={s.block_about_top_left_title}>О площадке</div>
            <div className={s.block_about_top_left_group}>
              <div className={s.block_about_top_left_groupLine}>
                <div className={s.block_about_top_left_line}></div>
                <div className={s.block_about_top_left_boldline}></div>
              </div>
              <div>
                <div className={s.block_about_text_top}>
                  Современная площадка для проведения концертов и других мероприятий любой
                  сложности.
                </div>
                <div className={s.block_about_text_bottom}>
                  Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые
                  решения под все основные задачи любого события, а также современное оборудование,
                  соответствующее самым высоким мировым стандартам.
                </div>
              </div>
            </div>
          </div>
          <div className={s.block_about_top_right}>
            <div className={s.block_about_top_right_title}>
              Оставить заявку на проведение концерта
            </div>
            <Form className={s.form_block_about}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  className={s.form_control_about}
                  placeholder="Расскажите о вашем предложении"
                  as="textarea"
                  rows={8}
                />
              </Form.Group>
            </Form>
            <div className={s.button_about_send}>
              <span>отправить</span>
            </div>
          </div>
        </div>
        <div className={s.block_about_bottom}>
          <div className={s.block_about_bottom_title}>О группе</div>
          <div className={s.block_about_bottom_text}>
            Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо. Группа образовалась в
            2009 году и на данный момент состоит из Тайлера Джозефа и Джоша Дана. Коллектив
            самостоятельно выпустил два альбома: Twenty One Pilots в 2009 и Regional at Best в 2011.
          </div>
        </div>
      </div>
    </div>
  );
};
