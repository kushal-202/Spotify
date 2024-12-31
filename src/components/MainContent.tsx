import React from 'react';
import { Play } from 'lucide-react';

const playlists = [
  {
    title: "Today's Top Hits",
    description: "The biggest hits right now",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
  },
  {
    title: "Discover Weekly",
    description: "Your weekly mixtape of fresh music",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop"
  },
  {
    title: "Chill Vibes",
    description: "Kick back and relax",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop"
  },
  {
    title: "Rock Classics",
    description: "Rock legends & epic songs",
    image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&h=300&fit=crop"
  }
];

export default function MainContent() {
  return (
    <div className="ml-64 p-8 bg-gradient-to-b from-zinc-800 to-zinc-900 min-h-screen pb-24">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-6">Good afternoon</h1>
        <div className="grid grid-cols-3 gap-4">
          {playlists.slice(0, 6).map((playlist) => (
            <div 
              key={playlist.title}
              className="flex items-center bg-zinc-800/50 hover:bg-zinc-800 transition rounded overflow-hidden group cursor-pointer"
            >
              <img src={playlist.image} alt={playlist.title} className="w-20 h-20" />
              <span className="font-semibold text-white px-4">{playlist.title}</span>
              <button className="ml-auto mr-4 w-12 h-12 flex items-center justify-center bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition hover:scale-105">
                <Play size={24} className="text-black ml-1" />
              </button>
            </div>
          ))}
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Made for You</h2>
        <div className="grid grid-cols-5 gap-6">
          {playlists.map((playlist) => (
            <div 
              key={playlist.title}
              className="bg-zinc-800/40 p-4 rounded-lg hover:bg-zinc-800/80 transition cursor-pointer group"
            >
              <div className="relative mb-4">
                <img 
                  src={playlist.image} 
                  alt={playlist.title}
                  className="w-full aspect-square object-cover rounded-md"
                />
                <button className="absolute bottom-2 right-2 w-12 h-12 flex items-center justify-center bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition hover:scale-105 translate-y-2 group-hover:translate-y-0">
                  <Play size={24} className="text-black ml-1" />
                </button>
              </div>
              <h3 className="text-white font-semibold mb-1">{playlist.title}</h3>
              <p className="text-gray-400 text-sm">{playlist.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}