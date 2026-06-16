import barcaImg from "../assets/barca.jpg";
import cmatImg from "../assets/cmat.jpg";
import eireImg from "../assets/ireland.jpg";
import chessImg from "../assets/chess.jpg";

//show a picture of each image, along with title and description
export default function Interests() {
  return (
    <main>
      <h1 className="interests-title">Interests</h1>

      <div className="interests-grid">
        <section className="interest-card">
          <h2>Soccer/Football</h2>
          <img src={barcaImg} alt="barca" className="barcaImg" />
          <p>
            Soccer has been a lifelong passion of mine. I have been playing the
            sport since I was a child for the competitive nature as well as
            camraderie between my teammates. I am also a very passionate
            professional soccer fan, supporting FC Barcelona. I have traveled to
            places around the world due to my love for the sport, including
            Spain, England, Ireland, and Mexico. I will be eagerly following the
            World Cup this year in my home country of the United States.
          </p>
        </section>
        <section className="interest-card">
          <h2>Music</h2>
          <img src={cmatImg} alt="cmat" className="cmatImg" />
          <p>
            This interest kind of snuck up on me, as I only became really
            passionate about it during college. I gained a huge interest of
            music, listening to my favorite artists and seeing them perform live
            in person. I am a huge concert goer, with having been to a great
            number of shows over the last couple years. I have also seen some of
            my favorite artists perform in foreign countries around the world
            like Ireland and Spain.
          </p>
        </section>
        <section className="interest-card">
          <h2>Traveling</h2>
          <img src={eireImg} alt="eire" className="eireImg" />
          <p>
            Traveling is a huge interest of mine, as I love to learn about new
            cultures and people around the world. My parents are also immigrants
            to the United States, so visiting their home country has always been
            a great experience to see family across the world. I think it is
            very important to learn about the different cultures and histories
            around the world, and immerse yourself in them to learn new things.
          </p>
        </section>
        <section className="interest-card">
          <h2>Chess</h2>
          <img src={chessImg} alt="chess" className="chessImg" />
          <p>
            I learned to play chess at a young age as my family encouraged me to
            learn the game to enhance my problem-solving skills. I have enjoyed
            the game ever since, as the infinite possibilities of positions and
            games intrigues me. After 15-20 moves you are likely to play a game
            that has never been played before, and you have to adapt and think
            on your feet often to try to win the match or get out of a
            problematic situation. Solving chess puzzles is also entertaining
            for me, as you often have to look 5 or more moves ahead to figure
            out the best next course of action.
          </p>
        </section>
      </div>
    </main>
  );
}
