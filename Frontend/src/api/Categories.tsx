import  instance  from "./instance";

export const listCategory =() =>{
    return instance.get(`/categories`)
}

export const readCategory =(id:string|number) =>{
    return instance.get(`/categories/${id}`)
}

export const removeCategory =(id:string|number) =>{
    return instance.delete(`/categories/${id}`)
}

export const addCategory =(categori:any) =>{
    return instance.post(`/categories`,categori)
}
export const updateCategory =(categori:any) =>{
    return instance.put(`/categories/${categori.id}`,categori)
}