import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createBrand } from '../https/brandsApi'
import { HOME_ROUTE } from '../app/config/routs'

const useType = () => {
    const [name, setname] = useState<string>('')
    const [fileImage, setfileImage] = useState<any>(null)
 
    const [file, setfile] = useState<any>(null)
    const [fileDiv2, setfileDiv2] = useState<boolean>(false)
    const navigate = useNavigate()

    const fileloadType = (e:any)=>{
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        setfile(e.target.files[0])
        reader.onloadend = ()=>{
            setfileImage(reader.result)
            setfileDiv2(true)
               
        }
    }

    const createBrandFun = ()=>{
        if ( name !=='' && file!== null) {
            const formaData = new FormData()
            formaData.append('name',name)
            formaData.append('image',file)
           
            
        createBrand(formaData).then(data=>{
        if (name !== '' && file!=null) {
                console.log(data);
        }
    
            setname('')
            setfile(null)
            setfileImage(null)
            navigate(HOME_ROUTE)
            window.location.reload()
        })
        }else{
            alert('недостаточно данных')
        }
    }


  return {setname,fileImage,fileloadType,createBrandFun,name}
}

export default useType