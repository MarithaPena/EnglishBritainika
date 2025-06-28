import { useParams } from 'react-router-dom';
import { classNames } from '../../shared/helpers/classNames/classNames';
import cls from './CurrentCoursePage.module.css';
import { memo } from 'react';
// import { Slider } from '../../components/Slider/Slider';
import { courses } from '../../shared/const/courses';
import { HStack, VStack } from '../../shared/ui/Stack';

interface CurrentCoursePageProps {
    className?: string;
}

export const CurrentCoursePage = memo((props: CurrentCoursePageProps) => {
    const { className } = props;

    const { id } = useParams();

    const courseId = parseInt(id!, 10);

    const course = courses.find((item) => item.id === courseId);

    const imagePaths = course!.imagePaths;

    if (!course) return <div>Курс не найден</div>;

    return (
        <VStack
            align="center"
            className={classNames(cls.MediaBlock, {}, [className])}
        >
            <h2 className={cls.header}>{course.title}</h2>
            {/* {imagePaths && (
                <Slider className={cls.slider} imagePaths={imagePaths} />
            )} */}
            <HStack style={{ marginTop: 50 }} gap="32" align="center">
                <HStack
                    style={{ overflow: 'auto', height: 650, marginLeft: 40 }}
                    className={cls.vertical_slider}
                >
                    {imagePaths?.map((path, index) => (
                        <div
                            className={cls.slide}
                            style={{
                                transform: `${
                                    index % 2 ? 'translateY(50%)' : ''
                                } `,
                            }}
                        >
                            <img
                                src={path}
                                alt={`Image ${index + 1}`}
                                loading="lazy"
                                className={cls.image}
                            />
                        </div>
                    ))}
                </HStack>
                <HStack className={cls.description}>
                    {course.description}
                </HStack>
            </HStack>
        </VStack>
    );
});

CurrentCoursePage.displayName = 'CurrentCoursePage';
