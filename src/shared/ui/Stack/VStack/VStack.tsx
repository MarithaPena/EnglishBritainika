import { memo } from 'react';
import { Flex, type FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = memo((props: VStackProps) => {
    return <Flex {...props} direction="column" />;
});

VStack.displayName = 'VStack';
