import React from 'react'
import './footer.scss'
export const Footer = () => {
  return (
   <div className="Footer">
    <div className="Footer__top topFooter">
        <div className="topFooter__container">
            <div className="topFooter__body">
                <div className="topFooter__left leftTopFooter">
                    <div className="leftTopFooter__icon _icon-mail"></div>
                    <div className="leftTopFooter__texts">
                        <div className="leftTopFooter__topText">Подпишитесь</div>
                        <div className="leftTopFooter__bottomText">на новости и акции</div>
                    </div>
                    
                </div>
                <div className="topFooter__center centerTopFooter">
                    <input type="text" placeholder='Введите e-mail' className='centerTopFooter__input' />
                    <div className="centerTopFooter__button _icon-mail"><span>Подписаться</span> </div>
                </div>
                <div className="centerTopFooter__right rightCenter">
                    <div className="rightCenter__phone _icon-phone">Заказать звонок</div>
                </div>
                
            </div>
            
        </div>
        
    </div>
    <div className="Footer__bottom bottomFooter">
        <div className="bottomFooter__container">
            <div className="bottomFooter__body">
                <div className="bottomFooter__left left-bottom-footer">
                    <div className="left-bottom-footer__title">
                        <img src={require("../../images/navbar/logo.png")} alt=""/>
                    </div>
                    <div className="left-bottom-footer__text">Самый удобный в Москве сервис  аренды фото, видео и кинотехники</div>
                    <div className="left-bottom-footer__conf">© 2015 – 2019 Fotoprokat 24</div>
                    
                </div>
                <div className="bottomFooter__links links-bottom-footer">
                    <div className="links-bottom-footer__left">
                        <div className="links-bottom-footer__top">
                        <div className="links-bottom-footer__link">
                            <img src={require("../../images/footer/links/1.png")} alt=""/>
                        </div>
                        <div className="links-bottom-footer__link">
                            <img src={require("../../images/footer/links/2.png")} alt=""/>
                        </div>
                        <div className="links-bottom-footer__link">
                            <img src={require("../../images/footer/links/3.png")} alt=""/>
                        </div>
                        <div className="links-bottom-footer__link">
                            <img src={require("../../images/footer/links/4.png")} alt=""/>
                        </div>
                        <div className="links-bottom-footer__link">
                            <img src={require("../../images/footer/links/5.png")} alt=""/>
                        </div>
                        </div>
                        <div className="links-bottom-footer__bottom">Политика конфиденциальности</div>
                    </div>
                    <div className="links-bottom-footer__right">
                        <a href="tel:+1234567890" className="links-bottom-footer__tel">+7 495 170-39-18</ a>
                        <div className="links-bottom-footer__adress">г. Москва, Проспект мира, дом 12</div> 
                    </div>
                    
               
                    
                </div>
                <div className="bottomFooter__payments payment-bottom-footer">
                    <div className="payment-bottom-footer__payment">
                        <img src={require("../../images/footer/payment/1.png")} alt=""/>
                    </div>
                    <div className="payment-bottom-footer__payment">
                        <img src={require("../../images/footer/payment/2.png")} alt=""/>
                    </div>
                    <div className="payment-bottom-footer__payment">
                        <img src={require("../../images/footer/payment/3.png")} alt=""/>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    </div>
    
   </div>
   
  )
}

