import { AboutSchool } from '../../components/AboutSchool/AboutSchool';
import { MainBlock } from '../../components/MainBlock/MainBlock';
// import { MediaBlock } from '../../components/MediaBlock/MediaBlock';
import { Programs } from '../../components/Programs/Programs';
import { WhyUs } from '../../components/WhyUs/WhyUs';
import { classNames } from '../../shared/helpers/classNames/classNames';
import cls from './MainPage.module.css';
import { memo } from 'react';

interface MainPageProps {
    className?: string;
}

export const MainPage = memo((props: MainPageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            <MainBlock />
            <AboutSchool />
            <WhyUs />
            <Programs />
            {/* <MediaBlock />  */}
        </div>
    );
});

MainPage.displayName = 'MainPage';
