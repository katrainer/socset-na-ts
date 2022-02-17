import React from "react";
import s from "./MyPost.module.css"
import {MyPostsType} from "./MyPostsConteiner";
import {Post} from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const MyPosts: React.FC<MyPostsType> =
    ({
         postsData,
         setNewPostClick
     }) => {
        const posts = postsData.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)
        const onSubmit = (dataFrom:SendMessageForm)=>{

            setNewPostClick(dataFrom.message)
        }

        return (
            <div className={s.postBlock}>
                <h3>My posts</h3>
                <div>
                    <ContactForm onSubmit={onSubmit}/>
                </div>
                <div className={s.posts}>
                    {posts}
                </div>
            </div>
        )
    }
export type SendMessageForm = {
    message: string
}
const SendMessage: React.FC<InjectedFormProps<SendMessageForm>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field name='message' component='textarea' placeholder='write message'/>
        <button>add post</button>
    </form>
}
const ContactForm = reduxForm<SendMessageForm>({form: 'sendMessage'})(SendMessage)