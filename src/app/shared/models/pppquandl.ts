//Platinum and Palladium Prices Time series from Quandl

export interface PPPQuandl {
    dataset: Dataset;
}

interface Dataset {
    id: number;
    dataset_code: string;
    database_code: string;
    name: string;
    description: string;
    refreshed_at: Date;
    newest_available_date: string;
    oldest_available_date: string;
    column_names: string[];
    frequency: string;
    type: string;
    premium: boolean;
    limit?: any;
    transform?: any;
    column_index?: any;
    start_date: string;
    end_date: string;
    data: any[];
    collapse?: any;
    order?: any;
    database_id: number;
}
