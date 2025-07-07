import { useEffect, useState } from 'react';

export const useWindowWidth = () => {
    const [width, setWidth] = useState(
        window.visualViewport?.width || window.innerWidth,
    );

    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.visualViewport?.width || window.innerWidth;
            setWidth(newWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
};
