import { classNames } from '../../shared/helpers/classNames/classNames';
import cls from './Footer.module.css';
import { memo } from 'react';

interface FooterProps {
    className?: string;
}

export const Footer = memo((props: FooterProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.Footer, {}, [className])}>
            © 2025 Britainika. Все права защищены
        </div>
    );
});

Footer.displayName = 'Footer';
