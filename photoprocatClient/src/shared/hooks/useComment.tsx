import { useState } from 'react';
import { addComment } from '../https/newsApi';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from './reduxHooks';
import { selectUser } from '../../entities/user/model/userSelectors';
import { selectNewsId } from '../../entities/itemNews/model/newsSelectors';
import { HOME_ROUTE } from '../../app/config/routs';

const useComment = () => {
  const user = useAppSelector(selectUser);
  const newsId = useAppSelector(selectNewsId);
  
  const [name, setname] = useState<string>(user?.name ?? '');
  const [sername, setsername] = useState<string>(user?.sername ?? '');
  const [textComment, settextComment] = useState<string>('');
  const navigate = useNavigate();

  const addCommentToNews = () => {
    if (name !== '' && sername !== '' && textComment !== '') {
      addComment({ name, sername, text: textComment, news: newsId }).then(
        () => {
          navigate(HOME_ROUTE);
          window.location.reload();
        }
      );
    } else {
      alert('недостаточно данных');
    }
  };

  return {
    setname,
    setsername,
    settextComment,
    addCommentToNews,
    sername,
    textComment,
    name,
  };
};

export default useComment;
