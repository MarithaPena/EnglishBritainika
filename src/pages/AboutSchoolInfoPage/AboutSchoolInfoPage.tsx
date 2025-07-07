import { useParams } from 'react-router-dom';
import { classNames } from '../../shared/helpers/classNames/classNames';
import cls from './AboutSchoolInfoPage.module.css';
import { memo } from 'react';
import { about_school, teachers } from '../../shared/const/about_school';
import award_1 from '../../shared/assets/img/media/24.jpeg';
import award_2 from '../../shared/assets/img/media/deegre_2.jpeg';
import { HStack, VStack } from '../../shared/ui/Stack';
import { Slider } from '../../components/Slider/Slider';
import international_relations_1 from '../../shared/assets/img/international_relations/international_relations_1.jpg';
import international_relations_2 from '../../shared/assets/img/international_relations/international_relations_2.jpg';
import international_relations_3 from '../../shared/assets/img/international_relations/international_relations_3.jpg';
import international_relations_4 from '../../shared/assets/img/international_relations/international_relations_4.jpg';
import international_relations_5 from '../../shared/assets/img/international_relations/international_relations_5.jpg';

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
                <div className={cls.wrapper_block}>
                    <div className={cls.wrapper_img_diploms}>
                        <div
                            className={classNames(cls.img, {}, [cls.degree_6])}
                        />
                        <div className={cls.border}></div>
                    </div>
                    <div className={cls.wrapper_img_diploms}>
                        <div
                            className={classNames(cls.img, {}, [cls.degree_5])}
                        />

                        <div className={cls.border}></div>
                    </div>
                    <div className={cls.wrapper_img_diploms}>
                        <div
                            className={classNames(cls.img, {}, [cls.degree_2])}
                        />
                        <div className={cls.border}></div>
                    </div>
                    <div className={cls.wrapper_img_diploms}>
                        <div
                            className={classNames(cls.img, {}, [cls.degree_3])}
                        />
                        <div className={cls.border}></div>
                    </div>
                    <div className={cls.wrapper_img_diploms}>
                        <div
                            className={classNames(cls.img, {}, [cls.degree_1])}
                        />
                        <div className={cls.border}></div>
                    </div>
                    <div
                        className={classNames(cls.wrapper_img_diploms, {}, [
                            cls.margin_bottom,
                        ])}
                    >
                        <div
                            className={classNames(cls.img, {}, [cls.degree_4])}
                        />
                        <div className={cls.border}></div>
                    </div>
                </div>
            </>
        );
    }
    if (title === 'Наши преподаватели') {
        content = (
            <>
                <h2 className={cls.header}>{title}</h2>
                {teachers.map((item, index) => (
                    <>
                        <div key={index} className={cls.header}>
                            {item.name}
                        </div>
                        <div className={cls.descr}>{item.description}</div>
                        <HStack className={cls.wrapper_slider}>
                            <Slider
                                className={cls.slider}
                                imagePaths={item.imagePaths}
                            />
                        </HStack>
                    </>
                ))}
            </>
        );
    }
    if (title === 'Наши награды') {
        content = (
            <>
                <h2 className={cls.header}>{title}</h2>
                <div style={{ paddingBottom: 90 }} className={cls.content}>
                    <div
                        className={cls.wrapper_img_award}
                        style={{ display: 'flex' }}
                    >
                        <VStack className={cls.small_wrapper_img}>
                            <img
                                onDragStart={(e) => e.preventDefault()}
                                onContextMenu={(e) => e.preventDefault()}
                                style={{
                                    userSelect: 'none',

                                    pointerEvents: 'auto',
                                }}
                                src={award_1}
                                loading="lazy"
                                className={cls.img_award}
                            />
                            <div className={cls.descr_award}>
                                Победители олимпиады по грамматике в 11 классе
                            </div>
                        </VStack>
                        <div className={cls.border_award}></div>
                    </div>
                    <div
                        className={cls.wrapper_img_award}
                        style={{ display: 'flex' }}
                    >
                        <div className={cls.border_award}></div>
                        <VStack className={cls.small_wrapper_img}>
                            <img
                                onDragStart={(e) => e.preventDefault()}
                                onContextMenu={(e) => e.preventDefault()}
                                style={{
                                    userSelect: 'none',
                                    pointerEvents: 'auto',
                                }}
                                src={award_2}
                                loading="lazy"
                                className={cls.img_award}
                            />
                            <div className={cls.descr_award}>
                                Победители всероссийских олимпиад 2-го и 3-го
                                этапов “Общий английский” - 11 класс
                            </div>
                        </VStack>
                    </div>
                </div>
                {/* </HStack> */}
            </>
        );
    }
    if (title === 'Наши международные связи') {
        content = (
            <>
                <h2 className={cls.header}>{title}</h2>
                <VStack gap="32" justify="center">
                    <HStack className={cls.wrapper_slider}>
                        <Slider
                            imagePaths={[
                                international_relations_1,
                                international_relations_3,
                                international_relations_5,
                                international_relations_4,
                                international_relations_2,
                            ]}
                        />
                    </HStack>
                    <div className={cls.descr}>
                        Изучай английский в самом центре Оксфорда – с теми, кто
                        знает, как учить эффективно Мы, преподаватели с опытом
                        работы в *Oxford International Study Centre*, приглашаем
                        всех студентов, заинтересованных в сдаче международных
                        экзаменов или обучении в Великобритании, на очные курсы
                        английского языка в Оксфорде. Наши партнёры в *Oxford
                        International Study Centre* рады принять вас и
                        предоставить возможность пройти обучение с носителями
                        языка в академической среде настоящего британского
                        города. Что вас ждёт: * Качественные офлайн-уроки с
                        профессиональными британскими преподавателями * Курсы
                        английского от уровня A1 до C2 * Подготовка к
                        международным экзаменам * Скидка 20% на общие курсы
                        английского языка
                    </div>
                </VStack>
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
