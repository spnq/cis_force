
export interface IUser {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IDatum[];
}

export interface IDatum {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface ISingle {
    data: IData;
}

export interface IData {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}
