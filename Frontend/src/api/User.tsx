import  instance  from "./instance";
import { IUsers } from "../models/User";

export const listUser =() =>{
    return instance.get(`/users`)
}

export const readUser =(id:string|number) =>{
    return instance.get(`/users/${id}`)
}

export const removeUser =(id:string|number) =>{
    return instance.delete(`/users/${id}`)
}

export const addUser =(users:any) =>{
    return instance.post(`/users`,users)
}
export const updateUser =(users:any) =>{
    return instance.put(`/users/${users.id}`,users)
}

export const signup = (user: IUsers) => {
    const url = `/signup`;
    return instance.post(url, user);
}
export const signin = (user: IUsers) => {
    const url = `/signin`;
    return instance.post(url, user);
}