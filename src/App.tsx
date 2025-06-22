import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { CoursePage } from './pages/CoursePage/CoursePage';
import { CurrentCoursePage } from './pages/CurrentCoursePage/CurrentCoursePage';
import { MethodsPage } from './pages/MethodsPage/MethodsPage';
import { CurrentMethodPage } from './pages/CurrentMethodPage/CurrentMethodPage';
import { AboutSchoolPage } from './pages/AboutSchoolPage/AboutSchoolPage';
import { AboutSchoolInfoPage } from './pages/AboutSchoolInfoPage/AboutSchoolInfoPage';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/course" element={<CoursePage />} />
            <Route path="/methods" element={<MethodsPage />} />
            <Route path="/about_school" element={<AboutSchoolPage />} />
            <Route
                path="/about_school/:info"
                element={<AboutSchoolInfoPage />}
            />
            <Route path="/course/:id" element={<CurrentCoursePage />} />
            <Route path="/methods/:id" element={<CurrentMethodPage />} />
            {/* <Route path="*" element={<Navigate to="/404" replace />} /> */}
        </Routes>
    );
}
