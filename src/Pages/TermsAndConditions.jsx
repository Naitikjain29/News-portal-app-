
// import React from "react";
// import { Link } from "react-router-dom";

// const TermsAndConditions = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">

//       {/* ================= HERO SECTION ================= */}
//       <section className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-800 text-white">

//         <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/10 rounded-full"></div>

//         <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-black/10 rounded-full"></div>

//         <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">

//           <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 border border-white/20 rounded-2xl text-3xl mb-5">
//             📜
//           </div>

//           <h1 className="text-5xl md:text-6xl font-black mb-5">
//             Terms & Conditions
//           </h1>

//           <p className="max-w-3xl mx-auto text-lg text-red-100 leading-8">
//             Please read these terms carefully before using the NewsHub
//             news portal.
//           </p>

//           <p className="mt-5 text-sm text-red-200">
//             Last Updated: August 2026
//           </p>

//         </div>
//       </section>


//       {/* ================= CONTENT ================= */}
//       <main className="max-w-6xl mx-auto px-6 py-16">

//         {/* Introduction */}
//         <section className="bg-white rounded-3xl shadow-md p-8 md:p-10 mb-8">

//           <div className="flex items-center gap-4 mb-5">

//             <div className="w-12 h-12 flex items-center justify-center bg-red-100 text-red-600 rounded-xl text-xl">
//               👋
//             </div>

//             <h2 className="text-3xl font-black text-gray-900">
//               1. Introduction
//             </h2>

//           </div>

//           <p className="text-gray-600 text-lg leading-8">
//             Welcome to NewsHub. By accessing or using this website, you
//             agree to be bound by these Terms & Conditions. If you do not
//             agree with any part of these terms, please discontinue use of
//             the website.
//           </p>

//         </section>


//         {/* Acceptance */}
//         <section className="bg-white rounded-3xl shadow-md p-8 md:p-10 mb-8">

//           <div className="flex items-center gap-4 mb-5">

//             <div className="w-12 h-12 flex items-center justify-center bg-red-100 text-red-600 rounded-xl text-xl">
//               ✅
//             </div>

//             <h2 className="text-3xl font-black text-gray-900">
//               2. Acceptance of Terms
//             </h2>

//           </div>

//           <p className="text-gray-600 text-lg leading-8">
//             By using NewsHub, you confirm that you have read, understood,
//             and agreed to these Terms & Conditions. These terms apply to
//             all visitors and users of the website.
//           </p>

//         </section>


//         {/* Use of Website */}
//         <section className="bg-white rounded-3xl shadow-md p-8 md:p-10 mb-8">

//           <div className="flex items-center gap-4 mb-5">

//             <div className="w-12 h-12 flex items-center justify-center bg-red-100 text-red-600 rounded-xl text-xl">
//               🌐
//             </div>

//             <h2 className="text-3xl font-black text-gray-900">
//               3. Use of the Website
//             </h2>

//           </div>

//           <p className="text-gray-600 text-lg leading-8 mb-5">
//             NewsHub is provided for informational and personal use. You
//             agree to use the website responsibly and in accordance with
//             applicable laws.
//           </p>

//           <ul className="space-y-4">

//             <li className="flex gap-3 text-gray-600">
//               <span className="text-red-600 font-bold">✓</span>
//               Use the website only for lawful purposes.
//             </li>

//             <li className="flex gap-3 text-gray-600">
//               <span className="text-red-600 font-bold">✓</span>
//               Do not attempt to interfere with the website's operation.
//             </li>

//             <li className="flex gap-3 text-gray-600">
//               <span className="text-red-600 font-bold">✓</span>
//               Do not use automated methods to abuse or overload the
//               website or its services.
//             </li>

//             <li className="flex gap-3 text-gray-600">
//               <span className="text-red-600 font-bold">✓</span>
//               Do not use NewsHub to distribute unlawful or harmful
//               material.
//             </li>

//           </ul>

//         </section>


//         {/* News Content */}
//         <section className="bg-white rounded-3xl shadow-md p-8 md:p-10 mb-8">

//           <div className="flex items-center gap-4 mb-5">

//             <div className="w-12 h-12 flex items-center justify-center bg-red-100 text-red-600 rounded-xl text-xl">
//               📰
//             </div>

//             <h2 className="text-3xl font-black text-gray-900">
//               4. News and Content
//             </h2>

//           </div>

//           <p className="text-gray-600 text-lg leading-8 mb-5">
//             NewsHub may display news articles, headlines, images, summaries,
//             and links obtained from third-party news sources or APIs.
//           </p>

//           <p className="text-gray-600 text-lg leading-8">
//             The information provided through NewsHub is intended for
//             general informational purposes. NewsHub does not guarantee that
//             all information is complete, accurate, current, or error-free.
//           </p>

//         </section>


//         {/* Third Party Sources */}
//         <section className="bg-white rounded-3xl shadow-md p-8 md:p-10 mb-8">

//           <div className="flex items-center gap-4 mb-5">

//             <div className="w-12 h-12 flex items-center justify-center bg-red-100 text-red-600 rounded-xl text-xl">
//               🔗
//             </div>

//             <h2 className="text-3xl font-black text-gray-900">
//               5. Third-Party Sources and Links
//             </h2>

//           </div>

//           <p className="text-gray-600 text-lg leading-8">
//             NewsHub may contain links to third-party websites and original
//             news sources. These websites are operated independently from
//             NewsHub. We are not responsible for the content, availability,
//             security, or privacy practices of third-party websites.
//           </p>

//         </section>


//         {/* Intellectual Property */}
//         <section className="bg-white rounded-3xl shadow-md p-8 md:p-10 mb-8">

//           <div className="flex items-center gap-4 mb-5">

//             <div className="w-12 h-12 flex items-center justify-center bg-red-100 text-red-600 rounded-xl text-xl">
//               ©️
//             </div>

//             <h2 className="text-3xl font-black text-gray-900">
//               6. Intellectual Property
//             </h2>

//           </div>

//           <p className="text-gray-600 text-lg leading-8 mb-5">
//             The NewsHub website design, branding, logos, interface,
//             original text, graphics, and software may be protected by
//             applicable intellectual property laws.
//           </p>

//           <p className="text-gray-600 text-lg leading-8">
//             Third-party content displayed through the platform remains the
//             property of its respective owners and may be subject to their
//             own copyright and licensing terms.
//           </p>

//         </section>


//         {/* User Responsibilities */}
//         <section className="bg-white rounded-3xl shadow-md p-8 md:p-10 mb-8">

//           <div className="flex items-center gap-4 mb-5">

//             <div className="w-12 h-12 flex items-center justify-center bg-red-100 text-red-600 rounded-xl text-xl">
//               👤
//             </div>

//             <h2 className="text-3xl font-black text-gray-900">
//               7. User Responsibilities
//             </h2>

//           </div>

//           <p className="text-gray-600 text-lg leading-8 mb-5">
//             Users are responsible for their activity while using NewsHub.
//             You agree not to:
//           </p>

//           <div className="grid md:grid-cols-2 gap-4">

//             <div className="bg-gray-50 rounded-xl p-5">
//               <p className="text-gray-600">
//                 ❌ Attempt to gain unauthorized access to the website.
//               </p>
//             </div>

//             <div className="bg-gray-50 rounded-xl p-5">
//               <p className="text-gray-600">
//                 ❌ Upload or distribute malicious software.
//               </p>
//             </div>

//             <div className="bg-gray-50 rounded-xl p-5">
//               <p className="text-gray-600">
//                 ❌ Abuse or disrupt website functionality.
//               </p>
//             </div>

//             <div className="bg-gray-50 rounded-xl p-5">
//               <p className="text-gray-600">
//                 ❌ Violate applicable laws or regulations.
//               </p>
//             </div>

//           </div>

//         </section>


//         {/* Disclaimer */}
//         <section className="bg-white rounded-3xl shadow-md p-8 md:p-10 mb-8">

//           <div className="flex items-center gap-4 mb-5">

//             <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-xl text-xl">
//               ⚠️
//             </div>

//             <h2 className="text-3xl font-black text-gray-900">
//               8. Disclaimer
//             </h2>

//           </div>

//           <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">

//             <p className="text-gray-700 leading-8">
//               NewsHub provides news and information on an "as available"
//               basis. We do not guarantee that the website will always be
//               available or that the information displayed will always be
//               accurate, complete, or up to date.
//             </p>

//           </div>

//         </section>


//         {/* Limitation of Liability */}
//         <section className="bg-white rounded-3xl shadow-md p-8 md:p-10 mb-8">

//           <div className="flex items-center gap-4 mb-5">

//             <div className="w-12 h-12 flex items-center justify-center bg-red-100 text-red-600 rounded-xl text-xl">
//               🛡️
//             </div>

//             <h2 className="text-3xl font-black text-gray-900">
//               9. Limitation of Liability
//             </h2>

//           </div>

//           <p className="text-gray-600 text-lg leading-8">
//             To the extent permitted by applicable law, NewsHub and its
//             developers will not be responsible for losses or damages
//             arising from your use of the website, reliance on information
//             displayed on the platform, or use of third-party websites.
//           </p>

//         </section>


//         {/* Availability */}
//         <section className="bg-white rounded-3xl shadow-md p-8 md:p-10 mb-8">

//           <div className="flex items-center gap-4 mb-5">

//             <div className="w-12 h-12 flex items-center justify-center bg-red-100 text-red-600 rounded-xl text-xl">
//               ⚡
//             </div>

//             <h2 className="text-3xl font-black text-gray-900">
//               10. Website Availability
//             </h2>

//           </div>

//           <p className="text-gray-600 text-lg leading-8">
//             We may modify, suspend, or discontinue any part of NewsHub at
//             any time. We may also perform maintenance or updates that
//             temporarily affect website availability.
//           </p>

//         </section>


//         {/* Changes */}
//         <section className="bg-white rounded-3xl shadow-md p-8 md:p-10 mb-8">

//           <div className="flex items-center gap-4 mb-5">

//             <div className="w-12 h-12 flex items-center justify-center bg-red-100 text-red-600 rounded-xl text-xl">
//               🔄
//             </div>

//             <h2 className="text-3xl font-black text-gray-900">
//               11. Changes to These Terms
//             </h2>

//           </div>

//           <p className="text-gray-600 text-lg leading-8">
//             NewsHub may update these Terms & Conditions from time to time.
//             Any changes will be posted on this page. Your continued use of
//             the website after changes are posted means that you accept the
//             updated terms.
//           </p>

//         </section>


//         {/* Contact */}
//         <section className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-8 md:p-12 text-white text-center">

//           <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full"></div>

//           <div className="relative">

//             <div className="text-5xl mb-5">
//               📩
//             </div>

//             <h2 className="text-3xl md:text-4xl font-black mb-4">
//               Questions About These Terms?
//             </h2>

//             <p className="max-w-2xl mx-auto text-red-100 text-lg leading-8 mb-7">
//               If you have any questions about these Terms & Conditions,
//               please contact the NewsHub team.
//             </p>

//             <Link 
//               to="/contact#contact-form"
//               className="inline-block bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:scale-105 transition duration-300"
//             >
//               Contact Us →
//             </Link>

//           </div>

//         </section>

//       </main>

//     </div>
//   );
// };

// export default TermsAndConditions;


import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  const sections = [
    { id: "introduction", number: "01", title: "Introduction" },
    { id: "acceptance", number: "02", title: "Acceptance of Terms" },
    { id: "website-use", number: "03", title: "Use of the Website" },
    { id: "news-content", number: "04", title: "News and Content" },
    { id: "third-party", number: "05", title: "Third-Party Sources" },
    { id: "intellectual", number: "06", title: "Intellectual Property" },
    { id: "responsibilities", number: "07", title: "User Responsibilities" },
    { id: "disclaimer", number: "08", title: "Disclaimer" },
    { id: "liability", number: "09", title: "Limitation of Liability" },
    { id: "availability", number: "10", title: "Website Availability" },
    { id: "changes", number: "11", title: "Changes to These Terms" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-gray-950 text-white">

        {/* Background Gradient */}
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
                📜
              </span>

              <span className="text-sm font-bold tracking-widest text-red-200">
                TERMS & CONDITIONS
              </span>

            </div>


            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-black leading-tight">

              Clear Rules.

              <span className="block text-red-500">
                Better Experience.
              </span>

            </h1>


            {/* Description */}
            <p className="max-w-3xl text-gray-300 text-lg md:text-xl leading-8 mt-7">

              Please read these Terms & Conditions carefully before
              using NewsHub. They explain the rules and responsibilities
              that apply when using our news portal.

            </p>


            {/* Info */}
            <div className="flex flex-wrap gap-4 mt-9">

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
                  ⚖️
                </span>

                <div>
                  <p className="text-xs text-gray-400">
                    IMPORTANT
                  </p>

                  <p className="text-sm font-bold text-white">
                    Please Read Carefully
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
              SIDEBAR NAVIGATION
          ================================================== */}
          <aside className="lg:col-span-1">

            <div className="lg:sticky lg:top-24">

              <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6">

                {/* Sidebar Header */}
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


                {/* Links */}
                <div className="space-y-1">

                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-red-50 transition duration-300"
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


                {/* Contact Box */}
                <div className="border-t border-gray-100 mt-6 pt-6">

                  <p className="text-sm text-gray-500 leading-6 mb-4">
                    Have questions about these terms?
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
                01 INTRODUCTION
            ================================================== */}
            <section
              id="introduction"
              className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >

              <div className="h-1.5 bg-gradient-to-r from-red-600 to-red-400"></div>

              <div className="p-8 md:p-10">

                <SectionHeader
                  number="01"
                  icon="👋"
                  title="Introduction"
                />

                <p className="text-gray-600 text-lg leading-8 mt-6">

                  Welcome to NewsHub. By accessing or using this website,
                  you agree to be bound by these Terms & Conditions. If
                  you do not agree with any part of these terms, please
                  discontinue use of the website.

                </p>

              </div>

            </section>


            {/* =================================================
                02 ACCEPTANCE
            ================================================== */}
            <section
              id="acceptance"
              className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >

              <div className="h-1.5 bg-gradient-to-r from-red-600 to-red-400"></div>

              <div className="p-8 md:p-10">

                <SectionHeader
                  number="02"
                  icon="✅"
                  title="Acceptance of Terms"
                />

                <p className="text-gray-600 text-lg leading-8 mt-6">

                  By using NewsHub, you confirm that you have read,
                  understood, and agreed to these Terms & Conditions.
                  These terms apply to all visitors and users of the
                  website.

                </p>

              </div>

            </section>


            {/* =================================================
                03 WEBSITE USE
            ================================================== */}
            <section
              id="website-use"
              className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >

              <div className="h-1.5 bg-gradient-to-r from-red-600 to-red-400"></div>

              <div className="p-8 md:p-10">

                <SectionHeader
                  number="03"
                  icon="🌐"
                  title="Use of the Website"
                />

                <p className="text-gray-600 text-lg leading-8 mt-6 mb-7">

                  NewsHub is provided for informational and personal use.
                  You agree to use the website responsibly and in
                  accordance with applicable laws.

                </p>


                <div className="space-y-4">

                  <TermsPoint>
                    Use the website only for lawful purposes.
                  </TermsPoint>

                  <TermsPoint>
                    Do not attempt to interfere with the website's
                    operation.
                  </TermsPoint>

                  <TermsPoint>
                    Do not use automated methods to abuse or overload
                    the website or its services.
                  </TermsPoint>

                  <TermsPoint>
                    Do not use NewsHub to distribute unlawful or harmful
                    material.
                  </TermsPoint>

                </div>

              </div>

            </section>


            {/* =================================================
                04 NEWS CONTENT
            ================================================== */}
            <section
              id="news-content"
              className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >

              <div className="h-1.5 bg-gradient-to-r from-red-600 to-red-400"></div>

              <div className="p-8 md:p-10">

                <SectionHeader
                  number="04"
                  icon="📰"
                  title="News and Content"
                />

                <div className="mt-6 space-y-5">

                  <p className="text-gray-600 text-lg leading-8">

                    NewsHub may display news articles, headlines, images,
                    summaries, and links obtained from third-party news
                    sources or APIs.

                  </p>

                  <div className="bg-red-50 border border-red-100 rounded-2xl p-6">

                    <p className="text-gray-600 text-lg leading-8">

                      The information provided through NewsHub is intended
                      for general informational purposes. NewsHub does not
                      guarantee that all information is complete, accurate,
                      current, or error-free.

                    </p>

                  </div>

                </div>

              </div>

            </section>


            {/* =================================================
                05 THIRD PARTY
            ================================================== */}
            <section
              id="third-party"
              className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >

              <div className="h-1.5 bg-gradient-to-r from-red-600 to-red-400"></div>

              <div className="p-8 md:p-10">

                <SectionHeader
                  number="05"
                  icon="🔗"
                  title="Third-Party Sources and Links"
                />

                <p className="text-gray-600 text-lg leading-8 mt-6">

                  NewsHub may contain links to third-party websites and
                  original news sources. These websites are operated
                  independently from NewsHub. We are not responsible for
                  the content, availability, security, or privacy practices
                  of third-party websites.

                </p>

              </div>

            </section>


            {/* =================================================
                06 INTELLECTUAL PROPERTY
            ================================================== */}
            <section
              id="intellectual"
              className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >

              <div className="h-1.5 bg-gradient-to-r from-red-600 to-red-400"></div>

              <div className="p-8 md:p-10">

                <SectionHeader
                  number="06"
                  icon="©️"
                  title="Intellectual Property"
                />

                <div className="mt-6 space-y-5">

                  <p className="text-gray-600 text-lg leading-8">

                    The NewsHub website design, branding, logos, interface,
                    original text, graphics, and software may be protected
                    by applicable intellectual property laws.

                  </p>

                  <p className="text-gray-600 text-lg leading-8">

                    Third-party content displayed through the platform
                    remains the property of its respective owners and may
                    be subject to their own copyright and licensing terms.

                  </p>

                </div>

              </div>

            </section>


            {/* =================================================
                07 USER RESPONSIBILITIES
            ================================================== */}
            <section
              id="responsibilities"
              className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >

              <div className="h-1.5 bg-gradient-to-r from-red-600 to-red-400"></div>

              <div className="p-8 md:p-10">

                <SectionHeader
                  number="07"
                  icon="👤"
                  title="User Responsibilities"
                />

                <p className="text-gray-600 text-lg leading-8 mt-6 mb-7">

                  Users are responsible for their activity while using
                  NewsHub. You agree not to:

                </p>


                <div className="grid md:grid-cols-2 gap-4">

                  <ResponsibilityCard>
                    Attempt to gain unauthorized access to the website.
                  </ResponsibilityCard>

                  <ResponsibilityCard>
                    Upload or distribute malicious software.
                  </ResponsibilityCard>

                  <ResponsibilityCard>
                    Abuse or disrupt website functionality.
                  </ResponsibilityCard>

                  <ResponsibilityCard>
                    Violate applicable laws or regulations.
                  </ResponsibilityCard>

                </div>

              </div>

            </section>


            {/* =================================================
                08 DISCLAIMER
            ================================================== */}
            <section
              id="disclaimer"
              className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >

              <div className="h-1.5 bg-gradient-to-r from-yellow-500 to-orange-500"></div>

              <div className="p-8 md:p-10">

                <SectionHeader
                  number="08"
                  icon="⚠️"
                  title="Disclaimer"
                  warning
                />

                <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-2xl p-6 md:p-7">

                  <div className="flex gap-4">

                    <div className="hidden sm:flex w-12 h-12 flex-shrink-0 bg-yellow-100 rounded-xl items-center justify-center text-2xl">
                      ⚠️
                    </div>

                    <p className="text-gray-700 text-lg leading-8">

                      NewsHub provides news and information on an
                      "as available" basis. We do not guarantee that the
                      website will always be available or that the
                      information displayed will always be accurate,
                      complete, or up to date.

                    </p>

                  </div>

                </div>

              </div>

            </section>


            {/* =================================================
                09 LIABILITY
            ================================================== */}
            <section
              id="liability"
              className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >

              <div className="h-1.5 bg-gradient-to-r from-red-600 to-red-400"></div>

              <div className="p-8 md:p-10">

                <SectionHeader
                  number="09"
                  icon="🛡️"
                  title="Limitation of Liability"
                />

                <div className="mt-6 bg-gray-950 rounded-2xl p-6 md:p-7">

                  <div className="flex gap-4">

                    <div className="hidden sm:flex w-12 h-12 flex-shrink-0 bg-red-600 rounded-xl items-center justify-center text-2xl">
                      🛡️
                    </div>

                    <p className="text-gray-300 text-lg leading-8">

                      To the extent permitted by applicable law, NewsHub
                      and its developers will not be responsible for
                      losses or damages arising from your use of the
                      website, reliance on information displayed on the
                      platform, or use of third-party websites.

                    </p>

                  </div>

                </div>

              </div>

            </section>


            {/* =================================================
                10 AVAILABILITY
            ================================================== */}
            <section
              id="availability"
              className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >

              <div className="h-1.5 bg-gradient-to-r from-red-600 to-red-400"></div>

              <div className="p-8 md:p-10">

                <SectionHeader
                  number="10"
                  icon="⚡"
                  title="Website Availability"
                />

                <p className="text-gray-600 text-lg leading-8 mt-6">

                  We may modify, suspend, or discontinue any part of
                  NewsHub at any time. We may also perform maintenance
                  or updates that temporarily affect website availability.

                </p>

              </div>

            </section>


            {/* =================================================
                11 CHANGES
            ================================================== */}
            <section
              id="changes"
              className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >

              <div className="h-1.5 bg-gradient-to-r from-red-600 to-red-400"></div>

              <div className="p-8 md:p-10">

                <SectionHeader
                  number="11"
                  icon="🔄"
                  title="Changes to These Terms"
                />

                <p className="text-gray-600 text-lg leading-8 mt-6">

                  NewsHub may update these Terms & Conditions from time
                  to time. Any changes will be posted on this page.
                  Your continued use of the website after changes are
                  posted means that you accept the updated terms.

                </p>

              </div>

            </section>


            {/* =================================================
                CONTACT CTA
            ================================================== */}
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 via-red-700 to-red-900 text-white p-8 md:p-12 shadow-2xl">

              {/* Decorative circles */}
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
                  Questions About These Terms?
                </h2>


                <p className="max-w-2xl mx-auto text-red-100 text-lg leading-8 mb-8">

                  If you have any questions about these Terms & Conditions,
                  please contact the NewsHub team.

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
          TRUST / INFO SECTION
      ====================================================== */}
      <section className="bg-white border-t border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="text-center mb-10">

            <span className="text-red-600 text-sm font-bold uppercase tracking-widest">
              NewsHub
            </span>

            <h2 className="text-3xl md:text-4xl font-black text-gray-950 mt-2">
              Built Around Trust
            </h2>

            <p className="text-gray-500 mt-3">
              We want every NewsHub visit to be simple, transparent and reliable.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-6">

            <TrustCard
              icon="📖"
              title="Clear Terms"
              text="Our terms explain the basic rules for using the NewsHub platform."
            />

            <TrustCard
              icon="📰"
              title="News First"
              text="NewsHub is designed to provide convenient access to news and information."
            />

            <TrustCard
              icon="🤝"
              title="Responsible Use"
              text="We encourage users to use the platform responsibly and lawfully."
            />

          </div>

        </div>

      </section>

    </div>
  );
};


/* =========================================================
   SECTION HEADER
========================================================= */

const SectionHeader = ({
  number,
  icon,
  title,
  warning = false,
}) => {
  return (
    <div className="flex items-center gap-4">

      <div className="relative">

        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${
            warning
              ? "bg-yellow-100"
              : "bg-red-50"
          }`}
        >
          {icon}
        </div>


        <span
          className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-white text-[10px] font-black flex items-center justify-center ${
            warning
              ? "bg-yellow-500"
              : "bg-red-600"
          }`}
        >
          {number}
        </span>

      </div>


      <div>

        <p
          className={`text-xs uppercase tracking-widest font-bold ${
            warning
              ? "text-yellow-600"
              : "text-red-600"
          }`}
        >
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
   TERMS POINT
========================================================= */

const TermsPoint = ({ children }) => {
  return (
    <div className="flex gap-4 items-start bg-slate-50 rounded-2xl p-4 border border-gray-100 hover:bg-red-50 hover:border-red-100 transition duration-300">

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
   RESPONSIBILITY CARD
========================================================= */

const ResponsibilityCard = ({ children }) => {
  return (
    <div className="group bg-slate-50 border border-gray-100 rounded-2xl p-5 hover:bg-gray-950 hover:border-gray-950 transition-all duration-300">

      <div className="flex items-start gap-3">

        <span className="w-8 h-8 flex-shrink-0 rounded-lg bg-red-100 group-hover:bg-red-600 flex items-center justify-center transition">
          ❌
        </span>

        <p className="text-gray-600 group-hover:text-gray-300 leading-7 transition">
          {children}
        </p>

      </div>

    </div>
  );
};


/* =========================================================
   TRUST CARD
========================================================= */

const TrustCard = ({ icon, title, text }) => {
  return (
    <div className="group flex gap-4 p-6 rounded-2xl bg-slate-50 border border-gray-100 hover:border-red-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

      <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-red-100 group-hover:bg-red-600 flex items-center justify-center text-2xl transition">
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


export default TermsAndConditions;