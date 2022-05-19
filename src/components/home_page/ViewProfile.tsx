
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeVision, getUsers } from '../../redux/usersSlice'
import s from '../../scss/homePage.module.scss'
import { CardUsers } from './CardUsers'

export const ViewProfile = () => {
    const dispatch = useDispatch();
    const [numb, setNumb] = useState(0);
    const users = useSelector((state:any)=> state.users.users)
    const {limit} = useSelector((state:any)=> state.users)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((data:any)=>
        dispatch(getUsers(data.data))
        )

    }, [])

    const change_users = (value:number)=> {
        if(numb <= limit && numb >= 0) {
            let newValue:any = numb + value;
            if(newValue < 0) newValue = 0
            if(newValue > limit) newValue = limit;
            setNumb(newValue)
            dispatch(changeVision(newValue))
        }
    }
    console.log('====================================');
    console.log(numb);
    console.log('====================================');
  return (
    <div className={s.block_info}>
        <div className={s.block_info_wrap}>
            <div className={s.block_info_text}>
                <div className={s.div_text1}><span>К</span>YПИЛИ БИЛЕТЫ</div>
                <div className={s.div_text_number}>932/ <span>1000</span></div>
            </div>
            <div className={s.wrap_cards}>
                {users ? 
                users.map((elem:any, index:number)=> <div key={index}><CardUsers elem={elem}/></div> )
                : <div>билеты ещё никто не купил</div>} 
                <div onClick={()=>{
                    change_users(1)
                    }} className={s.next_users +'btn btn-primary'}>+</div>
                <div onClick={()=>{
                    change_users(-1)
                    }} className={s.previous}>-</div>
           </div>
        </div>
    </div>
  )
}

