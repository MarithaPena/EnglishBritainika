import { useParams } from 'react-router-dom';
import { classNames } from '../../shared/helpers/classNames/classNames';
import cls from './AboutSchoolInfoPage.module.css';
import { memo } from 'react';
import { about_school, teachers } from '../../shared/const/about_school';
import degree_1 from '../../shared/assets/img/degree/1.jpg';
import degree_2 from '../../shared/assets/img/degree/2.jpg';
import degree_3 from '../../shared/assets/img/degree/3.jpg';
import degree_4 from '../../shared/assets/img/degree/4.jpg';
import degree_5 from '../../shared/assets/img/degree/5.jpg';
import degree_6 from '../../shared/assets/img/degree/6.jpg';
import { HStack, VStack } from '../../shared/ui/Stack';
import { Slider } from '../../components/Slider/Slider';

interface AboutSchoolInfoPageProps {
    className?: string;
}

export const AboutSchoolInfoPage = memo((props: AboutSchoolInfoPageProps) => {
    const { className } = props;
    const { info } = useParams();

    const currentInfo = about_school.find((item) => item.id === Number(info));

    if (!currentInfo) {
        return <div>Информация не найдена</div>;
    }
    const title = currentInfo.title;
    let content;
    if (title === 'Образование директора') {
        content = (
            <>
                <h2 className={cls.header}>{title}</h2>
                <HStack gap="32" justify="center" className={cls.wrapper_img}>
                    <img src={degree_1} className={cls.img} />
                    <img src={degree_2} className={cls.img} />
                    <img src={degree_3} className={cls.img} />
                    <img src={degree_4} className={cls.img} />
                    <img src={degree_5} className={cls.img} />
                    <img src={degree_6} className={cls.img} />
                </HStack>
            </>
        );
    }
    if (title === 'Наши преподаватели') {
        content = (
            <>
                <h2 className={cls.header}>{title}</h2>
                {teachers.map((item) => (
                    <>
                        <div className={cls.header}>{item.name}</div>
                        <div className={cls.descr}>{item.description}</div>
                        <Slider imagePaths={item.imagePaths} />
                    </>
                ))}
            </>
        );
    }
    return (
        <VStack
            align="center"
            className={classNames(cls.AboutSchoolInfoPage, {}, [className])}
        >
            {content}
        </VStack>
    );
});

AboutSchoolInfoPage.displayName = 'AboutSchoolInfoPage';
