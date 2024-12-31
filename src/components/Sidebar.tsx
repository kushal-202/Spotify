import React from 'react';
import { Home, Search, Library, PlusSquare, Heart } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 bg-black h-full flex flex-col fixed left-0 top-0 p-6">
      <div className="text-white text-2xl font-bold mb-8">Spotify Clone</div>
      
      <nav className="space-y-6">
        <div className="space-y-3">
          <a href="#" className="text-gray-300 hover:text-white flex items-center gap-4 transition">
            <Home size={24} />
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-white flex items-center gap-4 transition">
            <Search size={24} />
            Search
          </a>
          <a href="#" className="text-gray-300 hover:text-white flex items-center gap-4 transition">
            <Library size={24} />
            Your Library
          </a>
        </div>

        <div className="space-y-3">
          <a href="#" className="text-gray-300 hover:text-white flex items-center gap-4 transition">
            <PlusSquare size={24} />
            Create Playlist
          </a>
          <a href="#" className="text-gray-300 hover:text-white flex items-center gap-4 transition">
            <Heart size={24} />
            Liked Songs
          </a>
        </div>
      </nav>

      <div className="mt-6 pt-6 border-t border-gray-800">
        <div className="text-xs text-gray-400">Your Playlists</div>
        <div className="mt-4 space-y-2">
          {['Daily Mix 1', 'Discover Weekly', 'Release Radar', 'Summer Hits', 'Chill Vibes'].map((playlist) => (
            <div key={playlist} className="text-gray-300 hover:text-white cursor-pointer">
              {playlist}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}