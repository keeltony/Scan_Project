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
            <div>
                <img src="" alt="Вставить фото" />
            </div>
            <div className="rate">
                <h2>наши тарифы</h2>
                <div className="rate_wrapper">
                    <div className="rate_wrapper_rate">
                        <div className="rate_wrapper_one_header">
                            <div className="rate_wrapper_one_header_text">
                                <h4>Beginner</h4>
                                <p>Для небольшого исследования</p>
                            </div>
                            <img src="" alt="logo" />
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        
    )
}