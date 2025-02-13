import { Post } from "@/types/Posts";

type AddAction = {
    type:'add',
    payload:{
        text: string,
        id: number
    }
}

type EditAction = {
    type: 'edit',
    payload:{
        text: string,
        id: number
    }
}

type RemoveAction = {
    type: 'remove',
    payload:{
        id:number
    }
}

export type PostActions = AddAction | EditAction | RemoveAction;

export const postreducers = (post: Post[], action: PostActions) =>{
    switch(action.type){
        case 'add':
            return [
                ...post, {
                    id: action.payload.id,
                    text: action.payload.text
                }
            ]
        case 'edit':
            return post.map((item) =>
                item.id === action.payload.id
                    ? { ...item, ...action.payload }
                    : item
            )
        case 'remove':
            return post.filter(t => t.id !== action.payload.id);
        default:
            return post;
    }
}