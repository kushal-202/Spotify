import React from 'react';
import { Play, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';

export default function Player() {
  return (
    <div className="h-20 bg-zinc-900 border-t border-zinc-800 fixed bottom-0 w-full px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&fit=crop" 
            alt="Album cover" 
            className="w-12 h-12 rounded"
          />
          <div>
            <div className="text-white">Song Title</div>
            <div className="text-xs text-gray-400">Artist Name</div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 flex-1 max-w-[600px]">
          <div className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-white">
              <Shuffle size={20} />
            </button>
            <button className="text-gray-400 hover:text-white">
              <SkipBack size={20} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full hover:scale-105 transition">
              <Play size={20} className="text-black ml-1" />
            </button>
            <button className="text-gray-400 hover:text-white">
              <SkipForward size={20} />
            </button>
            <button className="text-gray-400 hover:text-white">
              <Repeat size={20} />
            </button>
          </div>
          
          <div className="w-full flex items-center gap-2">
            <span className="text-xs text-gray-400">0:00</span>
            <div className="h-1 rounded-full flex-1 bg-zinc-600">
              <div className="bg-white w-1/3 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-gray-400">3:45</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Volume2 size={20} className="text-gray-400" />
          <div className="w-24 h-1 rounded-full bg-zinc-600">
            <div className="bg-white w-1/2 h-1 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}