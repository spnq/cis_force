
export interface IPageInfo {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IUserData[];
}

export interface ISingle {
    data: IUserData;
}

export interface IUserData {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}
