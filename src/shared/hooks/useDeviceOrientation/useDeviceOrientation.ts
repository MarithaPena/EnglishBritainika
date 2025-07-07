import { useState, useEffect } from 'react';

const useDeviceOrientation = () => {
    const [isLandscape, setIsLandscape] = useState(false);

    const checkOrientation = () => {
        const orientation =
            screen.orientation?.type ||
            window.matchMedia('(orientation: landscape)').matches;

        // Если ориентация содержит "landscape", значит горизонтальная
        setIsLandscape(
            typeof orientation === 'string'
                ? orientation.includes('landscape')
                : Boolean(orientation),
        );
    };

    useEffect(() => {
        // Проверяем при монтировании
        checkOrientation();

        // Слушаем изменения через событие orientationchange
        window.addEventListener('orientationchange', checkOrientation);
        window.addEventListener('resize', checkOrientation);

        return () => {
            window.removeEventListener('orientationchange', checkOrientation);
            window.removeEventListener('resize', checkOrientation);
        };
    }, []);

    return isLandscape;
};

export default useDeviceOrientation;
