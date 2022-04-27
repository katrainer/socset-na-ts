import React from 'react';
import s from './MyPost.module.css'
import {MyPostsType} from './MyPostsConteiner';
import {Post} from './Post/Post';
import {useDispatch} from 'react-redux';
import {useFormik} from 'formik';

type valuesType = {
    messages: string,
}
export const MyPosts: React.FC<MyPostsType> =
    React.memo(({
                    postsData,
                    setNewPostClickAC
                }) => {
        const posts = postsData.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>)
        const formik = useFormik({
            initialValues: {
                messages: '',
            },
            onSubmit: (values: valuesType) => {
                setNewPostClickAC(values.messages)
                formik.resetForm()
            },
        })
        return (
            <div className={s.mainContainer}>
                <div className={s.newPostContainer}>
                    <span>My posts</span>
                    <form onSubmit={formik.handleSubmit} className={s.formContainer}>
                    <textarea
                        name="messages"
                        id="messages"
                        placeholder="write"
                        onChange={formik.handleChange}
                        value={formik.values.messages}
                    />
                        <button type={'submit'}>Add new post</button>
                    </form>
                </div>
                <div className={s.posts}>
                    {posts}
                </div>
            </div>
        )
    })
