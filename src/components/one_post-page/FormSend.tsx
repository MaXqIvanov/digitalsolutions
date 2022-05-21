
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import s from '../../scss/onePostPage.module.scss'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addComments } from '../../redux/postsSlice'

export const FormSend = ({ urlElelement, setIsForm, isForm }:any) => {
    const dispatch = useDispatch()
    const { 
        register,
        formState: {
        errors
        },
        handleSubmit,
        reset,
      } = useForm({
        mode: "onBlur"
      });
   const onSubmit = (data:any)=>{
        alert("Ваш комментарий был успешно отправлен")
        axios.post(`https://jsonplaceholder.typicode.com/posts/${urlElelement}/comments`,{
            'name': data.name,
            'email': data.email,
            'body': data.comment
        })
        .then((data:any)=> dispatch(addComments(data.data)))
        reset()
      }

  return (
    <div className={s.main_form}>
        <div className={s.main_form_wrap}>
        <Form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <Form.Group>
                <Form.Label>Имя</Form.Label>
                <Form.Control autoComplete="off" {
              ...register('name',{
                required: "обязательно для заполнения",
                minLength: {
                  value:1 ,
                  message: 'минимальная длина 1 символа'
                }})} type="text" placeholder="Ваше имя" />
            </Form.Group>
            <Form.Group className="mb-3 mt-1" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control {
                     ...register('email',{
                        required: "обязательно для заполнения",
                        minLength: {
                          value:1 ,
                          message: 'минимальная длина 1 символа'
                        }})}
                type="email" placeholder="Ваш email" />
            </Form.Group>
            <Form.Group className="mb-3 mt-1" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Введите ваш комментарий</Form.Label>
                <Form.Control
                {
                    ...register('comment',{
                       required: "обязательно для заполнения",
                       minLength: {
                         value:5 ,
                         message: 'минимальная длина 5 символов'
                       }})}
                as="textarea" rows={3} />
            </Form.Group>
            <div className={s.btn_send_block}>
                <Button className={s.btn_send_form} variant="dark" type="submit">
                    Отправить
                </Button>
            </div>
            {errors?.name ? <div className={s.error_message}>
                {errors.name.message} </div> : errors?.email ? 
                <div className={s.error_message}>
                {errors.email.message} </div> : errors?.comment ? 
                <div className={s.error_message}>
                {errors.comment.message} </div> : <></>}
        </Form>

        <div onClick={()=>setIsForm(!isForm)} className={s.close_button}></div>
        </div>
    </div>
  )
}


