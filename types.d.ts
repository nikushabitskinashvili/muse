interface PopularAlbum{
    id:number,
    img: StaticImageData,
    title?:string,
    subTitle?:string,
    total?:number
}


interface Artists{
    name: string
    id:number,
    img: StaticImageData,
    title:string
}

interface PlaylistData{
    id:number,
    img: StaticImageData,
    title:string,
    totalTracks:number,
    totalTime:number
}