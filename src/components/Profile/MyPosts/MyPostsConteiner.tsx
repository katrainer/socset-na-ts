import {AppRootStateType} from '../../../redux/store';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {setNewPostClickAC} from '../../../redux/reducer/profilePageReducer';

type MapStateToPropsType = {
    postsData: PostDataType[]
}
type MapDispatchToPropsType = {
    setNewPostClickAC: (e: string) => void
}
export type MyPostsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        postsData: state.profile.postsData,
    }
}
export const MyPostsContainer = connect(mapStateToProps,
    {setNewPostClickAC}
)(MyPosts)

export type PostDataType = {
    id: string
    message: string
    likeCount: number
}