import React from "react";

export const usingBaseConverter=()=>{
    const baseConvertor = React.useCallback((file:File)=>{
        return new Promise((resolve:any, reject:any)=>{
            const reader = new FileReader();
        
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result)
            reader.onerror = err => reject(err)
            })
       },[])
   return {baseConvertor}    
}

export default usingBaseConverter;