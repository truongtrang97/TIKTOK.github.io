import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles  from "./Header.module.scss";
import images from "~/asset/images";
import { faCircleXmark, faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles)
console.log(images.logo)
function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
            <img src={images.logo} alt="Tiktok" />
            </div>
            <div className={cx('search')}>
                <input placeholder="Search accouts and videos" spellCheck={false}></input>
                <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark}/>
                </button>
                <FontAwesomeIcon icon={faSpinner}/>

                <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass}/>                   
                </button>
            </div>
            <div className={cx('action')}></div>
        </div>
    </header>;
}

export default Header;
