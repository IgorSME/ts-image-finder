export interface IAppState{
    searchName: string,
    images: [] | IDataItem[],
    page: number,
    loading: boolean,
    showModal: boolean,
    largeImage: {largeImageURL:string | undefined},
}

export interface IDataItem{
    id: number,
    webformatURL: string,
    largeImageURL:string
}

export interface IImageGaleryList{
    images: IDataItem[],
    onClick:(largeImageURL: string) => void;
}
export interface IImageGaleryItem{
    // key:string,
    src:string,
    largeImageURL:string,    
    onClick: (largeImageURL: string) => void;
}

export interface IButtonLoad{
    onClick:React.MouseEventHandler<HTMLButtonElement>;
}

export interface IModalProps{
    onClick:()=>void,
    children: React.ReactNode
}
export interface ILoader{
    visible:boolean
}
export interface ISearchState{
    searchName:string
}
export interface ISearchProps{
    onSubmit:(searchName:string)=>void
}
