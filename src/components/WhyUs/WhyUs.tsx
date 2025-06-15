import { classNames } from '../../shared/helpers/classNames/classNames';
import { HStack } from '../../shared/ui/Stack';
import cls from './WhyUs.module.css';
import { memo } from 'react';

interface WhyUsProps {
    className?: string;
}

export const WhyUs = memo((props: WhyUsProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.WhyUs, {}, [className])}>
            <h3>Почему выбирают нас</h3>
            <HStack justify="center" gap="32" className={cls.wrapper_blocks}>
                <div className={cls.block}>
                    <span className={cls.title}>Профессионалы своего дела</span>
                    <br />
                    <br />
                    <span className={cls.descr}>
                        Наши преподаватели — выпускники ведущих отечественных и
                        зарубежных вузов, в числе которых Оксфордский
                        университет, МГППУ и МГПУ. Некоторые из них проходили
                        стажировку в США и получали образование в Новой
                        Зеландии.
                    </span>
                    <br />
                </div>
                <div className={cls.block}>
                    <span className={cls.title}>Результаты здесь и сейчас</span>
                    <br />
                    <br />
                    <span className={cls.descr}>
                        Все наши ученики сдают ЕГЭ на пятёрки и побеждают на
                        школьных олимпиадах.
                    </span>
                    <br />
                </div>
                <div className={cls.block}>
                    <span className={cls.title}>Международный уровень</span>
                    <br />
                    <br />
                    <span className={cls.descr}>
                        Многие наши ученики успешно проходят международные
                        экзамены, такие как Cambridge C2 Proficiency.
                    </span>
                    <br />
                </div>
            </HStack>
        </div>
    );
});

WhyUs.displayName = 'WhyUs';
