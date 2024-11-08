import Button from "./Button";
import moods from "../assets/mood.js"

export default function MoodFilter({ selectedGenre , toggleGenre}) {
    return (
        <>
            <h className="my-6 grid mood-center-container lg:text-5xl text-4xl font-bold">
                Discover top-rated Anime based on your mood
            </h>
            <p>
                How are you feeling right now?
            </p>

            <div class="grid lg:grid-cols-4 grid-cols-3 my-6 lg:gap-6 gap-4 mood-center-container">
                {Object.entries(moods).map(([mood, genre], index) => (
                    <Button key={index} text={mood} className={"btn-outline"}
                    onClick={() => toggleGenre(mood, genre)}
                    />                    
                ))}
            </div>



        </>
    )
}