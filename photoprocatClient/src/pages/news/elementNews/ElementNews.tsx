import { useState, useEffect } from 'react';
import './elementNews.scss';
import format from 'date-fns/format';
import { ru } from 'date-fns/locale';
import { newsSlice } from '../../../entities/itemNews/model/NewsSlice';
import { useAppDispatch } from '../../../shared/hooks/reduxHooks';
import { getAllNews, IComment, INews } from '../../../shared/https/newsApi';
import { API_URL } from '../../../shared/utils/config';
import Button2 from '../../../shared/UI/button2/Button2';
import AccordionOne from '../../../shared/UI/accordionOne/AccordionOne';
import Loader from '../../../shared/UI/loader/Loader';


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
            <article key={el.title} className="main-news__new new-main">
              <div className="new-main__image">
                <img src={`${API_URL}/news/${el.image}`} alt="" />
              </div>
              <div className="new-main__date">{date}</div>
              <h3 className="new-main__name">{el.title}</h3>
              <p className="new-main__text">{el.text}</p>
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
            </article>
          );
        })
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ElementNews;
