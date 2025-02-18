"use client"

import { PostContext} from "@/context/Post"
import { useContext, useState } from "react"

export const AddPost =()=>{
    const postCtx = useContext(PostContext)
    const [text, setText] = useState('')
    
    const add =()=>{
        postCtx?.dispatch({
            type:'add',
            payload:{
                id: postCtx.post.length,
                text: text
            }
        });
        setText('');
    }

    return(
        <div className="bg-purple-300 w-56 h-64 p-3 rounded-2xl">
            <textarea
                value={text}
                onChange={(e)=>setText(e.target.value)}
                className="w-full h-24 text-stone-800 rounded-xl outline-none p-2 mb-3"
            ></textarea>
            <hr className="border-purple-400" />
            <div className="my-3">
                <p className="font-bold text-mb">Color</p>
                <div className="flex gap-1">
                    <button className={`w-6 h-6 rounded-full border-2 bg-green-200 border-purple-400 cursor-pointer`}></button>
                    <button className={`w-6 h-6 rounded-full border-2 bg-yellow-200 border-purple-400 cursor-pointer`}></button>
                    <button className={`w-6 h-6 rounded-full border-2 bg-red-200 border-purple-400 cursor-pointer`}></button>
                </div>
            </div>
            <div className="flex justify-center">
                <button 
                    onClick={add}
                    className="bg-purple-500 px-3 py-2 rounded-lg font-bold border-2 border-purple-400 transition-all hover:bg-purple-400"
                >Adicionar</button>
            </div>
        </div>
    )
}