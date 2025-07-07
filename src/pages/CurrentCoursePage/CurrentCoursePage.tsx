import { useParams } from 'react-router-dom';
import { classNames } from '../../shared/helpers/classNames/classNames';
import cls from './CurrentCoursePage.module.css';
import { memo } from 'react';
import { courses } from '../../shared/const/courses';
import { HStack, VStack } from '../../shared/ui/Stack';
import { Slider } from '../../components/Slider/Slider';
import { useWindowWidth } from '../../shared/hooks/useWindowWidth/useWindowWidth';

interface CurrentCoursePageProps {
    className?: string;
}

export const CurrentCoursePage = memo((props: CurrentCoursePageProps) => {
    const { className } = props;

    const width = useWindowWidth();

    const { id } = useParams();

    const courseId = parseInt(id!, 10);

    const course = courses.find((item) => item.id === courseId);

    const imagePaths = course!.imagePaths;

    if (!course) return <div>Курс не найден</div>;

    let content;

    if (width < 1441) {
        content = (
            <VStack className={cls.content} align="start" justify="center">
                <HStack className={cls.wrapper_slider}>
                    <Slider imagePaths={imagePaths} />
                </HStack>
                <HStack className={cls.description}>
                    {course.description}
                </HStack>
            </VStack>
        );
    } else {
        content = (
            <HStack className={cls.content} align="start" justify="center">
                <HStack className={cls.vertical_slider}>
                    {imagePaths?.map((path, index) => (
                        <div
                            className={cls.slide}
                            style={{
                                transform: `${
                                    index % 2 ? 'translateY(50%)' : ''
                                } `,
                            }}
                            key={index}
                        >
                            {path.endsWith('.jpeg') ||
                            path.endsWith('.jpg') ||
                            path.endsWith('.JPG') ||
                            path.endsWith('.JPEG') ? (
                                <>
                                    <img
                                        src={path}
                                        alt={`Image ${index + 1}`}
                                        loading="lazy"
                                        className={cls.image}
                                    />
                                    <div className={cls.border} />
                                </>
                            ) : (
                                <>
                                    <video
                                        controls
                                        disablePictureInPicture
                                        controlsList="nofullscreen nodownload"
                                        playsInline
                                        webkit-playsinline="true"
                                        className={cls.image}
                                    >
                                        <source src={path} />
                                    </video>

                                    <div className={cls.border} />
                                </>
                            )}
                        </div>
                    ))}
                </HStack>
                <HStack className={cls.description}>
                    {course.description}
                </HStack>
            </HStack>
        );
    }

    return (
        <VStack
            align="center"
            className={classNames(cls.MediaBlock, {}, [className])}
        >
            <h2 className={cls.header}>{course.title}</h2>

            {course.title === 'Подготовка к ОГЭ' ||
            course.title === 'Подготовка к ЕГЭ' ? (
                <>
                    <div
                        className={cls.description}
                        style={{ width: 'auto', marginTop: 30 }}
                    >
                        {course.description}
                    </div>
                    <HStack className={cls.wrapper_slider}>
                        <Slider
                            className={cls.slider}
                            imagePaths={imagePaths}
                        />
                    </HStack>
                </>
            ) : (
                content
            )}
        </VStack>
    );
});

CurrentCoursePage.displayName = 'CurrentCoursePage';
