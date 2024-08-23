interface PopularAlbum{
    id:number,
    img: StaticImageData,
    title:string,
    subTitle:string
}


interface Artists{
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