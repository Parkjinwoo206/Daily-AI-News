import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArticleDetail: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-screen bg-background-light dark:bg-background-dark font-display antialiased text-[#111418] dark:text-white overflow-hidden">
            {/* Top App Bar */}
            <header className="flex items-center justify-between p-4 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md sticky top-0 z-20 border-b border-gray-200 dark:border-gray-800 shrink-0">
                <button 
                    onClick={() => navigate(-1)}
                    aria-label="Go back" 
                    className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                    <span className="material-symbols-outlined text-[#111418] dark:text-white text-[24px]">arrow_back_ios_new</span>
                </button>
                <div className="flex items-center gap-2">
                    <button aria-label="Bookmark" className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-[#111418] dark:text-white text-[24px]">bookmark_border</span>
                    </button>
                    <button aria-label="Share" className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-[#111418] dark:text-white text-[24px]">ios_share</span>
                    </button>
                </div>
            </header>

            {/* Main Scrollable Content */}
            <main className="flex-1 overflow-y-auto no-scrollbar pb-24">
                {/* Article Header Info */}
                <div className="px-5 pt-6 pb-2">
                    {/* Chips */}
                    <div className="flex gap-2 mb-4 flex-wrap">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300 border border-primary/20">
                            Supply Chain
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                            AI Adoption
                        </span>
                    </div>
                    {/* Headline */}
                    <h1 className="text-3xl font-bold leading-tight tracking-tight mb-4 text-[#111418] dark:text-white">
                        Generative AI Transforms Supply Chain Management
                    </h1>
                    {/* Meta Data */}
                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-6">
                        <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[18px]">schedule</span>
                            <span>2023.10.27</span>
                        </div>
                        <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                        <div className="flex items-center gap-1 font-medium text-primary">
                            <span className="material-symbols-outlined text-[18px]">newsmode</span>
                            <span>TechCrunch</span>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="w-full px-5 mb-8">
                    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg group">
                        <img 
                            alt="Abstract visualization of digital logistics network and AI data flow" 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh8XzD2zCcKoFxkr9wozNdXX2uNBCoX-0aRyZBndAPdQ0vWvhl_xKqhjaFhSB4gyTKITUOVPFB_HPyOSMf9jw2cYsPS0sv7HqS6D6Rpv591HXAmZrSL58ZewWxeAoWw3pcYY84gJyMplm-Zx7Dzq1ORNA9BpsN4dkFYHe_M9MyQlIb8iKYp82a2Cg3Lhaw4x4IjnMusxu-D8yx88THOl4AJckkaYhsfAywTCSXERw2SKsOJEldHLjILMTsct9Jqxw6TWdc5QnOKQ"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <p className="mt-2 text-xs text-center text-gray-400 italic">AI가 생성한 물류 네트워크 최적화 시뮬레이션</p>
                </div>

                {/* AI Summary Card */}
                <div className="px-5 mb-8">
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#1e2936] dark:to-[#1a2632] border border-gray-200 dark:border-gray-700 p-5 shadow-sm">
                        {/* Decor element */}
                        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                            <span className="material-symbols-outlined text-6xl text-primary">auto_awesome</span>
                        </div>
                        <div className="flex items-center gap-2 mb-4 text-primary">
                            <span className="material-symbols-outlined text-[20px] animate-pulse">auto_awesome</span>
                            <h3 className="text-sm font-bold uppercase tracking-wider">AI 요약 (AI Summary)</h3>
                        </div>
                        <div className="space-y-4 relative z-10">
                            <div className="flex gap-3 items-start">
                                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                                <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                                    <strong className="text-gray-900 dark:text-white">물류 최적화:</strong> 주요 물류 기업들이 생성형 AI를 도입하여 운송 경로를 최적화하고 있으며, 이를 통해 연간 연료 소비량을 평균 15% 절감하고 있습니다.
                                </p>
                            </div>
                            <div className="flex gap-3 items-start">
                                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                                <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                                    <strong className="text-gray-900 dark:text-white">실시간 예측:</strong> AI 모델은 기상 조건, 교통 상황, 재고 수준을 실시간으로 분석하여 공급망 중단을 사전에 예측하고 대응 방안을 제안합니다.
                                </p>
                            </div>
                            <div className="flex gap-3 items-start">
                                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                                <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                                    <strong className="text-gray-900 dark:text-white">비용 절감:</strong> 자동화된 재고 관리 시스템 도입으로 창고 운영 비용이 20% 감소하였으며, 인적 오류가 크게 줄어들었습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Detailed Content Placeholder */}
                <div className="px-5 space-y-6 text-base leading-7 text-gray-600 dark:text-gray-300">
                    <p>
                        최근 테크크런치(TechCrunch)의 보도에 따르면, 글로벌 공급망 관리 분야에서 생성형 AI의 도입이 가속화되고 있습니다. 특히 FedEx와 DHL 같은 대형 물류 기업들은 자체 AI 모델을 개발하여 운영 효율성을 극대화하는 데 집중하고 있습니다.
                    </p>
                    <p>
                        이러한 변화의 핵심은 '데이터 기반 의사결정'입니다. 과거에는 경험에 의존했던 경로 설정이 이제는 수십억 개의 데이터 포인트를 분석하는 AI 알고리즘에 의해 이루어집니다. 이는 단순히 비용 절감뿐만 아니라, 탄소 배출 감소라는 ESG 경영 목표 달성에도 기여하고 있습니다.
                    </p>
                    {/* Quote Block */}
                    <div className="border-l-4 border-primary pl-4 py-1 my-6 italic text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-white/5 pr-4 rounded-r-lg">
                        "AI는 더 이상 선택이 아닌 필수 생존 도구입니다. 공급망의 투명성을 확보하는 것이 미래 경쟁력의 핵심이 될 것입니다."
                        <br/>
                        <span className="text-sm text-gray-500 mt-2 block not-italic">— Sarah Chen, Senior Logistics Analyst</span>
                    </div>
                    <p>
                        전문가들은 향후 5년 내에 AI가 없는 공급망 관리는 상상하기 어려울 것이라고 전망합니다. 중소기업들 또한 클라우드 기반의 AI 솔루션을 통해 이러한 혁신에 동참할 수 있는 기회가 열리고 있습니다.
                    </p>
                </div>
                <div className="h-8"></div>
            </main>

            {/* Sticky Bottom Action Bar */}
            <div className="w-full bg-white/80 dark:bg-[#101922]/90 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 p-4 pb-8 z-30 shrink-0">
                <button className="w-full h-12 flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 active:bg-blue-700 text-white rounded-lg font-bold text-base transition-all shadow-lg shadow-primary/30">
                    <span>원문 기사 전체 보기</span>
                    <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                </button>
            </div>
        </div>
    );
};

export default ArticleDetail;