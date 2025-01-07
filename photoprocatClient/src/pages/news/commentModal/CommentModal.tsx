import Input from '../../../shared/UI/input/Input';
import { Modal } from '../../../shared/UI/modal/Modal';
import { newsSlice } from '../../../entities/itemNews/model/NewsSlice';
import Button2 from '../../../shared/UI/button2/Button2';
import { selectModalCooment } from '../../../entities/itemNews/model/newsSelectors';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/reduxHooks';
import useComment from '../../../shared/hooks/useComment';

const CommentModal = () => {
  const modalCooment = useAppSelector(selectModalCooment);
  const { setModalCooment } = newsSlice.actions;
  const dispatch = useAppDispatch();

  const {
    addCommentToNews,
    setname,
    setsername,
    settextComment,
    sername,
    textComment,
    name,
  } = useComment();

  return (
    <Modal
      active={modalCooment}
      setActive={(e) => dispatch(setModalCooment(e))}
      modalClass="raiting"
    >
      <div className="RaitingModal">
        <div className="RaitingModal__top">
          <Input
            value={name}
            change={setname}
            inputClass="registration gv"
            placeholder="Имя  *"
          />
          <Input
            value={sername}
            change={setsername}
            inputClass="registration gv"
            placeholder="Фамилия  *"
          />
        </div>
        <div className="RaitingModal__text">
          <textarea
            value={textComment}
            onChange={(e) => settextComment(e.target.value)}
            placeholder="отзыв"
            className="RaitingModal__textarea"
          >
            {textComment}
          </textarea>
        </div>
        <div className="RaitingModal__button">
          <Button2 onClick={addCommentToNews} className="buttonCart">
            Отправить
          </Button2>
        </div>
      </div>
    </Modal>
  );
};

export default CommentModal;
