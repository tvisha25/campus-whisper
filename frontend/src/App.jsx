import React, { useState } from 'react';
import { Heart, ThumbsDown, MessageCircle, Search } from 'lucide-react';

const ConfessionWall = () => {
  const [posts, setPosts] = useState([
    { id: 1, date: 'Sept. 20, 2025, 2:09 a.m.', text: 'BigRedHacks ✨', likes: 1, color: 'bg-purple-50' },
    { id: 2, date: 'Sept. 3, 2025, 12:05 a.m.', text: "Don't rush something that you want to last forever. 💕", likes: 0, color: 'bg-pink-50' },
    { id: 3, date: 'Sept. 3, 2025, 12:04 a.m.', text: 'Looked in your eye and found my favorite color. ☁️', likes: 0, color: 'bg-yellow-50' },
    { id: 4, date: 'Sept. 3, 2025, 12:03 a.m.', text: "Everything I like is expensive, fattening, and won't text me back. 🎀", likes: 0, color: 'bg-blue-50' },
  ]);

  return (
    <div className="min-h-screen bg-[#fff5f7] font-sans text-gray-700">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center text-white font-bold">C</div>
          <span className="font-semibold text-pink-400 tracking-tight">Campus Whisper</span>
        </div>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Search confessions..." 
            className="px-4 py-1.5 border border-pink-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-200"
          />
          <button className="bg-pink-300 hover:bg-pink-400 text-white px-4 py-1.5 rounded-full text-sm transition-colors flex items-center gap-1">
            <Search size={14} /> Search
          </button>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="py-12 text-center bg-white border-b border-pink-50">
        <h1 className="text-4xl font-serif italic text-pink-400">Your Own Confession Wall</h1>
      </header>

      {/* Post Input Section */}
      <main className="max-w-6xl mx-auto p-8">
        <div className="mb-10 bg-white p-6 rounded-2xl shadow-sm border border-pink-100">
          <textarea 
            placeholder="Write my own confession post! ✨"
            className="w-full h-32 p-4 text-gray-600 bg-pink-50/30 rounded-xl border-none focus:ring-2 focus:ring-pink-200 resize-none"
          />
          <button className="mt-4 bg-teal-300 hover:bg-teal-400 text-white font-medium py-2 px-8 rounded-lg transition-all shadow-md active:scale-95">
            Submit
          </button>
        </div>

        {/* Confession Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div key={post.id} className={`${post.color} p-6 rounded-3xl shadow-sm border border-white flex flex-col items-center text-center transition-transform hover:scale-[1.02]`}>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4 font-medium">{post.date}</p>
              
              <div className="flex-grow flex items-center justify-center mb-6">
                <p className="text-sm font-medium leading-relaxed">{post.text}</p>
              </div>

              <div className="flex items-center gap-4 border-t border-white/50 pt-4 w-full justify-center">
                <button className="flex items-center gap-1 group">
                  <Heart size={18} className="text-pink-400 group-hover:fill-pink-400 transition-colors" />
                  <span className="text-xs text-gray-500">{post.likes}</span>
                </button>
              </div>
              <button className="mt-3 text-[10px] text-teal-400 font-bold uppercase tracking-tighter hover:underline">
                View
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ConfessionWall;