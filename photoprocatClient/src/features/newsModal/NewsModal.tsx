import { memo, useRef } from 'react';
import { Modal } from '../../components/UI/modal/Modal';
import Input from '../../components/UI/input/Input';
import { newsSlice } from '../../store2/reducers/NewsSlice';
import useNews from '../../hooks/useNews';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import Button2 from '../../components/UI/button2/Button2';
import MyTextArea from '../../components/UI/myTextArea/MyTextArea';
import { selectModalNews } from '../../store2/selectors/newsSelectors';

const NewsModal = memo(() => {
  const modalNews = useAppSelector(selectModalNews);
  const { setModalNews } = newsSlice.actions;
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    title,
    text,
    fileload,
    fileName,
    fileDiv,
    fileImage,
    clearFile,
    sendNews,
    settext,
    settitle,
  } = useNews();

  const activateInput = () => {
    inputRef.current?.click();
  };

  return (
    <Modal
      active={modalNews}
      setActive={(e) => dispatch(setModalNews(e))}
      modalClass="raiting"
    >
      <div className="RaitingModal">
        <div className="RaitingModal__top">
          <Input
            value={title}
            change={settitle}
            inputClass="registration gv"
            placeholder="Заголовок   *"
          />
        </div>
        <div className="RaitingModal__text">
          <MyTextArea
            value={text}
            setValue={(e) => settext(e)}
            placeholder="текст"
            className="RaitingModal__textarea"
          />
        </div>
        <div className="RaitingModal__images">
          <div className="RaitingModal__label">
            <input
              ref={inputRef}
              onChange={fileload}
              type="file"
              className="RaitingModal__file"
            />
            <div className="RaitingModal__l">
              <Button2 onClick={activateInput} className="buttonCart">
                {fileName ? `${fileName}` : 'Выбрать изображение'}{' '}
              </Button2>
            </div>
          </div>
          <div
            className={
              fileDiv
                ? 'RaitingModal__imageCover active '
                : 'RaitingModal__imageCover '
            }
          >
            <div className="RaitingModal__image">
              <span
                onClick={clearFile}
                className="icon-clear _icon-delete"
              ></span>
              <img src={fileImage as string} alt="" />
            </div>
          </div>
        </div>
        <div className="RaitingModal__button">
          <Button2 onClick={sendNews} className="buttonCart">
            Отправить
          </Button2>
        </div>
      </div>
    </Modal>
  );
});

export default NewsModal;
