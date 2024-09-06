import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addNews } from '../https/newsApi'
import { HOME_ROUTE } from '../app/config/routs'

const useNews = () => {

    const [fileImage, setFileImage] = useState<any>(null)
    const [fileName, setFileName] = useState<string | null>('')
    const [fileDiv, setFileDiv] = useState<boolean>(false)
    const [file, setfile] = useState<any>(null)
    const [text, settext] = useState<string>('')
    const [title, settitle] = useState<string>('')

    const navigate = useNavigate()


    const fileload = (e:any)=>{
        let reader = new FileReader();
       
        reader.readAsDataURL(e.target.files[0]);
        setfile(e.target.files[0])
        reader.onloadend = ()=>{
            setFileImage(reader.result)
            setFileName(e.target.files[0].name)
            setFileDiv(true)
               
        }

    }


    const clearFile = ()=>{
        console.log('6666');
        setFileDiv(false)
        setFileImage(null)
        setFileName(null)
        setfile(null)


     }


     const sendNews = ()=>{
        if (title !== '' && text !== '' && file!== null) {
            const formaData = new FormData()
            formaData.append('title',title)
            formaData.append('text',text)
            formaData.append('image',file)
           addNews(formaData).then(data=>{
            settitle('')
            settext('')
            setfile(null)
            setFileImage(null)
            setFileDiv(false)
            navigate(HOME_ROUTE)
            window.location.reload()
            
           })
        }else{
            alert('недостаточно данных')
        }
      
        
    }


  return {fileload,clearFile,sendNews,fileImage,fileName,fileDiv,text,title,settext,settitle}
}

export default useNews