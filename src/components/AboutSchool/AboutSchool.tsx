import { classNames } from '../../shared/helpers/classNames/classNames';
import cls from './AboutSchool.module.css';
import { memo } from 'react';
// import video from '../../shared/assets/video/about_school.mp4';

interface AboutSchoolProps {
    className?: string;
}

export const AboutSchool = memo((props: AboutSchoolProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.AboutSchool, {}, [className])}>
            <h3>О нашей школе</h3>
            {/* <video className={cls.video} src={video} controls /> */}
            <div className={cls.wrapper_descr}>
                <span>
                    Мы специализируемся нв обучении английскому языку с нуля до
                    уровня C2. У нас работают только лучшие преподаватели из
                    Великобритании и США.
                </span>
                <br />
                <br />
                <span>
                    Наши ученики регулярно становятся победителями олимпиад и
                    сдают ЕГЭ на высокие баллы.
                </span>
            </div>
        </div>
    );
});

AboutSchool.displayName = 'AboutSchool';
