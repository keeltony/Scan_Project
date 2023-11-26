
import { logoScanSvg } from '../image/logoScanSvg';
import '../styles/footer.css';

export function Footer() {
    return(
        <footer className='footer_container'>
            <div className='footer_img'>img</div>
            <div className='footer_text'>            
                <p>г. Москва, Цветной б-р, 40</p>
                <p>+7 495 771 21 11</p>
                <p>info@skan.ru</p>
                <p>Copyright. 2022</p>
            </div>
        </footer>
    )
}