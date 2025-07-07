import { memo } from 'react';
import type { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
    Img: React.FC<SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
    const { Img, ...otherProps } = props;
    return <Img {...otherProps} />;
});
