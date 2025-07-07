import { useParams } from 'react-router-dom';
import { classNames } from '../../shared/helpers/classNames/classNames';
import cls from './CurrentMethodPage.module.css';
import { memo } from 'react';
import { HStack, VStack } from '../../shared/ui/Stack';
import { methods } from '../../shared/const/methods';
import { Slider } from '../../components/Slider/Slider';

interface CurrentMethodPageProps {
    className?: string;
}

export const CurrentMethodPage = memo((props: CurrentMethodPageProps) => {
    const { className } = props;

    const { id } = useParams();

    const methodId = parseInt(id!, 10);

    const method = methods.find((item) => item.id === methodId);

    if (!method) return <div>Методика не найдена</div>;

    return (
        <VStack
            align="center"
            className={classNames(cls.MediaBlock, {}, [className])}
        >
            <h2 className={cls.header}>{method.title}</h2>
            <HStack className={cls.wrapper_slider}>
                <Slider imagePaths={method.imagePaths} />
            </HStack>
            <div className={cls.description}>{method.description}</div>
        </VStack>
    );
});

CurrentMethodPage.displayName = 'CurrentMethodPage';
