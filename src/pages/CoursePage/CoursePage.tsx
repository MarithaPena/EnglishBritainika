import { Link } from 'react-router-dom';
import { courses } from '../../shared/const/courses';
import cls from './CoursePage.module.css';

export function CoursePage() {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1.5rem',
    };

    const cardStyle = {
        backgroundColor: 'rgb(202, 199, 199)',
        padding: '1.5rem',
        borderRadius: '1rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        borderLeft: '4px solid #2563eb',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        height: 80,
    };

    const headingStyle = {
        fontSize: '1.25rem',
        fontWeight: '600',
        color: '#1f2937',
        margin: 0,
    };

    const descriptionStyle = {
        marginTop: '0.5rem',
        fontSize: '0.875rem',
        color: '#6b7280',
    };

    const backButtonStyle = {
        display: 'inline-block',
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        fontWeight: '600',
        color: '#fff',
        backgroundColor: '#2563eb',
        borderRadius: '0.5rem',
        textDecoration: 'none',
        transition: 'background-color 0.3s ease',
    };

    return (
        <main className={cls.CoursePage}>
            <div className={cls.container}>
                <h1 className={cls.header}>Наши курсы</h1>
                <div style={gridStyle}>
                    {courses.map((item) => (
                        <Link
                            to={`/EnglishBritainika/course/${item.id}`}
                            className={cls.link}
                            key={item.id}
                        >
                            <div style={cardStyle}>
                                <h3 style={headingStyle}>{item.title}</h3>
                                <p style={descriptionStyle}>Подробнее</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div
                    style={{
                        marginTop: '2rem',
                        textAlign: 'center',
                    }}
                >
                    <Link to="/EnglishBritainika/" style={backButtonStyle}>
                        Назад на главную
                    </Link>
                </div>
            </div>
        </main>
    );
}
