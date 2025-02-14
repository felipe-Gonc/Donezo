import { PostContext } from "@/context/Post"
import { Post } from "@/types/Posts"
import { useContext } from "react"

export const PostAdd =(e:Post)=>{
    const postCtx = useContext(PostContext);

    return(
        <ul>
            {postCtx?.post.map((e)=>(
                <li></li>
            ))}
        </ul>
    )
}