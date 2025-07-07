import { memo } from 'react';
import { Flex, type FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack = memo((props: HStackProps) => {
    const { align = 'center' } = props;
    return <Flex {...props} direction="row" align={align} />;
});

HStack.displayName = 'HStack';
