import { useWindowWidth } from '../../shared/hooks/useWindowWidth/useWindowWidth';
import cls from './MainBlock.module.css';
import { memo } from 'react';
// import Image from '../../shared/assets/img/media/13.jpeg';

export const MainBlock = memo(() => {
    const width = useWindowWidth();

    let content;

    if (width < 1025) {
        content = (
            <div className={cls.MainBlock_small}>
                <div className={cls.shadow}></div>
                <h1 className={cls.title_small}>Английский с носителем!</h1>
                <span className={cls.descr_small}>
                    Современные методики, опытные преподаватели, живое общение
                </span>
            </div>
        );
    } else
        content = (
            <div className={cls.MainBlock}>
                <div className={cls.shadow}></div>
                {/* <HStack > */}
                <div className={cls.wrapper}>
                    <h1 className={cls.title}>Английский с носителем!</h1>
                    <span className={cls.descr}>
                        Современные методики, опытные преподаватели, живое
                        общение
                    </span>
                </div>
                {/* <div className={cls.wrapper_border}> */}
                {/* <img
                    style={{ borderRadius: '20px' }}
                    src={Image}
                    width={750}
                    className={cls.img}
                /> */}
                {/* <div className={cls.border}></div> */}
                {/* </div> */}
                {/* </HStack> */}
            </div>
        );
    return content;
});

MainBlock.displayName = 'MainBlock';
