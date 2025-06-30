import { useParams } from 'react-router-dom';
import { classNames } from '../../shared/helpers/classNames/classNames';
import cls from './CurrentMethodPage.module.css';
import { memo } from 'react';
import { VStack } from '../../shared/ui/Stack';
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
            <Slider className={cls.slider} imagePaths={method.imagePaths} />
            <div className={cls.description}>{method.description}</div>
            {/* <HStack style={{ marginTop: 50 }} gap="32" align="center">
                <HStack className={cls.vertical_slider}>
                    {method.imagePaths?.map((path, index) => (
                        <div
                            className={cls.slide}
                            style={{
                                transform: `${
                                    index % 2 ? 'translateY(50%)' : ''
                                } `,
                            }}
                        >
                            {path.endsWith('.jpeg') ? (
                                <img
                                    src={path}
                                    alt={`Image ${index + 1}`}
                                    loading="lazy"
                                    className={cls.image}
                                />
                            ) : (
                                <video
                                    src={path}
                                    className={cls.image}
                                    controls
                                />
                            )}
                        </div>
                    ))}
                </HStack>
                <HStack className={cls.description}>
                    {method.description}
                </HStack>
            </HStack> */}
        </VStack>
    );
});

CurrentMethodPage.displayName = 'CurrentMethodPage';
