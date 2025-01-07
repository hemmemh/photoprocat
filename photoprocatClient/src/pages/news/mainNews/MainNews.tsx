import BodyNews from '../bodyNews/BodyNews';
import NewsModal from '../../../features/createNews/CreateNews';
import CommentModal from '../commentModal/CommentModal';
import Navigation from '../../../shared/UI/navigation/Navigation';
import { newsSlice } from '../../../entities/itemNews/model/NewsSlice';
import './news.scss';
import Button2 from '../../../shared/UI/button2/Button2';
import { useAppDispatch } from '../../../shared/hooks/reduxHooks';

const MainNews = () => {
  const { setModalNews } = newsSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <main className="News">
      <div className="News__container">
        <Navigation navigationClass="news">
          Главная / Новости компании
        </Navigation>
        <h1 className="News__title">
          <span>Новости</span> Компании
        </h1>
        <div className="News__button">
          <Button2
            onClick={() => dispatch(setModalNews(true))}
            className="buttonCart"
          >
            добавить новость
          </Button2>
        </div>
        <BodyNews />
      </div>
      <NewsModal />
      <CommentModal />
    </main>
  );
};

export default MainNews;
