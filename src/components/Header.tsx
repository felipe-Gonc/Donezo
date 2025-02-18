"use client"

import { useState } from "react"
import { AddPost } from "./AddPost"
import { usePost } from "@/context/Post"

export const Header =()=>{

    const [show, setShow] = useState(false)
    const mostrar =()=>{
        setShow(!show)
    }

    return (
        <div className="bg-blue-300 w-64 flex p-3 h-full flex-col items-center gap-6 rounded-2xl">
            <h2
                className="font-bold text-3xl"
            >Donezo</h2>
            <button 
                onClick={mostrar}
                className="bg-blue-500 w-24 h-10 rounded-lg border-blue-400  border-2 hover:bg-blue-400 transition-all"
            >
                {show === true ? `Fechar` : `Novo Post`}
            </button>
            {show &&
                <AddPost/>
            }
        </div>
    )
}