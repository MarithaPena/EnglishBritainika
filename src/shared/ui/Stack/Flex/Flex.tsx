import {
    memo,
    useMemo,
    type HTMLAttributes,
    type ReactNode,
    type RefObject,
} from 'react';
import cls from './Flex.module.css';
import {
    classNames,
    type Additional,
    type Mods,
} from '../../../helpers/classNames/classNames';

type FlexJustify = 'start' | 'end' | 'center' | 'between' | 'around';

type FlexAlign = 'start' | 'end' | 'center';

type FlexDirextion = 'row' | 'column';

type FlexGap = '4' | '8' | '16' | '32';

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    refDiv?: RefObject<HTMLDivElement | null>;
    direction?: FlexDirextion;
    gap?: FlexGap;
    max?: boolean;
    Tag?: keyof HTMLElementTagNameMap;
}

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
    around: cls.justifyAround,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const directionClasses: Record<FlexDirextion, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
};

export const Flex = memo((props: FlexProps) => {
    const {
        className,
        children,
        align = 'start',
        justify = 'start',
        direction = 'row',
        refDiv,
        gap,
        max,
        ...otherProps
    } = props;
    const classNameAdditional = useMemo<Additional>(
        () => [
            className,
            justifyClasses[justify],
            alignClasses[align],
            directionClasses[direction],
            gap && gapClasses[gap],
        ],
        [
            className,
            justify,
            align,
            direction,
            gap,
            justifyClasses,
            alignClasses,
            directionClasses,
            gapClasses,
        ],
    );

    const mods = useMemo<Mods>(
        () => ({
            [cls.max]: max,
        }),
        [max, cls.max],
    );
    return (
        <div
            className={classNames(cls.Flex, mods, classNameAdditional)}
            ref={refDiv}
            {...otherProps}
        >
            {children}
        </div>
    );
});

Flex.displayName = 'Flex';
