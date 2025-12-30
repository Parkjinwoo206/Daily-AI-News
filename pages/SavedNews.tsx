import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../components/BottomNavigation';

interface SavedArticleProps {
    category: string;
    categoryClass: string;
    categoryTextClass: string;
    title: string;
    description: string;
    time: string;
    imageUrl: string;
    onClick: () => void;
}

const SavedArticleCard: React.FC<SavedArticleProps> = ({ 
    category, 
    categoryClass, 
    categoryTextClass, 
    title, 
    description, 
    time, 
    imageUrl, 
    onClick 
}) => {
    return (
        <article 
            onClick={onClick} 
            className="group relative flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-card-light dark:bg-card-dark border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all active:scale-[0.99] cursor-pointer"
        >
            <div className="flex flex-col flex-1 min-w-0 gap-2">
                <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${categoryClass} ${categoryTextClass}`}>
                        {category}
                    </span>
                    <button className="text-primary opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>bookmark</span>
                    </button>
                </div>
                <h3 className="text-base font-bold leading-snug text-gray-900 dark:text-white line-clamp-2">
                    {title}
                </h3>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed line-clamp-2">
                    {description}
                </p>
                <span className="text-xs text-gray-400 mt-1">{time}</span>
            </div>
            <div className="w-full sm:w-24 h-40 sm:h-24 shrink-0 rounded-lg bg-gray-200 dark:bg-gray-800 overflow-hidden relative">
                <img 
                    alt={category} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src={imageUrl} 
                />
            </div>
        </article>
    );
};

const SavedNews: React.FC = () => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/article/1');
    };

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-20">
            {/* Header */}
            <header className="sticky top-0 z-30 flex items-center justify-between px-5 py-4 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
                <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">저장된 보관함</h1>
                <button className="p-2 -mr-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors rounded-full active:bg-gray-200 dark:active:bg-gray-800">
                    <span className="material-symbols-outlined text-2xl">search</span>
                </button>
            </header>

            {/* Content Scroll Area */}
            <main className="flex-1 overflow-y-auto no-scrollbar">
                {/* Section: Today */}
                <div className="pt-6">
                    <div className="flex items-center px-5 mb-3">
                        <h2 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">오늘</h2>
                        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800 ml-4"></div>
                    </div>
                    <div className="flex flex-col gap-4 px-4">
                        <SavedArticleCard 
                            onClick={handleCardClick}
                            category="의료 AI"
                            categoryClass="bg-blue-100 dark:bg-blue-900/30"
                            categoryTextClass="text-primary"
                            title="AI, 희귀질환 3초 만에 진단 성공: 의료계 혁신 예고"
                            description="새로운 의료 AI 모델이 기존 전문의보다 20배 빠르게 희귀병을 진단하는 데 성공했습니다. 정확도 또한 98%에 달해..."
                            time="2시간 전"
                            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDnXEZY3uU3gI1lYxHdCWWvKxUtQbrIVPeLiVtKlgx4bh9t37tUPHtEQyG-IrgTjia-tQclTd_4fZnCbyZia8yDjtKYDdOPotiOYQvrQPMC95WAVCT8IC3MxIU5ZitZgB7v4RbrHSgfhIPzHmbn9GBzf-yNrlVuehYnyxXf5gBE8Cb4jwW36KyjsenT1dhW-IenicCMlXILKRVZlquMYixiKwdzNY7_oNr9lcyp8Nd5M1UlhXVzusmFmQzLo-0uLqOut9fVVouwXA"
                        />
                        <SavedArticleCard 
                            onClick={handleCardClick}
                            category="금융"
                            categoryClass="bg-green-100 dark:bg-green-900/30"
                            categoryTextClass="text-green-600 dark:text-green-400"
                            title="글로벌 은행들, 생성형 AI 전면 도입 가속화"
                            description="금융 서비스의 효율성을 극대화하기 위해 JP모건 등 주요 은행들이 고객 상담 및 자산 관리에 AI 도입을 서두르고 있습니다."
                            time="5시간 전"
                            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCHNhtalfH0LwAIb2S9VXQz1xEsGXE2-5rPwIFmQq8UK2R-xy1L2ScwuzHMIgFqznGLj1jq8ECqqyuih9fHtut19U0LPN6MQFGK8XrbYkxbDKJ4JI0ofLPeTPg_Yj-A2ksKXaujLCJ7U1ilIX1SO6lAE0USDpaGgVZQ_dDOk5svTGc0MCsv5Ry6h0inPjxvgzYHatLM0pVjiBtXOA4P-XUL2nOz_ldUXa9_YYhr4j1WlnxJCCsUj2z0sDOlj7r0fhHNW1dG0id5Pw"
                        />
                    </div>
                </div>

                {/* Section: Yesterday */}
                <div className="pt-8">
                    <div className="flex items-center px-5 mb-3">
                        <h2 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">어제</h2>
                        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800 ml-4"></div>
                    </div>
                    <div className="flex flex-col gap-4 px-4">
                        <SavedArticleCard 
                            onClick={handleCardClick}
                            category="테크"
                            categoryClass="bg-purple-100 dark:bg-purple-900/30"
                            categoryTextClass="text-purple-600 dark:text-purple-400"
                            title="오픈AI, 차세대 모델 'GPT-5' 티저 공개"
                            description="인간 수준의 추론 능력을 갖춘 것으로 알려진 차세대 모델의 티저 영상이 공개되며 업계의 관심이 집중되고 있습니다."
                            time="1일 전"
                            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDYoIps_FFtIDzUJ8oDPDA39C1PW0zrA05G2aCYJPJrMaqPqlvzn2yihsQHqgnePyJtVnfsxHabMgUorZ59m5N_6BJlTge9eIQjSF_nRpz49vQnk2GgPXs0u_9AMIzpiS1wQjQ7IpTKbNYE3VgEBuAXPZ4jhcJm90MpldcyDE95TB6P72f1Zg7w8s46GUrPCcPs77h-VJhTU_OTKASUjl0nRCIehmfqgoWPc-vPip6omFSbTSBEGRMaUR9fp0k9Sa0oqvvvwgE-Hg"
                        />
                    </div>
                </div>

                {/* Section: Last Week */}
                <div className="pt-8 mb-4">
                    <div className="flex items-center px-5 mb-3">
                        <h2 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">지난 주</h2>
                        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800 ml-4"></div>
                    </div>
                    <div className="flex flex-col gap-4 px-4">
                        <SavedArticleCard 
                            onClick={handleCardClick}
                            category="교육"
                            categoryClass="bg-orange-100 dark:bg-orange-900/30"
                            categoryTextClass="text-orange-600 dark:text-orange-400"
                            title="공교육에 도입되는 AI 튜터, 효과 검증 완료"
                            description="학생별 맞춤형 학습을 제공하는 AI 튜터 프로그램이 시범 운영 학교에서 학업 성취도를 15% 향상시켰습니다."
                            time="5월 12일"
                            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBxUt3NWDZ45ubT606uJzpdXk0u6doKqwVmLPbQUBvxFxVRTlr4DiHq16nKVD6PBQYUFSFk9VXXmz1kwsjil0MU3pv3LNLTAFJ8W6_7r7Sxk7SIvFyLIkiC9H1VFyUXpgmWi5FIOtR-iKZrgXyK5UTb5VRap4_EQYnXXJLOQvIVcTzxyxZi_soo-orP0jDTPryNuc0Aj5L0fkMOGIg49rgYaYs2HxCsgnOY15u7cwbOmgs_hC7mRM4fXN7cNg0VlYQSoeQaDO2q8w"
                        />
                         <SavedArticleCard 
                            onClick={handleCardClick}
                            category="모빌리티"
                            categoryClass="bg-gray-100 dark:bg-gray-700"
                            categoryTextClass="text-gray-600 dark:text-gray-300"
                            title="자율주행 레벨 4, 서울 도심 시범 운행 시작"
                            description="심야 시간대 자율주행 택시가 강남 일대에서 승객을 태우고 운행을 시작합니다."
                            time="5월 10일"
                            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuB-MGq4IQLl2pVaCA6OUEfBuAE1RO0ghrLMdhkd4xTskY6LEMIqPF7_mpIvNJJNxQMKwcxhYl4rPkPa_y78NIJ11vsIlpJuOUh4TAz1l-qETjO9GuBZRWO2qDK2yRaBvsLh9IHtWJGhLZIzzo_MED1QqmXcBvV3vmtF5efhx9uJndwBoru-g64q6g66DKWDnHxbKdxo4BLMKUDfBDFZuwM-eRdrehqk1_JkeHgp2qKEi7ilWXlhi66IRw5UGzQrAlZv8fme9gETbg"
                        />
                    </div>
                </div>

                <div className="h-8"></div>
            </main>

            <BottomNavigation activeTab="saved" />
        </div>
    );
};

export default SavedNews;