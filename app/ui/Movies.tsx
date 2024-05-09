import Carousel from "./Carousel";
import Movie from "./Movie";

export default function Movies() {
  return (
    <Carousel>
      <Movie
        title={"Kung Fu Panda 4"}
        subtitle={"Everyone's favourite panda is back"}
        image={"/img/kungfu-panda.webp"}
      />
      <Movie
        title={"Godzilla x Kong"}
        subtitle={"The next chapter of the Monsterverse begins"}
        image={"/img/godzilla.webp"}
      />
      <Movie
        title={"Challengers"}
        subtitle={"Experience a tale of rivalry and redemption"}
        image={"/img/challengers.webp"}
      />
      <Movie
        title={"Strangers"}
        subtitle={"Could you trust a perfect stranger?"}
        image={"/img/strangers.webp"}
      />
    </Carousel>
  );
}
