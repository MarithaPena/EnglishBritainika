import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { CoursePage } from './pages/CoursePage/CoursePage';
import { CurrentCoursePage } from './pages/CurrentCoursePage/CurrentCoursePage';
import { MethodsPage } from './pages/MethodsPage/MethodsPage';
import { CurrentMethodPage } from './pages/CurrentMethodPage/CurrentMethodPage';
import { AboutSchoolPage } from './pages/AboutSchoolPage/AboutSchoolPage';
import { AboutSchoolInfoPage } from './pages/AboutSchoolInfoPage/AboutSchoolInfoPage';
import { Header } from './components/Header/Header';
// import { Footer } from './components/Footer/Footer';

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/EnglishBritainika/" element={<MainPage />} />
                <Route
                    path="/EnglishBritainika/course"
                    element={<CoursePage />}
                />
                <Route
                    path="/EnglishBritainika/methods"
                    element={<MethodsPage />}
                />
                <Route
                    path="/EnglishBritainika/about_school"
                    element={<AboutSchoolPage />}
                />
                <Route
                    path="/EnglishBritainika/about_school/:info"
                    element={<AboutSchoolInfoPage />}
                />
                <Route
                    path="/EnglishBritainika/course/:id"
                    element={<CurrentCoursePage />}
                />
                <Route
                    path="/EnglishBritainika/methods/:id"
                    element={<CurrentMethodPage />}
                />
                <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
            {/* <Footer /> */}
        </>
    );
}
