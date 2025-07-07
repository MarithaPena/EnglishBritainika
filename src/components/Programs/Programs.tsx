import { Link } from 'react-router-dom';
import { classNames } from '../../shared/helpers/classNames/classNames';
import { HStack } from '../../shared/ui/Stack';
import cls from './Programs.module.css';
import { memo } from 'react';

interface ProgramsProps {
    className?: string;
}

export const Programs = memo((props: ProgramsProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.Programs, {}, [className])}>
            <h3>Наши программы</h3>
            <div className={cls.subtitle}>
                Мы предлагаем обучение для всех уровней: от начального до
                продвинутого. Наши программы разработаны по международным
                стандартам и адаптированы под русскоязычных учеников
            </div>
            <HStack justify="center" gap="32" className={cls.wrapper_blocks}>
                <Link to="/EnglishBritainika/course">
                    <div className={cls.block}>
                        <span className={cls.title}>Курсы</span>
                        <br />
                        <br />
                        <span className={cls.descr}>
                            У нас вы найдете программы для детей, подростков и
                            взрослых с любым уровнем подготовки. Опытные
                            преподаватели — профессоры НГУ и носители языка —
                            помогут вам
                        </span>
                        <br />
                    </div>
                </Link>

                <Link to="/EnglishBritainika/methods">
                    <div className={cls.block}>
                        <span className={cls.title}>Методики преподавания</span>
                        <br />
                        <br />
                        <span className={cls.descr}>
                            Наши методики — это синтез академического подхода
                            НГУ и современных коммуникативных технологий. Они
                            гарантирует глубокое понимание языка и уверенное
                            владение им в любой ситуации
                        </span>
                        <br />
                    </div>
                </Link>

                <Link to="/EnglishBritainika/about_school">
                    <div className={cls.block}>
                        <span className={cls.title}>О школе</span>
                        <br />
                        <br />
                        <span className={cls.descr}>
                            Наша школа — это экспертный центр английского языка.
                            Мы объединяем академическую строгость ведущего вуза
                            страны с живой языковой практикой, чтобы дать вам
                            английский уровня C2 — как у преподавателей
                            Кембриджа.
                        </span>
                        <br />
                    </div>
                </Link>
            </HStack>
        </div>
    );
});

Programs.displayName = 'Programs';
