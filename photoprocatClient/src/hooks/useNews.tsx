import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNews } from '../https/newsApi';
import { HOME_ROUTE } from '../app/config/routs';

const useNews = () => {
  const [fileImage, setFileImage] = useState<string | ArrayBuffer | null>(null);
  const [fileName, setFileName] = useState<string | null>('');
  const [fileDiv, setFileDiv] = useState<boolean>(false);
  const [file, setfile] = useState<File | null>(null);
  const [text, settext] = useState<string>('');
  const [title, settitle] = useState<string>('');

  const navigate = useNavigate();

  const fileload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (!e.target) return;
    const file = e.target.files?.[0];
    if (!file) return;
    reader.readAsDataURL(file);
    setfile(file);
    reader.onloadend = () => {
      setFileImage(reader.result);
      setFileName(file.name);
      setFileDiv(true);
    };
  };

  const clearFile = () => {
    console.log('6666');
    setFileDiv(false);
    setFileImage(null);
    setFileName(null);
    setfile(null);
  };

  const sendNews = () => {
    if (title !== '' && text !== '' && file !== null) {
      const formaData = new FormData();
      formaData.append('title', title);
      formaData.append('text', text);
      formaData.append('image', file);
      addNews(formaData).then(() => {
        settitle('');
        settext('');
        setfile(null);
        setFileImage(null);
        setFileDiv(false);
        navigate(HOME_ROUTE);
        window.location.reload();
      });
    } else {
      alert('недостаточно данных');
    }
  };

  return {
    fileload,
    clearFile,
    sendNews,
    fileImage,
    fileName,
    fileDiv,
    text,
    title,
    settext,
    settitle,
  };
};

export default useNews;
