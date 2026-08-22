import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const sections = [
    { id: "introduction", number: "01", title: "Introduction" },
    { id: "information", number: "02", title: "Information We Collect" },
    { id: "usage", number: "03", title: "How We Use Information" },
    { id: "third-party", number: "04", title: "Third-Party Services" },
    { id: "cookies", number: "05", title: "Cookies" },
    { id: "security", number: "06", title: "Data Security" },
    { id: "external", number: "07", title: "External Links" },
    { id: "children", number: "08", title: "Children's Privacy" },
    { id: "updates", number: "09", title: "Policy Updates" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-gray-950 text-white">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-700/40 via-gray-950 to-gray-950"></div>

        {/* Decorative Circles */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"></div>

        <div className="absolute top-10 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>

        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-red-700/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">

          <div className="max-w-4xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-7">

              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-red-600">
                🔒
              </span>

              <span className="text-sm font-bold tracking-widest text-red-200">
                PRIVACY & SECURITY
              </span>

            </div>


            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-black leading-tight">

              Your Privacy.

              <span className="block text-red-500">
                Our Responsibility.
              </span>

            </h1>


            {/* Description */}
            <p className="max-w-3xl text-gray-300 text-lg md:text-xl leading-8 mt-7">

              At NewsHub, we believe your trust is just as important as
              the news we deliver. Learn how we handle information when
              you use our news portal.

            </p>


            {/* Last Updated */}
            <div className="flex flex-wrap items-center gap-4 mt-9">

              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 border border-white/10">

                <span className="text-red-400">
                  🕒
                </span>

                <div>
                  <p className="text-xs text-gray-400">
                    LAST UPDATED
                  </p>

                  <p className="text-sm font-bold text-white">
                    August 2026
                  </p>
                </div>

              </div>


              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 border border-white/10">

                <span className="text-red-400">
                  🛡️
                </span>

                <div>
                  <p className="text-xs text-gray-400">
                    YOUR TRUST
                  </p>

                  <p className="text-sm font-bold text-white">
                    Matters to Us
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <main className="max-w-7xl mx-auto px-6 py-14 md:py-20">

        <div className="grid lg:grid-cols-4 gap-10">


          {/* =================================================
              SIDEBAR
          ================================================== */}
          <aside className="lg:col-span-1">

            <div className="lg:sticky lg:top-24">

              <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6">

                <div className="flex items-center gap-3 mb-6">

                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600">
                    📑
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-red-600 font-bold">
                      Navigation
                    </p>

                    <h3 className="font-black text-gray-900">
                      On This Page
                    </h3>
                  </div>

                </div>


                <div className="space-y-2">

                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="group flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-red-50 transition duration-300"
                    >

                      <span className="text-xs font-black text-gray-400 group-hover:text-red-600 transition">
                        {section.number}
                      </span>

                      <span className="text-sm font-semibold text-gray-600 group-hover:text-red-600 transition">
                        {section.title}
                      </span>

                    </a>
                  ))}

                </div>


                {/* Sidebar Contact */}
                <div className="border-t border-gray-100 mt-6 pt-6">

                  <p className="text-sm text-gray-500 leading-6 mb-4">
                    Have questions about our Privacy Policy?
                  </p>

                  <Link
                    to="/contact#contact-form"
                    className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold transition duration-300"
                  >
                    Contact Us
                    <span>→</span>
                  </Link>

                </div>

              </div>

            </div>

          </aside>


          {/* =================================================
              CONTENT
          ================================================== */}
          <div className="lg:col-span-3 space-y-7">


            {/* =================================================
                INTRODUCTION
            ================================================== */}
            <section
              id="introduction"
              className="group bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >

              <div className="h-1.5 bg-gradient-to-r from-red-600 to-red-400"></div>

              <div className="p-8 md:p-10">

                <SectionHeader
                  number="01"
                  icon="👋"
                  title="Introduction"
                />

                <p className="text-gray-600 text-lg leading-8 mt-6">

                  Welcome to NewsHub. We respect your privacy and are
                  committed to protecting your personal information.
                  This Privacy Policy describes what information may be
                  collected when you use our website and how that
                  information may be used.

                </p>

              </div>

            </section>


            {/* =================================================
                INFORMATION WE COLLECT
            ================================================== */}
            <section
              id="information"
              className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >

              <div className="h-1.5 bg-gradient-to-r from-red-600 to-red-400"></div>

              <div className="p-8 md:p-10">

                <SectionHeader
                  number="02"
                  icon="📋"
                  title="Information We Collect"
                />

                <p className="text-gray-600 leading-8 mt-6 mb-7">

                  Depending on how you interact with NewsHub, we may
                  collect limited information such as:

                </p>


                <div className="grid md:grid-cols-2 gap-5">

                  {/* Personal */}
                  <InfoCard
                    icon="👤"
                    title="Personal Information"
                    text="If you voluntarily contact us, you may provide information such as your name and email address."
                  />


                  {/* Technical */}
                  <InfoCard
                    icon="💻"
                    title="Technical Information"
                    text="Basic technical information such as browser type, device type, and general usage information may be collected by services used by the website."
                  />

                </div>

              </div>

            </section>


            {/* =================================================
                HOW WE USE INFORMATION
            ================================================== */}
            <section
              id="usage"
              className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >

              <div className="h-1.5 bg-gradient-to-r from-red-600 to-red-400"></div>

              <div className="p-8 md:p-10">

                <SectionHeader
                  number="03"
                  icon="⚙️"
                  title="How We Use Information"
                />

                <p className="text-gray-600 leading-8 mt-6 mb-7">

                  Information may be used to improve the functionality,
                  performance, and user experience of NewsHub.

                </p>


                <div className="space-y-4">

                  <PrivacyPoint>
                    To respond to questions and messages sent through our
                    contact form.
                  </PrivacyPoint>

                  <PrivacyPoint>
                    To improve website performance and user experience.
                  </PrivacyPoint>

                  <PrivacyPoint>
                    To identify and resolve technical problems.
                  </PrivacyPoint>

                  <PrivacyPoint>
                    To maintain the security and reliability of the website.
                  </PrivacyPoint>

                </div>

              </div>

            </section>


            {/* =================================================
                THIRD PARTY
            ================================================== */}
            <section
              id="third-party"
              className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >

              <div className="h-1.5 bg-gradient-to-r from-red-600 to-red-400"></div>

              <div className="p-8 md:p-10">

                <SectionHeader
                  number="04"
                  icon="🌐"
                  title="Third-Party Services"
                />

                <div className="mt-6 bg-red-50 border border-red-100 rounded-2xl p-6">

                  <p className="text-gray-600 text-lg leading-8">

                    NewsHub may use third-party services, including
                    external news APIs, to retrieve and display news
                    articles. These services may have their own privacy
                    policies and terms of use. We recommend reviewing
                    the privacy policies of those services when
                    appropriate.

                  </p>

                </div>

              </div>

            </section>


            {/* =================================================
                COOKIES
            ================================================== */}
            <section
              id="cookies"
              className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >

              <div className="h-1.5 bg-gradient-to-r from-red-600 to-red-400"></div>

              <div className="p-8 md:p-10">

                <SectionHeader
                  number="05"
                  icon="🍪"
                  title="Cookies"
                />

                <p className="text-gray-600 text-lg leading-8 mt-6">

                  NewsHub may use cookies or similar technologies if
                  required by the website or third-party services.
                  Cookies can help improve website functionality and
                  understand how visitors interact with the website.

                </p>

              </div>

            </section>


            {/* =================================================
                DATA SECURITY
            ================================================== */}
            <section
              id="security"
              className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >

              <div className="h-1.5 bg-gradient-to-r from-red-600 to-red-400"></div>

              <div className="p-8 md:p-10">

                <SectionHeader
                  number="06"
                  icon="🛡️"
                  title="Data Security"
                />

                <div className="mt-6 flex gap-5 bg-gray-950 rounded-2xl p-6 md:p-7">

                  <div className="hidden sm:flex w-12 h-12 flex-shrink-0 rounded-xl bg-red-600 items-center justify-center text-2xl">
                    🔐
                  </div>

                  <p className="text-gray-300 leading-8">

                    We take reasonable measures to protect information
                    handled by NewsHub. However, no internet-based
                    service can guarantee complete security, and users
                    should understand that online communication always
                    involves some level of risk.

                  </p>

                </div>

              </div>

            </section>


            {/* =================================================
                EXTERNAL LINKS
            ================================================== */}
            <section
              id="external"
              className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >

              <div className="h-1.5 bg-gradient-to-r from-red-600 to-red-400"></div>

              <div className="p-8 md:p-10">

                <SectionHeader
                  number="07"
                  icon="🔗"
                  title="External Links"
                />

                <p className="text-gray-600 text-lg leading-8 mt-6">

                  NewsHub may contain links to external websites or
                  original news sources. We are not responsible for
                  the privacy practices or content of third-party
                  websites. Users should review the privacy policies
                  of external websites before providing personal
                  information.

                </p>

              </div>

            </section>


            {/* =================================================
                CHILDREN
            ================================================== */}
            <section
              id="children"
              className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >

              <div className="h-1.5 bg-gradient-to-r from-red-600 to-red-400"></div>

              <div className="p-8 md:p-10">

                <SectionHeader
                  number="08"
                  icon="👨‍👩‍👧"
                  title="Children's Privacy"
                />

                <p className="text-gray-600 text-lg leading-8 mt-6">

                  NewsHub does not intentionally request unnecessary
                  personal information from children. If you believe
                  that a child has provided personal information
                  through our website, please contact us so that
                  appropriate action can be taken.

                </p>

              </div>

            </section>


            {/* =================================================
                POLICY UPDATES
            ================================================== */}
            <section
              id="updates"
              className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >

              <div className="h-1.5 bg-gradient-to-r from-red-600 to-red-400"></div>

              <div className="p-8 md:p-10">

                <SectionHeader
                  number="09"
                  icon="🔄"
                  title="Changes to This Policy"
                />

                <p className="text-gray-600 text-lg leading-8 mt-6">

                  We may update this Privacy Policy from time to time
                  to reflect changes in our services or applicable
                  requirements. Any updated version will be posted
                  on this page with a revised update date.

                </p>

              </div>

            </section>


            {/* =================================================
                CONTACT CTA
            ================================================== */}
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 via-red-700 to-red-900 text-white p-8 md:p-12 shadow-2xl">

              {/* Decorative */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full"></div>

              <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-black/10 rounded-full"></div>


              <div className="relative text-center">

                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-md text-4xl mb-7">
                  📩
                </div>


                <p className="text-red-200 uppercase tracking-widest text-sm font-bold mb-3">
                  Need Help?
                </p>


                <h2 className="text-3xl md:text-5xl font-black mb-5">
                  Have Privacy Questions?
                </h2>


                <p className="max-w-2xl mx-auto text-red-100 text-lg leading-8 mb-8">

                  If you have any questions or concerns regarding this
                  Privacy Policy, please contact the NewsHub team.

                </p>


                <Link
                  to="/contact#contact-form"
                  className="inline-flex items-center gap-3 bg-white text-red-600 px-9 py-4 rounded-2xl font-black hover:bg-gray-100 hover:-translate-y-1 shadow-xl transition-all duration-300"
                >
                  Contact Us
                  <span className="text-xl">
                    →
                  </span>
                </Link>

              </div>

            </section>

          </div>

        </div>

      </main>


      {/* =====================================================
          TRUST SECTION
      ====================================================== */}
      <section className="bg-white border-t border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid md:grid-cols-3 gap-6">

            <TrustCard
              icon="🔒"
              title="Privacy First"
              text="We respect your privacy while providing a better news experience."
            />

            <TrustCard
              icon="🛡️"
              title="Security Matters"
              text="We take reasonable steps to protect information handled by NewsHub."
            />

            <TrustCard
              icon="🤝"
              title="Built on Trust"
              text="Transparency and trust are important parts of our relationship with readers."
            />

          </div>

        </div>

      </section>

    </div>
  );
};


/* =========================================================
   SECTION HEADER COMPONENT
========================================================= */

const SectionHeader = ({ number, icon, title }) => {
  return (
    <div className="flex items-center gap-4">

      <div className="relative">

        <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-2xl">
          {icon}
        </div>

        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-600 text-white text-[10px] font-black flex items-center justify-center">
          {number}
        </span>

      </div>


      <div>

        <p className="text-xs uppercase tracking-widest text-red-600 font-bold">
          Section {number}
        </p>

        <h2 className="text-2xl md:text-3xl font-black text-gray-950">
          {title}
        </h2>

      </div>

    </div>
  );
};


/* =========================================================
   INFORMATION CARD
========================================================= */

const InfoCard = ({ icon, title, text }) => {
  return (
    <div className="group bg-slate-50 border border-gray-100 rounded-2xl p-6 hover:bg-gray-950 hover:border-gray-950 transition-all duration-300">

      <div className="w-12 h-12 rounded-xl bg-red-100 group-hover:bg-red-600 flex items-center justify-center text-2xl mb-5 transition">
        {icon}
      </div>

      <h3 className="text-xl font-black text-gray-900 group-hover:text-white transition">
        {title}
      </h3>

      <p className="text-gray-600 group-hover:text-gray-400 leading-7 mt-3 transition">
        {text}
      </p>

    </div>
  );
};


/* =========================================================
   PRIVACY POINT
========================================================= */

const PrivacyPoint = ({ children }) => {
  return (
    <div className="flex gap-4 items-start bg-slate-50 rounded-2xl p-4 border border-gray-100">

      <div className="w-7 h-7 flex-shrink-0 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">
        ✓
      </div>

      <p className="text-gray-600 leading-7">
        {children}
      </p>

    </div>
  );
};


/* =========================================================
   TRUST CARD
========================================================= */

const TrustCard = ({ icon, title, text }) => {
  return (
    <div className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-gray-100 hover:border-red-200 hover:shadow-lg transition duration-300">

      <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-red-100 flex items-center justify-center text-2xl">
        {icon}
      </div>

      <div>

        <h3 className="font-black text-gray-900">
          {title}
        </h3>

        <p className="text-gray-500 text-sm leading-6 mt-1">
          {text}
        </p>

      </div>

    </div>
  );
};


export default PrivacyPolicy;