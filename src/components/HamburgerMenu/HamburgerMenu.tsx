import { useState } from 'react';
import { classNames } from '../../shared/helpers/classNames/classNames';
import cls from './HamburgerMenu.module.css';
import { Link } from 'react-router-dom';

export const HamburgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const onToggleIsMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <button
                className={cls.hamburger}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Меню"
            >
                <span
                    className={classNames(cls.line, {
                        [cls.active]: isMenuOpen,
                    })}
                ></span>
                <span
                    className={classNames(cls.line, {
                        [cls.active]: isMenuOpen,
                    })}
                ></span>
                <span
                    className={classNames(cls.line, {
                        [cls.active]: isMenuOpen,
                    })}
                ></span>
            </button>

            {/* Мобильное меню */}
            <nav
                className={classNames(cls.mobile_menu, {
                    [cls.open]: isMenuOpen,
                })}
            >
                <ul>
                    <Link
                        onClick={onToggleIsMenuOpen}
                        to="/EnglishBritainika/about_school"
                    >
                        <li>
                            <a href="/">О школе</a>
                        </li>
                    </Link>
                    <Link
                        onClick={onToggleIsMenuOpen}
                        to="/EnglishBritainika/course"
                    >
                        <li>
                            <a href="/">Курсы</a>
                        </li>
                    </Link>
                    <Link
                        onClick={onToggleIsMenuOpen}
                        to="/EnglishBritainika/methods"
                    >
                        <li>
                            <a href="/">Методики</a>
                        </li>
                    </Link>
                </ul>
            </nav>

            {/* Затемнение фона при открытом меню */}
            {isMenuOpen && (
                <div className={cls.overlay} onClick={onToggleIsMenuOpen}></div>
            )}
        </>
    );
};
