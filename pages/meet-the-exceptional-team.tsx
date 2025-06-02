import { NextPage } from 'next';
import Head from 'next/head';

interface TeamMember {
  name: string;
  position: string;
  description: string;
  linkedIn?: string;
}

const leadershipTeam: TeamMember[] = [
  {
    name: "Atanu Sarkar",
    position: "Founder & CEO",
    description: "Experienced Chief Executive Officer with a demonstrated history of working in the information technology and services industry. Skilled in sales, data analysis, business development, entrepreneurship, and business strategy.",
    linkedIn: "#"
  },
  {
    name: "Arpita Sarkar",
    position: "Director Talent Acquisition",
    description: "Leading Webskitters Academy at the forefront while consecutively managing the Talent Acquisition Department, she has empowered several young minds with her unparalleled entrepreneurship skills.",
    linkedIn: "#"
  },
  {
    name: "Ayan Sarkar",
    position: "CTO",
    description: "Strategic Chief Technology Officer, driving innovation in web applications and technology solutions. Skilled to lead and create, he boasts a vision to revolutionize web application development.",
    linkedIn: "#"
  }
];

const advisoryTeam: TeamMember[] = [
  {
    name: "Abhisek Sen",
    position: "VP – Administration",
    description: "Organized and experienced VP of Administration who oversees all administrative functions, managing office operations and facilities.",
    linkedIn: "#"
  },
  {
    name: "Suman Bhattacharjee",
    position: "VP – Human Resources (HR)",
    description: "Strategic and experienced VP of Human Resources who leads and oversees all core HR functions, fostering a positive and inclusive work environment.",
    linkedIn: "#"
  },
  {
    name: "Saikat Roy Choudhury",
    position: "VP – Sales & Marketing",
    description: "Scope-oriented Sales & Marketing VP, skilled in aligning business functionalities with a revenue-driven plan.",
    linkedIn: "#"
  }
];

const TeamPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Meet Our Exceptional Team | Sakam</title>
        <meta name="description" content="Meet the exceptional team behind Sakam's success" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet the<br/>Exceptional Team</h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Our team is powered by like-minded individuals who are skilled and prepared to bring about 
              the perfect change in the digital sphere. A growth mindset and a core mastery of advanced 
              technology drive our team of exceptional designers, developers, and marketers.
            </p>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">The Faces of Commitment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.map((member) => (
                <div key={member.name} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                  <p className="text-blue-600 text-center mb-4">{member.position}</p>
                  <p className="text-gray-600 text-center mb-4">{member.description}</p>
                  {member.linkedIn && (
                    <div className="text-center">
                      <a href={member.linkedIn} className="text-blue-600 hover:text-blue-800">
                        <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advisory Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">The Advisory Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advisoryTeam.map((member) => (
                <div key={member.name} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                  <p className="text-blue-600 text-center mb-4">{member.position}</p>
                  <p className="text-gray-600 text-center mb-4">{member.description}</p>
                  {member.linkedIn && (
                    <div className="text-center">
                      <a href={member.linkedIn} className="text-blue-600 hover:text-blue-800">
                        <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-sm">Years in Industry</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">700+</div>
                <div className="text-sm">IT Professionals</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98.5%</div>
                <div className="text-sm">Retention Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">8000+</div>
                <div className="text-sm">Projects Executed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1500+</div>
                <div className="text-sm">Clients Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Top 1%</div>
                <div className="text-sm">Expert Developers</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default TeamPage; 