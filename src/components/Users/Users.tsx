import React from 'react';
import {UserPropsType} from './UsersConteiner';
import axios from "axios";
import userAvatar from '../../assets/img/null_avatar.png'
import s from './Users.module.css'

export class Users extends React.Component<UserPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setSub(response.data.items)
        })
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onClickSubHandler = (id: string) => {
        this.props.onClickSub(id)
    }
    onClickUnSubHandler = (id: string) => {
        this.props.onClickUnSub(id)
    }
    changeCurrentPage = (currentPage: number)=>{
        this.props.changeCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setSub(response.data.items)
        })
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <>
                {pages.map(t => <span onClick={()=>this.changeCurrentPage(+t)} className={t===this.props.currentPage?s.selectedPage:undefined} key={t}>{t}</span>)}
                {this.props.users.map(t => {
                    return (
                        <div className={s.conteiner} key={t.id}>
                        <span><div>
                            <img
                                src={t.photos.small === null
                                    ? userAvatar
                                    : t.photos.small} alt='аваторки пользователей'/>
                        </div>
                            {t.followed ? <button onClick={() => this.onClickUnSubHandler(t.id)}>unsubscrib</button> :
                                <button onClick={() => this.onClickSubHandler(t.id)}>subscrib</button>}</span>
                            <span>
                            {t.name}
                        </span>
                        </div>
                    )
                })}
            </>
        )
    }
}

