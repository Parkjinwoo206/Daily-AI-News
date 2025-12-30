export interface NewsItem {
    id: number | string;
    category: string;
    categoryColor: string;
    image: string;
    title: string;
    desc: string;
    time: string;
    views: string;
}

export interface SavedItem extends NewsItem {
    savedDate?: string;
}

export interface NavItemProps {
    to?: string;
    icon: string;
    label: string;
    active?: boolean;
    onClick?: () => void;
}