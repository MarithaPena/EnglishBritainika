import { classNames } from '../../shared/helpers/classNames/classNames';
import { VStack } from '../../shared/ui/Stack';
import cls from './AboutSchool.module.css';
import { memo } from 'react';

interface AboutSchoolProps {
    className?: string;
}

export const AboutSchool = memo((props: AboutSchoolProps) => {
    const { className } = props;

    const handleVideoRef = (el: any) => {
        if (el) {
            // Отключаем полноэкранный режим (насколько это возможно)
            el.disablePictureInPicture = true;
            el.addEventListener('enterpictureinpicture', (e: any) =>
                e.preventDefault(),
            );
        }
    };
    return (
        <VStack
            align="center"
            className={classNames(cls.AboutSchool, {}, [className])}
        >
            <h3>О нашей школе</h3>
            <div className={cls.video_container}>
                <video
                    ref={handleVideoRef}
                    controls
                    disablePictureInPicture
                    controlsList="nofullscreen nodownload"
                    playsInline
                    webkit-playsinline="true"
                    className={cls.video}
                >
                    <source src="https://elegymebel.ru/about_school1.mp4" />
                </video>
                <div className={cls.border_foto}> </div>
            </div>
            <div className={cls.wrapper_descr}>
                <span>
                    Мы специализируемся на обучении английскому языку с нуля до
                    уровня C2. У нас работают только лучшие преподаватели из
                    Великобритании и США.
                </span>
                <br />
                <span>
                    Наши ученики регулярно становятся победителями олимпиад и
                    сдают ЕГЭ на высокие баллы.
                </span>
            </div>
        </VStack>
    );
});

AboutSchool.displayName = 'AboutSchool';
