"use client"

import { PostContext } from "@/context/Post"
import { useContext } from "react"

export const Posts =()=>{
    const postCtx = useContext(PostContext);

    return(
        <div className="w-full h-full">
            <ul>
                {postCtx?.post.map((e)=>(
                    <li 
                        className="text-black"
                        key={e.id}
                    >{e.text}</li>
                ))
                }
            </ul>
        </div>
    )
}