import React from "react";
import s from "./MyPost.module.css"
import {MyPostsType} from "./MyPostsConteiner";
import {Post} from "./Post/Post";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";

type valuesType = {
    messages: string,
}
export const MyPostsFormik: React.FC<MyPostsType> =
    ({
         postsData,
         setNewPostClick
     }) => {
        const dispatch = useDispatch()
        const posts = postsData.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)
        const formik = useFormik({
            initialValues: {
                messages: '',
            },
            onSubmit: (values: valuesType) => {
                dispatch(setNewPostClick(values.messages))
            },
        })
        return (
            <div className={s.postBlock}>
                <h3>My posts</h3>
                <form onSubmit={formik.handleSubmit}>
                    <textarea
                        name="messages"
                        id="messages"
                        placeholder='write'
                        onChange={formik.handleChange}
                        value={formik.values.messages}
                    />
                    <button type={"submit"}>dd message</button>
                </form>
                <div className={s.posts}>
                    {posts}
                </div>
            </div>
        )
    }
