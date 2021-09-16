import React, { useState } from "react";
import "./styles.css";

const animeList = {
  action: [
    "Fullmetal Alchemist",
    "Trigun",
    "Kill la Kill",
    "Darker than Black",
    "Gurren Lagann"
  ],
  adventure: [
    "One Piece",
    "Fairy Tail",
    "Hunter X Hunter",
    "Kino's Journey",
    "Spice and Wolf"
  ],
  comedy: [
    "Gintama",
    "The Melancholy of Haruhi Suzumiya",
    "The Devil Is a Part-Timer!",
    "Daily Lives of High School Boys",
    "Nichijou"
  ],
  scifi: [
    "Evangelion",
    "Space Dandy",
    "Cowboy Bebop",
    "Knights of Sidonia",
    "Outlaw Star"
  ]
};

export default function App() {
  const [items, setItems] = useState("");
  const [genre, setGenre] = useState("");
  function onClickHandler(id, genre) {
    switch (id) {
      case 1:
        setItems(animeList.action);
        setGenre(genre);
        break;
      case 2:
        setItems(animeList.adventure);
        setGenre(genre);
        break;
      case 3:
        setItems(animeList.comedy);
        setGenre(genre);
        break;
      case 4:
        setItems(animeList.scifi);
        setGenre(genre);
        break;
      default:
        "Error : There's a problem, please try after sometime";
        break;
    }
  }
  return (
    <div className="App">
      <nav>
        <h1>Best Anime</h1>
        <p> I have curated a list of great animes of different genres</p>
      </nav>
      <div id="btn-container">
        <button onClick={() => onClickHandler(1, "Action")}>Action</button>
        <button onClick={() => onClickHandler(2, "Adventure")}>
          Adventure
        </button>
        <button onClick={() => onClickHandler(3, "Comedy")}>Comedy</button>
        <button onClick={() => onClickHandler(4, "Sci-fi")}>Sci-Fi</button>
      </div>
      <div id="list-container">
        <div id="genre">
          {" "}
          <h2> {genre} </h2>
        </div>
        <div class="listItem">
          <h3>{items[0]}</h3>
        </div>
        <div class="listItem">
          <h3>{items[1]}</h3>
        </div>
        <div class="listItem">
          <h3>{items[2]}</h3>
        </div>
        <div class="listItem">
          <h3>{items[3]}</h3>
        </div>
        <div class="listItem">
          <h3>{items[4]}</h3>
        </div>
      </div>
    </div>
  );
}
