import { classNames } from '../../shared/helpers/classNames/classNames';
import { useWindowWidth } from '../../shared/hooks/useWindowWidth/useWindowWidth';
import { VStack } from '../../shared/ui/Stack';
import cls from './Slider.module.css';
import { memo, useState } from 'react';

interface SliderProps {
    className?: string;
    imagePaths: string[];
    descr?: string[];
}

export const Slider = memo((props: SliderProps) => {
    const { className, imagePaths, descr } = props;
    const width = useWindowWidth();

    function extractFileName(path: string) {
        const fileNameWithExt = path.substring(path.lastIndexOf('/') + 1);
        const fileName = fileNameWithExt.split('.').slice(0, -1).join('.');
        return fileName;
    }

    const itemsPerPage = width < 769 ? 1 : 3;
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = imagePaths.length;

    const totalPages = Math.max(totalItems - itemsPerPage + 1, 1);

    const goToNextSlide = () => {
        if (currentIndex < totalPages - 1) {
            setCurrentIndex(currentIndex + 1);
        }
        const video_array = imagePaths.filter((item) => item.endsWith('.mp4'));
        video_array.map((item) => {
            setTimeout(() => {
                const video = document.querySelector(
                    `[data-name=${extractFileName(item)}]`,
                );
                //@ts-ignore
                video.pause();
            }, 0);
        });
    };

    const goToPrevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
        const video_array = imagePaths.filter((item) => item.endsWith('.mp4'));
        video_array.map((item) => {
            setTimeout(() => {
                const video = document.querySelector(
                    `[data-name=${extractFileName(item)}]`,
                );
                //@ts-ignore
                video.pause();
            }, 0);
        });
    };

    let content;

    if (width < 769) {
        content = (
            <div className={classNames(cls.MediaBlock, {}, [className])}>
                <div className={cls.sliderWrapper}>
                    <button
                        className={classNames(cls.navButton, {}, [
                            cls.prev_arrow,
                        ])}
                        onClick={goToPrevSlide}
                        disabled={currentIndex === 0}
                        aria-label="Предыдущий слайд"
                    >
                        &larr;
                    </button>

                    <div className={cls.carouselContainer}>
                        <div
                            className={classNames(cls.carouselTrack, {
                                [cls.centered]:
                                    imagePaths.length < itemsPerPage,
                            })}
                            style={{
                                transform: `${`translateX(-${
                                    currentIndex *
                                    ((width < 577
                                        ? 274
                                        : width > 576 && width < 769
                                        ? 474
                                        : 0) +
                                        16 +
                                        10)
                                }px)`}`,
                                transition: 'transform 0.5s ease',
                            }}
                        >
                            {imagePaths.map((path, index) => (
                                <div
                                    key={index}
                                    className={cls.slide}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`Посмотреть фото ${
                                        index + 1
                                    } в полном размере`}
                                >
                                    {descr?.length ? (
                                        <VStack>
                                            <img
                                                src={path}
                                                alt={`Image ${index + 1}`}
                                                loading="lazy"
                                                className={cls.image}
                                            />
                                            <div className={cls.descr}>
                                                {descr?.[index]}
                                            </div>
                                        </VStack>
                                    ) : path.endsWith('.jpeg') ||
                                      path.endsWith('.jpg') ||
                                      path.endsWith('.JPG') ||
                                      path.endsWith('.JPEG') ? (
                                        <img
                                            src={path}
                                            alt={`Image ${index + 1}`}
                                            loading="lazy"
                                            className={cls.image}
                                        />
                                    ) : (
                                        <video
                                            data-name={extractFileName(path)}
                                            controls
                                            disablePictureInPicture
                                            controlsList="nofullscreen nodownload"
                                            playsInline
                                            webkit-playsinline="true"
                                            className={cls.image}
                                        >
                                            <source src={path} />
                                        </video>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className={classNames(cls.navButton, {}, [
                            cls.next_arrow,
                        ])}
                        onClick={goToNextSlide}
                        disabled={currentIndex >= totalPages - 1}
                        aria-label="Следующий слайд"
                    >
                        &rarr;
                    </button>
                </div>
            </div>
        );
    } else
        content = (
            <div className={classNames(cls.MediaBlock, {}, [className])}>
                <div className={cls.sliderWrapper}>
                    <button
                        className={cls.navButton}
                        onClick={goToPrevSlide}
                        disabled={currentIndex === 0}
                        aria-label="Предыдущий слайд"
                    >
                        &larr;
                    </button>

                    <div className={cls.carouselContainer}>
                        <div
                            className={classNames(cls.carouselTrack, {
                                [cls.centered]: imagePaths.length < 3,
                            })}
                            style={{
                                transform: `translateX(-${
                                    currentIndex *
                                    ((width > 768 && width < 1025
                                        ? 205
                                        : width > 1024 && width < 1441
                                        ? 281
                                        : width > 1440
                                        ? 427
                                        : 0) +
                                        16)
                                }px)`,
                                transition: 'transform 0.5s ease',
                            }}
                        >
                            {imagePaths.map((path, index) => (
                                <div
                                    key={index}
                                    className={cls.slide}
                                    // onClick={() => openModal(index)}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`Посмотреть фото ${
                                        index + 1
                                    } в полном размере`}
                                >
                                    {descr?.length ? (
                                        <VStack>
                                            <img
                                                src={path}
                                                alt={`Image ${index + 1}`}
                                                loading="lazy"
                                                className={cls.image}
                                            />
                                            <div className={cls.descr}>
                                                {descr?.[index]}
                                            </div>
                                        </VStack>
                                    ) : path.endsWith('.jpeg') ||
                                      path.endsWith('.jpg') ||
                                      path.endsWith('.JPG') ||
                                      path.endsWith('.JPEG') ? (
                                        <img
                                            src={path}
                                            alt={`Image ${index + 1}`}
                                            loading="lazy"
                                            className={cls.image}
                                        />
                                    ) : (
                                        <video
                                            data-name={extractFileName(path)}
                                            controls
                                            disablePictureInPicture
                                            controlsList="nofullscreen nodownload"
                                            playsInline
                                            webkit-playsinline="true"
                                            className={cls.image}
                                        >
                                            <source src={path} />
                                        </video>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className={cls.navButton}
                        onClick={goToNextSlide}
                        disabled={currentIndex >= totalPages - 1}
                        aria-label="Следующий слайд"
                    >
                        &rarr;
                    </button>
                </div>
            </div>
        );

    return content;
});
