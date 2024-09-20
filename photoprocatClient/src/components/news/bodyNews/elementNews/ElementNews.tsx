import { useState, useEffect } from 'react';
import { getAllNews, IComment, INews } from '../../../../https/newsApi';
import { newsSlice } from '../../../../store2/reducers/NewsSlice';
import { API_URL } from '../../../../utils/config';
import AccordionOne from '../../../UI/accordionOne/AccordionOne';
import Loader from '../../../UI/loader/Loader';
import { useAppDispatch } from '../../../../hooks/reduxHooks';
import './elementNews.scss';
import format from 'date-fns/format';
import { ru } from 'date-fns/locale';
import Button2 from '../../../UI/button2/Button2';

const ElementNews = () => {
  const [loader, setloader] = useState<boolean>(false);
  const [news, setnews] = useState([]);
  const { setNewsId, setModalCooment } = newsSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    getAllNews().then((data) => {
      setnews(data);
      setloader(true);
    });
  }, []);

  const modalCommentId = (id: string) => {
    dispatch(setModalCooment(true));
    dispatch(setNewsId(id));
  };

  return (
    <div className="News__main main-news">
      {loader ? (
        news.map((el: INews) => {
          const date = format(+el.date, 'd MMMM yyyy', { locale: ru });

          return (
            <div key={el.title} className="main-news__new new-main">
              <div className="new-main__image">
                <img src={`${API_URL}/news/${el.image}`} alt="" />
              </div>
              <div className="new-main__date">{date}</div>
              <div className="new-main__name">{el.title}</div>
              <div className="new-main__text">{el.text}</div>
              <div className="new-main__button">
                <Button2
                  onClick={() => modalCommentId(el._id)}
                  className="buttonCart"
                >
                  Добавить комментарий{' '}
                </Button2>
              </div>

              <div className="new-main__cooments comments-main">
                <AccordionOne accordionClass="news">
                  <div className="comments-main__value">
                    {el.comments.length} комментариев
                  </div>
                  <div className="comments-main__body">
                    {el.comments.map((com: IComment) => (
                      <div key={com.text} className="comments-main__item">
                        <div className="comments-main__name">
                          {com.name} {com.sername}
                        </div>
                        <div className="comments-main__text">{com.text}</div>
                      </div>
                    ))}
                  </div>
                </AccordionOne>
              </div>
            </div>
          );
        })
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ElementNews;
