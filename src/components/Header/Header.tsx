import { classNames } from '../../shared/helpers/classNames/classNames';
import { memo } from 'react';
import Logo from '../../shared/assets/img/logo/logo_vertical.svg';
import { HStack } from '../../shared/ui/Stack';
import cls from './Header.module.css';
import { Link } from 'react-router-dom';
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu';

interface HeaderProps {
    className?: string;
}

export const Header = memo((props: HeaderProps) => {
    const { className } = props;
    return (
        <header className={classNames(cls.Header, {}, [className])}>
            <Link to={'/EnglishBritainika/'}>
                <img src={Logo} alt="Logo" className={cls.logo} />
            </Link>
            <div className={cls.mob_menu}>
                <HamburgerMenu />
            </div>
            <HStack className={cls.wrapper_a} gap="32">
                <Link to="/EnglishBritainika/about_school">О школе</Link>
                <Link to="/EnglishBritainika/course">Курсы</Link>
                <Link to="/EnglishBritainika/methods">Методики</Link>
            </HStack>
        </header>
    );
});

Header.displayName = 'Header';
