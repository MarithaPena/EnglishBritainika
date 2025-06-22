import { classNames } from '../../shared/helpers/classNames/classNames';
import { memo } from 'react';
import Logo from '../../shared/assets/img/logo/logo_vertical.svg';
import { HStack } from '../../shared/ui/Stack';
import cls from './Header.module.css';
import { Link } from 'react-router-dom';

interface HeaderProps {
    className?: string;
}

export const Header = memo((props: HeaderProps) => {
    const { className } = props;
    return (
        <HStack
            justify="between"
            className={classNames(cls.Header, {}, [className])}
        >
            <img src={Logo} alt="Logo" height={80} />
            <HStack className={cls.wrapper_a} gap="32">
                <Link to="/EnglishBritainika/about_school">О школе</Link>
                <Link to="/EnglishBritainika/course">Курсы</Link>
                <Link to="/EnglishBritainika/methods">Методики</Link>
                <Link to="#">Медиа</Link>
            </HStack>
        </HStack>
    );
});

Header.displayName = 'Header';
