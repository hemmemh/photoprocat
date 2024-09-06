import {memo} from 'react'

export const Shedule = () => {
  return (
    <div className="menu__shedule">
    <a className="menu__sheduleTel" href="tel:+74951703918">+7 495 170-39-18</ a>
    <div className="menu__sheduleText">Круглосуточно</div>
</div>
  )
}

export default memo(Shedule)
