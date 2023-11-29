import { SvgSelector } from "../image/SvgSelector";

import '../styles/Home.css';

export function Home () {
    return(
        <div>
            <div className="home_page_one">
                <div className="home_page_one_text">
                    <h1>сервис по поиску публикаций о компании по его ИНН</h1>
                    <p>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
                    <button>Запросить данные</button>
                </div>
                <div>
                    <img src={require('../image/home_img_one.png')} alt="img" />
                </div>
            </div>
            <div className="home_page_one_two">
                <h2>Почему именно мы</h2>
                <div className="display_wrapper">
                    <div>a</div>
                    <div className="wrapper_info">
                        <img src={require('../image/mask_time.png')} alt="Time" />
                        <p>Высокая и оперативная скорость обработки заявки</p>
                    </div>
                    <div className="wrapper_info">
                        <img src={require('../image/mask_search.png')} alt="Search" />
                        <p>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p>
                    </div>
                    <div className="wrapper_info">
                        <img src={require('../image/mask_protection.png')} alt="Protection" />
                        <p>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</p>
                    </div>
                    <div>q</div>
                </div>
            </div>
            <div className="home_img_des">
                <img src={require('../image/home_img_des.png')} alt="Вставить фото" />
            </div>
            <div className="rate">
                <h2>наши тарифы</h2>
                <div className="rate_wrapper">
                    <div className="rate_wrapper_component">
                        <div className="rate_wrapper_header">
                            <div className="rate_wrapper_header_text">
                                <h4>Beginner</h4>
                                <p>Для небольшого исследования</p>
                            </div>
                            <img src="" alt="logo" />
                        </div>
                        <div className="rate_info">
                            <div className="rate_info_text_one">
                                <h4>799 ₽    <span>  1 200 ₽</span></h4>
                                <p>или 150 ₽/мес. при рассрочке на 24 мес.</p>
                            </div>
                            <div className="rate_info_text_two">
                                <h4>В тариф входит:</h4>
                                <p>Безлимитная история запросов</p>
                                <p>Безопасная сделка</p>
                                <p>Поддержка 24/7</p>
                            </div>
                            <button className="rate_wrapper_button" type="button">Перейти в личный кабинет</button>
                        </div>
                    </div>
                    <div className="rate_wrapper_component">
                        <div className="rate_wrapper_header">
                            <div className="rate_wrapper_header_text">
                                <h4>Beginner</h4>
                                <p>Для небольшого исследования</p>
                            </div>
                            <img src="" alt="logo" />
                        </div>
                        <div className="rate_info">
                            <div className="rate_info_text_one">
                                <h4>799 ₽    <span>  1 200 ₽</span></h4>
                                <p>или 150 ₽/мес. при рассрочке на 24 мес.</p>
                            </div>
                            <div className="rate_info_text_two">
                                <h4>В тариф входит:</h4>
                                <p>Безлимитная история запросов</p>
                                <p>Безопасная сделка</p>
                                <p>Поддержка 24/7</p>
                            </div>
                            <button className="rate_wrapper_button" type="button">Перейти в личный кабинет</button>
                        </div>
                    </div>
                    <div className="rate_wrapper_component">
                        <div className="rate_wrapper_header">
                            <div className="rate_wrapper_header_text">
                                <h4>Beginner</h4>
                                <p>Для небольшого исследования</p>
                            </div>
                            <img src="" alt="logo" />
                        </div>
                        <div className="rate_info">
                            <div className="rate_info_text_one">
                                <h4>799 ₽    <span>  1 200 ₽</span></h4>
                                <p>или 150 ₽/мес. при рассрочке на 24 мес.</p>
                            </div>
                            <div className="rate_info_text_two">
                                <h4>В тариф входит:</h4>
                                <p>Безлимитная история запросов</p>
                                <p>Безопасная сделка</p>
                                <p>Поддержка 24/7</p>
                            </div>
                            <button className="rate_wrapper_button" type="button">Перейти в личный кабинет</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}