import "./styles.css";
import React, { useState } from "react";
import { songsDatabase } from "./DataBase";

let songsDB = Object.keys(songsDatabase);

export default function App() {
  const [selectedGenre, setGenre] = useState("SoftSongs");
  const [selectedSongs, setSongs] = useState("Perfect");
  let audio = new Audio("/dummy-audio.mp3");
  function softSong() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  function songClickHandler(music) {
    setSongs(music);
  }

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <nav class="navigation container">
        <div class="nav-brand">
          🎼Music <span style={{ color: "#059669" }}>PlayStation</span>
        </div>
      </nav>

      <section class="one">
        <img src="/music1-removebg-preview.png" alt="" />
        <h2>"Welcome to my music playlist!🎵"</h2>
      </section>

      <section class="two">
        <div class="wrapper">
          <h2>Click on image to play/pause the song 🎧</h2>
          <div className="btn_category">
            {songsDB.map((genre) => (
              <button
                onClick={() => genreClickHandler(genre)}
                style={{
                  cursor: "pointer",
                  background: "#E5E7EB",
                  borderRadius: "0.5rem",
                  padding: "0.5rem  1rem",
                  border: "1px solid black",
                  margin: "1rem 0.3rem"
                }}
              >
                {genre}
              </button>
            ))}
            <hr />
          </div>

          {songsDatabase[selectedGenre].map((song) => {
            return (
              <div className="place">
                <div className="card-image">
                  <img src={song.image} onClick={softSong} alt="place"></img>
                </div>
                <div className="card-info">
                  <h1 className="place-name">{song.name}</h1>
                </div>
                <div className="card-info1">
                  <h1>{song.singer}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <footer>
        <ul>
          <li>
            <a
              class="a1"
              href="https://www.linkedin.com/in/varnita-makrariya-307177191/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a class="a3" href="https://github.com/varnita619">
              Github
            </a>
          </li>
          <li>
            <a class="a4" href="https://twitter.com/home?lang=en">
              Twitter
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
