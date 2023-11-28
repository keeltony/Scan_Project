
import '../styles/Header.css'


export function Header (props:any) {
    return(
        <header className="header_des">
            <div>
                <img src={require('../image/logo_green.png')} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li>
                        <a>Главная </a>
                    </li>
                    <li>
                       <a>Тариф</a>
                    </li>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                </ul>
            </nav>
            <div>
                Hqla
            </div>
        </header>
    )
}