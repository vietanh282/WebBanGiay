import  instance  from "./instance";

export const list =() =>{
    return instance.get(`/products`)
}

export const read =(id:string|number) =>{
    return instance.get(`/products/${id}`)
}

export const remove =(id:string|number) =>{
    return instance.delete(`/products/${id}`)
}

export const add =(product:any) =>{
    return instance.post(`/products`,product)
}
export const update =(product:any) =>{
    return instance.put(`/products/${product.id}`,product)
}