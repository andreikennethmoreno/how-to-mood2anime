import Button from "./Button";

export default function ContentList({animeList, loading, error, page,  handleHideClick, hiddenAnime, handleNextPage , handlePrevPage}) {
    const filteredAnimeList = animeList.filter((anime) => !hiddenAnime.has(anime.mal_id));
    
    const handleCopyTitle = (title) => {
        navigator.clipboard.writeText(title)
          .then(() => {
            alert(`${title} copied to clipboard!`);
          })
          .catch((err) => {
            console.error("Failed to copy title: ", err);
          });
      };
    

    return (
        <>
    <div className="card bg-slate-100/5 mt-3 center-container card-compact bg-base-100 w-96 shadow-xl">

    {filteredAnimeList.length === 0 ? (
        <div className="p-5">
            <p>This Anime is Hidden</p>
            <div className="flex justify-between">
                <Button onClick={handlePrevPage} text={"⬅️ Back"}/>
                <Button  onClick={handleNextPage} text={"Next ➡️"}/>
            </div>
        </div>

    ): (
        filteredAnimeList.map((anime) => (

        <>
            <div key={anime.mal_id}>
            <figure className=" aspect-[16/9]">
                {anime.trailer?.embed_url ? (
                    <iframe className="w-full h-full" width="1044" height="587" 
                    src={anime.trailer.embed_url} 
                    title={`${anime.title} Trailer`}
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>  
                    </iframe>
                ): (
                    <p>Trailer does not exist</p>
                )}
                
                
            </figure>
            <div className="card-body text-left">
                <h2 className="card-title font-bold cursor-pointer">{anime.title}</h2>
                <p className="text-lg font-thin">
                    {anime.aired?.from ?  new Date(anime.aired.from).getFullYear() : 'N/A'}
                    &nbsp; · &nbsp;  {anime.episodes ?? 'N/A'} ep   
                    &nbsp; · ⭐{anime.score} 
                    &nbsp;· 🏆top {anime.popularity}
                </p>
                <div className="flex space-x-2">
                    {anime.genres?.map((genre, index) => (
                        <div key={index} className="badge badge-secondary badge-outline">
                            {genre.name}
                        </div>
                    )) || <div className="badge badge-secondary badge-outline">N/A</div>}

                </div>
                <p className="mt-3 font-thin">{anime.synopsis.split('.')[0] + '.'}</p>
                
                <div className="flex justify-between mt-3">
                    <Button onClick={handlePrevPage} text={"⬅️ Back"}/>
                    <Button onClick={() => handleHideClick(anime.mal_id)} text={"🙈 Hide"}/>
                    <Button onClick={handleNextPage} text={"Next ➡️"}/>
                </div>
            </div>
            </div>


        </>
    )
))}


        
        </div>

        </>
    )
}