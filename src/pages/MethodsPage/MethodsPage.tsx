import { Link } from 'react-router-dom';
import cls from './MethodsPage.module.css';
import { methods } from '../../shared/const/methods';

export function MethodsPage() {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1.5rem',
    };

    const cardStyle = {
        backgroundColor: 'rgb(202, 199, 199)',
        padding: '1.5rem',
        height: '70px',
        borderRadius: '1rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        borderLeft: '4px solid #2563eb',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
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
        <main className={cls.MethodsPage}>
            <div className={cls.container}>
                <h1 className={cls.header}>Наши методики</h1>
                <div style={gridStyle}>
                    {methods.map((item) => (
                        <Link
                            to={`/EnglishBritainika/methods/${item.id}`}
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
