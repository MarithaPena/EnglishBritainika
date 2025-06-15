import { Link } from 'react-router-dom';
import cls from './MethodsPage.module.css';
import { methods } from '../../shared/const/methods';

export function MethodsPage() {
    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 1rem',
        fontFamily: "'Segoe UI', sans-serif",
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1.5rem',
    };

    const cardStyle = {
        backgroundColor: '#fff',
        padding: '1.5rem',
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
        <main
            style={{
                minHeight: '100vh',
                background:
                    'linear-gradient(to bottom right, #f9fafb, #e5e7eb)',
            }}
        >
            <div style={containerStyle}>
                <h1
                    style={{
                        textAlign: 'center',
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        color: '#111827',
                        marginBottom: '2rem',
                    }}
                >
                    Наши методики
                </h1>
                <div style={gridStyle}>
                    {methods.map((item) => (
                        <Link to={`/methods/${item.id}`} className={cls.link}>
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
                    <Link to="/" style={backButtonStyle}>
                        Назад на главную
                    </Link>
                </div>
            </div>
        </main>
    );
}
