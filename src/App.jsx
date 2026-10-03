import "./App.css";
import Card from "./Card";
import Header from "./Header";

function App() {
  const profiles = [
    {
      name: "Stranger Things",
      role: "Sci-Fi • Mystery",
      description:
        "Sekelompok anak menghadapi berbagai kejadian misterius di kota kecil.",
      skills: ["Netflix", "Drama", "Mystery"],
      likes: 10,
      color: "#e50914",
      image: "https://cdn.kobo.com/book-images/708964da-f70d-46d9-b363-068a979f9252/353/569/90/False/stranger-things-library-edition-volume-1-graphic-novel.jpg",
    },

    {
      name: "Wednesday",
      role: "Comedy • Mystery",
      description:
        "Kisah Wednesday Addams menjalani kehidupan barunya di Nevermore Academy.",
      skills: ["Netflix", "Comedy", "Mystery"],
      likes: 5,
      color: "#704b9b",
      image: "https://thewilldowntown.com/wp-content/uploads/2025/08/wednesday-s2-1.jpeg",
    },

    {
      name: "Money Heist",
      role: "Crime • Thriller",
      description:
        "Sekelompok perampok menjalankan rencana besar dengan strategi yang rumit.",
      skills: ["Netflix", "Crime", "Thriller"],
      likes: 8,
      color: "#e50914",
      image: "https://geotimes.id/wp-content/uploads/2017/08/money-heist-s-4-1.jpg",
    },
  ];

  return (
    <div className="app">

      <Header />

      <main className="cards-container">
        {profiles.map((profile, index) => (
          <Card
            key={index}
            profile={profile}
          />
        ))}
      </main>

    </div>
  );
}

export default App;