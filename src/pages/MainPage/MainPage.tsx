import { AboutSchool } from '../../components/AboutSchool/AboutSchool';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
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
            <Header />
            <MainBlock />
            <AboutSchool />
            <WhyUs />
            <Programs />
            {/* <MediaBlock /> */}
            <Footer />
        </div>
    );
});

MainPage.displayName = 'MainPage';
