import Carousel from "./Carousel";
import Movie from "./Movie";

export default function ComingSoon() {
  return (
    <>
      <h2 className="mb-4">Coming Soon</h2>
      <Carousel slidesPerView={5.5} pagination={false}>
        <Movie
          image="/img/A-Quiet-Place-Day-One.jpg"
          largeFormat={false}
          title="A Quiet Place - Day One"
        />
        <Movie
          image="/img/Deadpool-and-Wolverine.jpg"
          largeFormat={false}
          title="Deadpool & Wolverine"
        />
        <Movie
          image="/img/Furiosa-A-Mad-Max-Saga.jpg"
          largeFormat={false}
          title="Furiosa - A Mad Max Saga"
        />
        <Movie image="/img/IF.jpg" largeFormat={false} title="IF" />
        <Movie
          image="/img/Inside-Out-2.jpg"
          largeFormat={false}
          title="Inside Out 2"
        />
        <Movie
          image="/img/The-Garfield-Movie.jpg"
          largeFormat={false}
          title="The Garfield Movie"
        />
        <Movie
          image="/img/A-Quiet-Place-Day-One.jpg"
          largeFormat={false}
          title="title"
        />
      </Carousel>
    </>
  );
}
