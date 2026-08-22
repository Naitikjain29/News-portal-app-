

import React from "react";

const Career = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote / India",
      type: "Full Time",
      experience: "1-3 Years",
      icon: "💻",
    },
    {
      title: "News Content Writer",
      department: "Editorial",
      location: "Remote / India",
      type: "Full Time",
      experience: "0-2 Years",
      icon: "✍️",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / India",
      type: "Full Time",
      experience: "1-3 Years",
      icon: "🎨",
    },
    {
      title: "News Researcher",
      department: "Editorial",
      location: "Remote / India",
      type: "Full Time",
      experience: "0-2 Years",
      icon: "🔎",
    },
    {
      title: "Backend Developer",
      department: "Engineering",
      location: "Remote / India",
      type: "Full Time",
      experience: "1-3 Years",
      icon: "⚙️",
    },
    {
      title: "Social Media Manager",
      department: "Marketing",
      location: "Remote / India",
      type: "Full Time",
      experience: "1-2 Years",
      icon: "📱",
    },
  ];

  const benefits = [
    {
      icon: "🏠",
      title: "Remote Friendly",
      description:
        "Work from wherever you are and stay connected with our distributed team.",
    },
    {
      icon: "📚",
      title: "Learning & Growth",
      description:
        "Improve your skills through projects, learning resources, and mentorship.",
    },
    {
      icon: "🚀",
      title: "Career Growth",
      description:
        "Take ownership of meaningful projects and grow with the NewsHub team.",
    },
    {
      icon: "🤝",
      title: "Great Team",
      description:
        "Work with creative, passionate, and supportive people.",
    },
    {
      icon: "💡",
      title: "Creative Freedom",
      description:
        "Share your ideas and help us build a better news experience.",
    },
    {
      icon: "⚖️",
      title: "Work-Life Balance",
      description:
        "We believe productive teams need a healthy and balanced work environment.",
    },
  ];

  const scrollToJobs = () => {
    document.getElementById("open-positions")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gray-950 text-white">

        {/* Background Effects */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/30 rounded-full blur-3xl"></div>

        <div className="absolute top-20 -right-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Hero Content */}
            <div>

              <span className="inline-block bg-red-500/10 border border-red-500/30 text-red-400 px-5 py-2 rounded-full text-sm font-bold mb-6">
                🚀 JOIN OUR TEAM
              </span>

              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                Build the
                <span className="text-red-500"> Future </span>
                of News.
              </h1>

              <p className="text-gray-400 text-lg md:text-xl leading-8 max-w-2xl">
                Join NewsHub and help us create a faster, smarter, and more
                engaging way for people to discover the news that matters.
              </p>

              <div className="flex flex-wrap gap-4 mt-9">

                <button
                  onClick={scrollToJobs}
                  className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:-translate-y-1"
                >
                  View Open Positions →
                </button>

                <button
                  onClick={() =>
                    document
                      .getElementById("why-join")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="border border-gray-700 hover:border-red-500 px-8 py-4 rounded-xl font-bold transition-all duration-300"
                >
                  Why NewsHub?
                </button>

              </div>

            </div>


            {/* Hero Card */}
            <div className="relative">

              <div className="absolute inset-0 bg-red-600/20 blur-3xl"></div>

              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

                <div className="text-6xl mb-6">
                  📰
                </div>

                <h2 className="text-3xl font-black mb-4">
                  Make an Impact
                </h2>

                <p className="text-gray-400 leading-7">
                  Every story matters. Every idea can make a difference.
                  Join a team that is passionate about technology, news,
                  creativity, and building products people love.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">

                  <div className="bg-white/5 rounded-xl p-5">
                    <h3 className="text-2xl font-black text-red-500">
                      6+
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Open Roles
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-5">
                    <h3 className="text-2xl font-black text-red-500">
                      🌎
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Remote Friendly
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= WHY JOIN ================= */}
      <section
        id="why-join"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <div className="text-center max-w-3xl mx-auto mb-14">

          <span className="text-red-600 font-bold uppercase tracking-widest text-sm">
            Why Join NewsHub?
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">
            Grow With Us
          </h2>

          <p className="text-gray-500 text-lg mt-5 leading-8">
            We are building more than a news platform. We are building a
            team where people can learn, create, experiment, and grow.
          </p>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-200 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-14 h-14 flex items-center justify-center bg-red-50 rounded-xl text-3xl mb-6 group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
                {benefit.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>

              <p className="text-gray-500 leading-7">
                {benefit.description}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* ================= OPEN POSITIONS ================= */}
      <section
        id="open-positions"
        className="bg-gray-950 py-24"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <span className="text-red-500 font-bold uppercase tracking-widest text-sm">
              Careers
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
              Open Positions
            </h2>

            <p className="text-gray-400 text-lg mt-4">
              Find a role that matches your skills and passion.
            </p>

          </div>


          <div className="grid lg:grid-cols-2 gap-6">

            {jobs.map((job, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-red-500/60 hover:bg-white/[0.07] transition-all duration-300"
              >

                <div className="flex items-start justify-between gap-5">

                  <div className="flex gap-5">

                    <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-red-500/10 rounded-xl text-3xl">
                      {job.icon}
                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition">
                        {job.title}
                      </h3>

                      <p className="text-gray-500 mt-1">
                        {job.department}
                      </p>

                    </div>

                  </div>

                  <span className="hidden sm:block text-xs font-bold bg-red-500/10 text-red-400 px-3 py-2 rounded-full">
                    {job.type}
                  </span>

                </div>


                <div className="flex flex-wrap gap-3 mt-6">

                  <span className="text-sm text-gray-400 bg-white/5 px-3 py-2 rounded-lg">
                    📍 {job.location}
                  </span>

                  <span className="text-sm text-gray-400 bg-white/5 px-3 py-2 rounded-lg">
                    💼 {job.experience}
                  </span>

                </div>


                <button
                //   onClick={() =>
                //     window.location.href = `mailto:careers@newshub.com?subject=Application for ${job.title}`
                //   }
                  className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold transition-all duration-300"
                >
                  Apply for this Position →
                </button>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= HIRING PROCESS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-14">

          <span className="text-red-600 font-bold uppercase tracking-widest text-sm">
            How It Works
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">
            Our Hiring Process
          </h2>

        </div>


        <div className="grid md:grid-cols-4 gap-6">

          <div className="relative bg-white rounded-2xl p-7 shadow-sm border border-gray-100 text-center">

            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-red-600 text-white rounded-full text-xl font-black">
              01
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-5 mb-3">
              Apply
            </h3>

            <p className="text-gray-500 leading-7">
              Find a position that matches your skills and send us your
              application.
            </p>

          </div>


          <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 text-center">

            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-red-600 text-white rounded-full text-xl font-black">
              02
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-5 mb-3">
              Review
            </h3>

            <p className="text-gray-500 leading-7">
              Our team reviews your profile, experience, and application.
            </p>

          </div>


          <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 text-center">

            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-red-600 text-white rounded-full text-xl font-black">
              03
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-5 mb-3">
              Interview
            </h3>

            <p className="text-gray-500 leading-7">
              Selected candidates meet with our team for an interview.
            </p>

          </div>


          <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 text-center">

            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-red-600 text-white rounded-full text-xl font-black">
              04
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-5 mb-3">
              Welcome
            </h3>

            <p className="text-gray-500 leading-7">
              If selected, welcome to the NewsHub team!
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-10 md:p-16 text-center text-white">

          <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full"></div>

          <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-black/10 rounded-full"></div>

          <div className="relative">

            <div className="text-5xl mb-5">
              🚀
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-5">
              Don't See Your Role?
            </h2>

            <p className="max-w-2xl mx-auto text-red-100 text-lg leading-8 mb-8">
              We are always interested in meeting talented and passionate
              people. Send us your resume and tell us how you can contribute
              to NewsHub.
            </p>

            <button
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-xl font-black hover:scale-105 transition duration-300"
            >
              Send Your Resume →
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Career;