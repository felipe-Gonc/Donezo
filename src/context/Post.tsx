"use client"

import { PostActions, postReducers } from "@/reducers/postReducers";
import { Post } from "@/types/Posts";
import { createContext, Dispatch, ReactNode, useContext, useEffect, useReducer } from "react"

const STORAGE_KEY = 'post'

type PostContext = {
    post: Post[];
    dispatch: Dispatch<PostActions>;
}

export const PostContext = createContext<PostContext| null>(null);

type Props = {
    children: ReactNode;
}

export const PostProvider =({children}: Props)=>{
    const [post, dispatch] = useReducer(
        postReducers,
        JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    )

    useEffect(()=>{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(post))
    }, [post]);

    return(
        <PostContext.Provider value={{post, dispatch}}>
            {children}
        </PostContext.Provider>
    )
}

export const usePost =()=> useContext(PostContext)