import {FilmDetails, } from "@/components/FilmDetails/FilmDetails";
import {Reviews} from "@/components/Reviews/Reviews";

const filmDetails = {
    title: 'The Simpsons',
    genre: "comedy",
    seasonCount: 10,
    reviews: [
        {
            author: 'John F. Kennedy',
            text: 'So funny!',
            rating: 5,
            id: '1',
        },
        {
            author: 'Jennifer Lawrence',
            text: 'Yay',
            rating: 5,
            id: '2',
        },
        {
            author: 'Draco Malfoy',
            text: 'No wizards???',
            rating: 2,
            id: '3',
        }
    ]
}
export default function Home() {
  return (
      <div>
        <header/>
        <FilmDetails
            title={filmDetails.title}
            genre={filmDetails.genre}
            seasonCount={filmDetails.seasonCount}
        />
        <Reviews reviews={filmDetails.reviews}/>
        <footer />
      </div>
  )
}
