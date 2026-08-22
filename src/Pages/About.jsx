import React from "react";
import logo from "../assets/logo.png";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/30 rounded-full blur-3xl"></div>
        <div className="absolute top-20 -right-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">

          <span className="inline-block bg-red-500/10 border border-red-500/30 text-red-400 px-5 py-2 rounded-full text-sm font-semibold mb-6">
            📰 ABOUT NEWSHUB
          </span>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            News That
            <span className="text-red-500"> Matters.</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-8">
            NewsHub is a modern news portal designed to keep you informed
            with the latest stories, breaking news and important updates
            from around the world.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <button className="bg-red-600 hover:bg-red-700 px-7 py-3 rounded-full font-bold transition duration-300 hover:scale-105">
              Explore News →
            </button>

            <button className="border border-gray-700 hover:border-red-500 px-7 py-3 rounded-full font-bold transition duration-300">
              Our Features
            </button>

          </div>

        </div>
      </section>


      {/* ================= STATS ================= */}
      <section className="max-w-6xl mx-auto px-6 -mt-5 relative">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:border-red-500/50 transition">
            <h2 className="text-3xl md:text-4xl font-black text-red-500">
              24/7
            </h2>
            <p className="text-gray-400 mt-2">
              News Updates
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:border-red-500/50 transition">
            <h2 className="text-3xl md:text-4xl font-black text-red-500">
              7+
            </h2>
            <p className="text-gray-400 mt-2">
              Categories
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:border-red-500/50 transition">
            <h2 className="text-3xl md:text-4xl font-black text-red-500">
              🌍
            </h2>
            <p className="text-gray-400 mt-2">
              Global News
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:border-red-500/50 transition">
            <h2 className="text-3xl md:text-4xl font-black text-red-500">
              ⚡
            </h2>
            <p className="text-gray-400 mt-2">
              Fast Updates
            </p>
          </div>

        </div>

      </section>


      {/* ================= ABOUT CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>

            <span className="text-red-500 font-bold uppercase tracking-widest">
              Who We Are
            </span>

            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">
              Information at your
              <span className="text-red-500"> fingertips.</span>
            </h2>

            <p className="text-gray-400 text-lg leading-8 mb-5">
              NewsHub is created to make reading news simple, fast and
              enjoyable. Instead of searching multiple websites, users can
              discover different types of news in one place.
            </p>

            <p className="text-gray-400 text-lg leading-8">
              Our platform provides category-based news including Business,
              Entertainment, Health, Science, Sports and Technology.
            </p>

          </div>


          {/* Right Card */}
          <div className="relative">

            <div className="absolute inset-0 bg-red-600/20 blur-3xl"></div>

            <div className="relative bg-gradient-to-br from-red-600 to-red-900 rounded-3xl p-8 md:p-10 shadow-2xl">

              <div className="text-6xl mb-6">
                📰
              </div>

              <h3 className="text-3xl font-black mb-4">
                Stay Informed
              </h3>

              <p className="text-red-100 leading-7">
                Discover important stories, trending topics and the latest
                updates from different areas of the world.
              </p>

              <div className="mt-8 h-2 bg-red-950/50 rounded-full overflow-hidden">
                <div className="h-full bg-white w-4/5 rounded-full"></div>
              </div>

              <div className="flex justify-between mt-3 text-sm text-red-100">
                <span>Latest Updates</span>
                <span>80%</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section className="bg-white/5 border-y border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="text-center mb-14">

            <span className="text-red-500 font-bold uppercase tracking-widest">
              Why NewsHub?
            </span>

            <h2 className="text-4xl md:text-5xl font-black mt-4">
              Everything You Need
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              A simple and powerful platform designed for modern news
              readers.
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="group bg-slate-900 border border-white/10 rounded-2xl p-7 hover:border-red-500/60 hover:-translate-y-2 transition-all duration-300">

              <div className="w-14 h-14 flex items-center justify-center bg-red-500/10 rounded-xl text-3xl mb-6 group-hover:bg-red-500 transition">
                📰
              </div>

              <h3 className="text-xl font-bold mb-3">
                Latest News
              </h3>

              <p className="text-gray-400 leading-7">
                Get the latest stories and important updates from around
                the world.
              </p>

            </div>


            {/* Card 2 */}
            <div className="group bg-slate-900 border border-white/10 rounded-2xl p-7 hover:border-red-500/60 hover:-translate-y-2 transition-all duration-300">

              <div className="w-14 h-14 flex items-center justify-center bg-red-500/10 rounded-xl text-3xl mb-6 group-hover:bg-red-500 transition">
                📂
              </div>

              <h3 className="text-xl font-bold mb-3">
                Categories
              </h3>

              <p className="text-gray-400 leading-7">
                Explore Business, Sports, Health, Science, Entertainment
                and Technology news.
              </p>

            </div>


            {/* Card 3 */}
            <div className="group bg-slate-900 border border-white/10 rounded-2xl p-7 hover:border-red-500/60 hover:-translate-y-2 transition-all duration-300">

              <div className="w-14 h-14 flex items-center justify-center bg-red-500/10 rounded-xl text-3xl mb-6 group-hover:bg-red-500 transition">
                ⚡
              </div>

              <h3 className="text-xl font-bold mb-3">
                Fast Updates
              </h3>

              <p className="text-gray-400 leading-7">
                News content is fetched dynamically through an external
                news API.
              </p>

            </div>


            {/* Card 4 */}
            <div className="group bg-slate-900 border border-white/10 rounded-2xl p-7 hover:border-red-500/60 hover:-translate-y-2 transition-all duration-300">

              <div className="w-14 h-14 flex items-center justify-center bg-red-500/10 rounded-xl text-3xl mb-6 group-hover:bg-red-500 transition">
                📱
              </div>

              <h3 className="text-xl font-bold mb-3">
                Responsive
              </h3>

              <p className="text-gray-400 leading-7">
                Enjoy NewsHub smoothly on mobile, tablet and desktop
                devices.
              </p>

            </div>


            {/* Card 5 */}
            <div className="group bg-slate-900 border border-white/10 rounded-2xl p-7 hover:border-red-500/60 hover:-translate-y-2 transition-all duration-300">

              <div className="w-14 h-14 flex items-center justify-center bg-red-500/10 rounded-xl text-3xl mb-6 group-hover:bg-red-500 transition">
                🔗
              </div>

              <h3 className="text-xl font-bold mb-3">
                Easy Access
              </h3>

              <p className="text-gray-400 leading-7">
                Quickly open and read the complete news article from its
                original source.
              </p>

            </div>


            {/* Card 6 */}
            <div className="group bg-slate-900 border border-white/10 rounded-2xl p-7 hover:border-red-500/60 hover:-translate-y-2 transition-all duration-300">

              <div className="w-14 h-14 flex items-center justify-center bg-red-500/10 rounded-xl text-3xl mb-6 group-hover:bg-red-500 transition">
                🌎
              </div>

              <h3 className="text-xl font-bold mb-3">
                Global Coverage
              </h3>

              <p className="text-gray-400 leading-7">
                Discover stories and updates covering different topics
                from around the world.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= TECHNOLOGY ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-12">

          <span className="text-red-500 font-bold uppercase tracking-widest">
            Technology
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Built With Modern Tools
          </h2>

        </div>


        <div className="flex flex-wrap justify-center gap-4">

          <span className="px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold">
            ⚛️ React.js
          </span>

          <span className="px-6 py-3 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-bold">
            🟨 JavaScript
          </span>

          <span className="px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold">
            🎨 Tailwind CSS
          </span>

          <span className="px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 font-bold">
            🚀 Axios
          </span>

          <span className="px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-bold">
            🌐 News API
          </span>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-10 md:p-16 text-center">

          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-black/10 rounded-full"></div>

          <div className="relative">

            <h2 className="text-4xl md:text-5xl font-black mb-5">
              Stay Updated. Stay Informed.
            </h2>

            <p className="text-red-100 max-w-2xl mx-auto text-lg mb-8">
              Explore the latest news and discover stories that matter to
              you.
            </p>

            <button className="bg-white text-red-600 px-8 py-4 rounded-full font-black hover:scale-105 transition duration-300">
              Explore Latest News →
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default About;