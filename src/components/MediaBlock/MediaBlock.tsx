// import { classNames } from '../../shared/helpers/classNames/classNames';
// import cls from './MediaBlock.module.css';
// import { memo, useState, useEffect } from 'react';

// import img1 from '../../shared/assets/img/media/1.jpeg';
// import img2 from '../../shared/assets/img/media/2.jpeg';
// import img3 from '../../shared/assets/img/media/3.jpeg';
// import img4 from '../../shared/assets/img/media/4.jpeg';
// import img5 from '../../shared/assets/img/media/5.jpeg';
// import img6 from '../../shared/assets/img/media/6.jpeg';
// import img7 from '../../shared/assets/img/media/7.jpeg';
// import img8 from '../../shared/assets/img/media/8.jpeg';
// import img9 from '../../shared/assets/img/media/9.jpeg';
// import img10 from '../../shared/assets/img/media/10.jpeg';
// import img11 from '../../shared/assets/img/media/11.jpeg';
// import img12 from '../../shared/assets/img/media/12.jpeg';
// import img13 from '../../shared/assets/img/media/13.jpeg';
// import img14 from '../../shared/assets/img/media/14.jpeg';
// import img15 from '../../shared/assets/img/media/15.jpeg';
// import img16 from '../../shared/assets/img/media/16.jpeg';
// import img17 from '../../shared/assets/img/media/17.jpeg';
// import img18 from '../../shared/assets/img/media/18.jpeg';
// import img19 from '../../shared/assets/img/media/19.jpeg';
// import img20 from '../../shared/assets/img/media/20.jpeg';
// import img21 from '../../shared/assets/img/media/21.jpeg';
// import img22 from '../../shared/assets/img/media/22.jpeg';
// import img23 from '../../shared/assets/img/media/23.jpeg';
// import img24 from '../../shared/assets/img/media/24.jpeg';
// import img25 from '../../shared/assets/img/media/25.jpeg';
// import img26 from '../../shared/assets/img/media/26.jpeg';
// import img27 from '../../shared/assets/img/media/27.jpeg';
// import img28 from '../../shared/assets/img/media/28.jpeg';
// import img29 from '../../shared/assets/img/media/29.jpeg';
// import img30 from '../../shared/assets/img/media/30.jpeg';
// import img31 from '../../shared/assets/img/media/31.jpeg';
// import img32 from '../../shared/assets/img/media/32.jpeg';
// import img33 from '../../shared/assets/img/media/33.jpeg';
// import img34 from '../../shared/assets/img/media/34.jpeg';
// import img35 from '../../shared/assets/img/media/35.jpeg';
// import img36 from '../../shared/assets/img/media/36.jpeg';
// import img37 from '../../shared/assets/img/media/37.jpeg';
// import img38 from '../../shared/assets/img/media/38.jpeg';
// import img39 from '../../shared/assets/img/media/39.jpeg';
// import img40 from '../../shared/assets/img/media/40.jpeg';
// import img41 from '../../shared/assets/img/media/41.jpeg';
// import img42 from '../../shared/assets/img/media/42.jpeg';
// import img43 from '../../shared/assets/img/media/43.jpeg';

// // 📦 Массив с путями к изображениям
// const imagePaths = [
//     img1,
//     img2,
//     img3,
//     img4,
//     img5,
//     img6,
//     img7,
//     img8,
//     img9,
//     img10,
//     img11,
//     img12,
//     img13,
//     img14,
//     img15,
//     img16,
//     img17,
//     img18,
//     img19,
//     img20,
//     img21,
//     img22,
//     img23,
//     img24,
//     img25,
//     img26,
//     img27,
//     img28,
//     img29,
//     img30,
//     img31,
//     img32,
//     img33,
//     img34,
//     img35,
//     img36,
//     img37,
//     img38,
//     img39,
//     img40,
//     img41,
//     img42,
//     img43,
// ];

// interface MediaBlockProps {
//     className?: string;
// }

// export const MediaBlock = memo((props: MediaBlockProps) => {
//     const { className } = props;

//     const itemsPerPage = 3;
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [modalImageIndex, setModalImageIndex] = useState<number | null>(null);

//     const totalItems = imagePaths.length;
//     const totalPages = Math.max(totalItems - itemsPerPage + 1, 1); // минимум 1 страница

//     const goToNextSlide = () => {
//         if (currentIndex < totalPages - 1) {
//             setCurrentIndex(currentIndex + 1);
//         }
//     };

//     const goToPrevSlide = () => {
//         if (currentIndex > 0) {
//             setCurrentIndex(currentIndex - 1);
//         }
//     };

//     const openModal = (index: number) => {
//         setModalImageIndex(index);
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//         setModalImageIndex(null);
//     };

//     const goToNextImage = () => {
//         if (
//             modalImageIndex !== null &&
//             modalImageIndex < imagePaths.length - 1
//         ) {
//             setModalImageIndex(modalImageIndex + 1);
//         }
//     };

//     const goToPrevImage = () => {
//         if (modalImageIndex !== null && modalImageIndex > 0) {
//             setModalImageIndex(modalImageIndex - 1);
//         }
//     };

//     // Закрытие на ESC / перелистывание на стрелки
//     useEffect(() => {
//         const handleKeyDown = (e: KeyboardEvent) => {
//             if (!isModalOpen) return;

//             if (e.key === 'Escape') {
//                 closeModal();
//             } else if (e.key === 'ArrowRight') {
//                 goToNextImage();
//             } else if (e.key === 'ArrowLeft') {
//                 goToPrevImage();
//             }
//         };

//         window.addEventListener('keydown', handleKeyDown);
//         return () => window.removeEventListener('keydown', handleKeyDown);
//     }, [isModalOpen, modalImageIndex]);

//     // Блокировка скролла при открытой модалке
//     useEffect(() => {
//         if (isModalOpen) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = '';
//         }

//         return () => {
//             document.body.style.overflow = '';
//         };
//     }, [isModalOpen]);

//     return (
//         <div className={classNames(cls.MediaBlock, {}, [className])}>
//             <h3>Как выглядит наша школа</h3>

//             <div className={cls.sliderWrapper}>
//                 <button
//                     className={cls.navButton}
//                     onClick={goToPrevSlide}
//                     disabled={currentIndex === 0}
//                     aria-label="Предыдущий слайд"
//                 >
//                     &larr;
//                 </button>

//                 <div className={cls.carouselContainer}>
//                     <div
//                         className={cls.carouselTrack}
//                         style={{
//                             transform: `translateX(-${
//                                 currentIndex * (500 + 16)
//                             }px)`,
//                             transition: 'transform 0.5s ease',
//                         }}
//                     >
//                         {imagePaths.map((path, index) => (
//                             <div
//                                 key={index}
//                                 className={cls.slide}
//                                 onClick={() => openModal(index)}
//                                 role="button"
//                                 tabIndex={0}
//                                 aria-label={`Посмотреть фото ${
//                                     index + 1
//                                 } в полном размере`}
//                             >
//                                 <img
//                                     src={path}
//                                     alt={`Image ${index + 1}`}
//                                     loading="lazy"
//                                     className={cls.image}
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 <button
//                     className={cls.navButton}
//                     onClick={goToNextSlide}
//                     disabled={currentIndex >= totalPages - 1}
//                     aria-label="Следующий слайд"
//                 >
//                     &rarr;
//                 </button>
//             </div>

//             {isModalOpen && modalImageIndex !== null && (
//                 <div className={cls.modalOverlay} onClick={closeModal}>
//                     <button
//                         className={cls.modalNavButtonLeft}
//                         onClick={(e) => {
//                             e.stopPropagation();
//                             goToPrevImage();
//                         }}
//                     >
//                         &larr;
//                     </button>

//                     <div
//                         className={cls.modalImageWrapper}
//                         onClick={(e) => e.stopPropagation()}
//                     >
//                         <img
//                             src={imagePaths[modalImageIndex]}
//                             alt={`Фото ${modalImageIndex + 1}`}
//                             className={cls.modalImage}
//                             loading="lazy"
//                         />
//                     </div>

//                     <button
//                         className={cls.modalNavButtonRight}
//                         onClick={(e) => {
//                             e.stopPropagation();
//                             goToNextImage();
//                         }}
//                     >
//                         &rarr;
//                     </button>

//                     <button
//                         className={cls.modalCloseButton}
//                         onClick={(e) => {
//                             e.stopPropagation();
//                             closeModal();
//                         }}
//                         aria-label="Закрыть"
//                     >
//                         &times;
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// });

// MediaBlock.displayName = 'MediaBlock';
