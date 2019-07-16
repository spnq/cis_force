
export interface iUser {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        iDatum[];
}

export interface iDatum {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface iSingle {
    data: iData;
}

export interface iData {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}
