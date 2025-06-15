import { useParams } from 'react-router-dom';
import { classNames } from '../../shared/helpers/classNames/classNames';
import cls from './CurrentCoursePage.module.css';
import { memo } from 'react';
import { Slider } from '../../components/Slider/Slider';
import { courses } from '../../shared/const/courses';
import { VStack } from '../../shared/ui/Stack';

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
            <div className={cls.description}>{course.description}</div>
            {imagePaths && <Slider imagePaths={imagePaths} />}
        </VStack>
    );
});

CurrentCoursePage.displayName = 'CurrentCoursePage';
