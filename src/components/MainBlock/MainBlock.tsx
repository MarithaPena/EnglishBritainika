import { classNames } from '../../shared/helpers/classNames/classNames';
import { HStack } from '../../shared/ui/Stack';
import cls from './MainBlock.module.css';
import { memo } from 'react';
import Image from '../../shared/assets/img/media/13.jpeg';

interface MainBlockProps {
    className?: string;
}

export const MainBlock = memo((props: MainBlockProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.MainBlock, {}, [className])}>
            <HStack justify="around">
                <div>
                    <h1 className={cls.title}>Английский с носителем!</h1>
                    <span className={cls.descr}>
                        Современные методики, опытные преподаватели, живое
                        общение
                    </span>
                </div>
                <div className={cls.wrapper_border}>
                    <img
                        style={{ borderRadius: '20px' }}
                        src={Image}
                        width={750}
                        className={cls.img}
                    />
                    <div className={cls.border}></div>
                </div>
            </HStack>
        </div>
    );
});

MainBlock.displayName = 'MainBlock';
