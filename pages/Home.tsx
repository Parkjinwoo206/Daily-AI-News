import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BottomNavigation from '../components/BottomNavigation';
import { NewsItem } from '../types';

const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleCardClick = (id: number | string) => {
        navigate(`/article/${id}`);
    };

    const feedItems: NewsItem[] = [
        {
            id: 1,
            category: "Healthcare",
            categoryColor: "bg-primary/90",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQL_iA6IFxtPqSy08FMUvdoGcP_z03bnFVca6ftaSioZc7NGyqx66YVgK_hOwVhGqlTzIhGC0C0QzXz4E14dsKV2GK14SpjgFQBA31UjaeYAxHX2DMAiccddgpOrEHEB6rDqpHmdFHuA0jTJkCigwfviKzmgdRLBGI7tvE-qW3CXwBmA3B8VOiQ34hufuaxjycY5cr06t45d_P-AJKxr2lfbP8lmFXpRR6idyf8uKBlVUuLWlCKs13EPr7SxepM-ntrHMo2vStvQ",
            title: "AI Diagnosis Tools Reduce Error Rates by 15%",
            desc: "New study shows promising results in early cancer detection using deep learning algorithms compared to traditional methods.",
            time: "2 hours ago",
            views: "1.2k"
        },
        {
            id: 2,
            category: "Automotive",
            categoryColor: "bg-blue-600/90",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6MKIyz5pOTz8JaxO4mun_hTn4w-WeqaYBTNvL5Y8w0l-SYk-qQLBfiUzQew_90yawIqmcZ4LajzPtRALxh-kAdhTGcqixTtMTVGTMRlX50soeEgxRxHdZXUHvJnP9K7APkdHOEqAwV2PoCs8VlbPJpzWQUwvYXL0ajIyptVaRevSBlg9tqIEnXXVyVlFkgLkReCPVzwImxjakM-XAUiDDMdL_gtwZtdRZcZpj3yUja89MDujcbaeLutBwdmcWhmkPlqua22RTaw",
            title: "New Autonomous Driving Chip Released",
            desc: "Leading tech giant unveils a processor capable of handling level 5 autonomy calculations in real-time environments.",
            time: "4 hours ago",
            views: "850"
        },
        {
            id: 3,
            category: "Finance",
            categoryColor: "bg-green-600/90",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRrXPSU6_gCnctMn5It_TXcjqncT-8CVR3kqsL_qvpiqy4sofEyGqi0BzEqkmYmy4kpEj_iQIE4n-09qwXj1tuKJPMGVRtZDN-uqc-Go_qPYnhj5ykLBZmETSs3bR-czCaw8W6vgxCOJ7Vr1JIBd19gM8Wm3FR9aNOdDas-Brm15xHaQg1Oo4P-kwTH3hWV8_HYRa5RWdA5L_o0sISalc9MYorVP2rpKTes87J6meT6hLg5ciggMVnUJ-ku3D9Nm6eIl2TCwo7WA",
            title: "AI Algorithms in Stock Trading",
            desc: "How predictive models are reshaping high-frequency trading strategies in 2023 and the implications for retail investors.",
            time: "6 hours ago",
            views: "2.1k"
        },
        {
            id: 4,
            category: "Education",
            categoryColor: "bg-yellow-600/90",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYe6uOSdQlOVCHOLOtxjHVZda9el-dWI_b5lGL-HQAlwMK_mDf7KjTNuuuE-0xwlAl5rcjozQC0pfHmYMwMWfAf9u7N2yWtPJqqcPFj0WVAMmRq8CXeKJssLBAJcq-ezwVWMM0APdA6LlBnpWXg2qk4R_B9wSo-ZnMYfLkvu91fPj6TfL20QxDRo2sPtQhreSwRrjzOAOPhyUR-R0r0P75KEfvvBZtYexGpERm6UhBiGIYdW6OwfSybfdSCsY0ztrjoY8jg8oA3g",
            title: "Customized Learning Plans via AI",
            desc: "New ed-tech platforms are using machine learning to adapt curriculums to individual student pacing and learning styles.",
            time: "8 hours ago",
            views: "540"
        },
        {
            id: 5,
            category: "Retail",
            categoryColor: "bg-purple-600/90",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOmZFx-oem0WF4KVHtocaZT-yFFeSU0M-GfEaun0ChC9PiPaNhO8F38GYhZR21pIIWfjboXBo5F_pCVl3BfVNZ6OUQXxx3-Pr3oCBkZT_Rrl1BDye2Q58QUpSxOBFixQOGfyur0Z5iwT7GQ5JZZDxlQN9M5P12pAklYuw7kxh6CE0lWJDZY21FFv4ugSBXRQULaImCtmN7KHnGyMNn5MSYklOnJNOOWFQf9R08QyEXB8oVUw62Kt2KDZB7AbpL1veUAQjma9gOMQ",
            title: "Predictive Inventory Management",
            desc: "Global retailers are slashing waste by 20% by implementing AI forecasting for seasonal demand.",
            time: "10 hours ago",
            views: "1.5k"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden pb-20 bg-background-light dark:bg-background-dark">
            <header className="sticky top-0 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between p-4 pb-2">
                    <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] flex-1 text-gray-900 dark:text-white">오늘의 AI 소식</h2>
                    <div className="flex items-center justify-end">
                        <Link to="/saved" className="flex items-center justify-center rounded-full h-10 w-10 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                            <span className="material-symbols-outlined text-[24px]">bookmarks</span>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="w-full">
                <p className="text-gray-500 dark:text-[#9dabb9] text-sm font-normal leading-normal pb-3 pt-4 px-4 text-center border-b border-gray-200 dark:border-gray-800 mb-2">
                    2023년 10월 27일 금요일
                </p>
            </div>

            <main className="flex flex-col gap-2 p-4 w-full">
                {feedItems.map((item) => (
                    <article 
                        key={item.id} 
                        onClick={() => handleCardClick(item.id)}
                        className="bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 transition-transform active:scale-[0.99] cursor-pointer"
                    >
                        <div className="flex flex-col">
                            <div className="w-full aspect-video bg-cover bg-center" style={{ backgroundImage: `url("${item.image}")` }}>
                                <div className="w-full h-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <span className={`inline-block px-3 py-1 ${item.categoryColor} text-white text-xs font-bold rounded-full backdrop-blur-sm`}>
                                        {item.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-4 flex flex-col gap-2">
                                <h3 className="text-lg font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-[#9dabb9] text-sm leading-relaxed line-clamp-2">
                                    {item.desc}
                                </p>
                                <div className="flex items-center justify-between mt-2 text-xs text-gray-400 dark:text-gray-500 font-medium">
                                    <span>{item.time}</span>
                                    <div className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[16px]">visibility</span>
                                        <span>{item.views}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </main>

            <BottomNavigation activeTab="home" />
        </div>
    );
};

export default Home;