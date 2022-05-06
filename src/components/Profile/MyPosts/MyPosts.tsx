import React from 'react';
import s from './MyPost.module.css'
import {MyPostsType} from './MyPostsConteiner';
import {Post} from './Post/Post';
import {useFormik} from 'formik';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/store';

type valuesType = {
    messages: string,
}
export const MyPosts: React.FC<MyPostsType> =
    React.memo(({
                    postsData,
                    setNewPostClickAC
                }) => {
        const photo = useSelector<AppRootStateType, string>(state => state.profile.userProfilePage.photos.small)
        const posts = postsData.map(p => <Post photo={photo} key={p.id} message={p.message} likeCount={p.likeCount}/>)
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
                        rows={5}
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
