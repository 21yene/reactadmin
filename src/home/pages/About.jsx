import React from 'react';
import { Link } from 'react-router-dom';


const teamMembers = [
  { name: 'Luke Jacobs', imgSrc: 'assets/images/team1.jpg' },
  { name: 'Claire Olson', imgSrc: 'assets/images/team2.jpg' },
  { name: 'Phillip Hunt', imgSrc: 'assets/images/team3.jpg' },
  { name: 'Sara Grant', imgSrc: 'assets/images/team4.jpg' },
  { name: 'Sara Grant', imgSrc: 'assets/images/team5.jpg' },
  { name: 'Sara Grant', imgSrc: 'assets/images/team6.jpg' },
  { name: 'Sara Grant', imgSrc: 'assets/images/team7.jpg' },
  { name: 'Sara Grant', imgSrc: 'assets/images/team8.jpg' },
  { name: 'Sara Grant', imgSrc: 'assets/images/team9.jpg' }
];

const testimonials = [
  {
    quote:
      'Lorem ipsum dolor sit amet int consectetur adipisicing elit. Velita beatae laudantium voluptate rem ullam dolore nisi voluptatibus est quasi, doloribus tempora.',
    imgSrc: 'assets/images/team1.jpg',
    name: 'Michael D. Kirby',
    title: 'Former U.S. Ambassador'
  },
  {
    quote:
      'Lorem ipsum dolor sit amet int consectetur adipisicing elit. Velita beatae laudantium voluptate rem ullam dolore nisi voluptatibus est quasi, doloribus tempora.',
    imgSrc: 'assets/images/team2.jpg',
    name: 'Elaine F. Marshall',
    title: 'Secretary of State'
  },
  {
    quote:
      'Lorem ipsum dolor sit amet int consectetur adipisicing elit. Velita beatae laudantium voluptate rem ullam dolore nisi voluptatibus est quasi, doloribus tempora.',
    imgSrc: 'assets/images/team3.jpg',
    name: 'Janice Hoffman',
    title: 'Chief Operating Officer'
  },
  {
    quote:
      'Lorem ipsum dolor sit amet int consectetur adipisicing elit. Velita beatae laudantium voluptate rem ullam dolore nisi voluptatibus est quasi, doloribus tempora.',
    imgSrc: 'assets/images/team4.jpg',
    name: 'Stefan Homa',
    title: 'Charity architect'
  },
  {
    quote:
      'Lorem ipsum dolor sit amet int consectetur adipisicing elit. Velita beatae laudantium voluptate rem ullam dolore nisi voluptatibus est quasi, doloribus tempora.',
    imgSrc: 'assets/images/team2.jpg',
    name: 'Jeannie Gooch',
    title: 'Funding teacher'
  },
  {
    quote:
      'Lorem ipsum dolor sit amet int consectetur adipisicing elit. Velita beatae laudantium voluptate rem ullam dolore nisi voluptatibus est quasi, doloribus tempora.',
    imgSrc: 'assets/images/team3.jpg',
    name: 'Elaine F. Marshall',
    title: 'Secretary of State'
  }
];

function About() {
  return (
    <div>
      <div className="inner-banner">
        <section className="w3l-breadcrumb py-5">
          <div className="container py-lg-5 py-md-3">
            <h2 className="title">About Us</h2>
          </div>
        </section>
      </div>

      <div className="position-relative">
        <div className="shape overflow-hidden">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      <section className="w3l-forms-9 py-5">
        <div className="main-w3 py-lg-5 py-md-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="main-midd col-lg-9">
                <h3 className="title-big">ስለ ወንጌላዊ አለምነህ ጀንበሩ በትንሹ</h3>
                <p className="mt-3">
                ጥቂት ጊዜ የኖሮ ነገር ግን ታላቅ የእግዚአብሄርን ስራ ሰርቶ ያለፈ ወንጌላዊ !!! በምድራችን ከተነሱት ታላላቅ የእግዚአብሔር ሰዎች መካከል አንዱ ወንጌላዊ አለምነህ ጀንበሩ (ጋሼ አለምነህ) ጥቂት ኖሮ ታላቅ ነገርን ሰርቶ ያለፈ የጌታ ባርያ ነዉ፡፡ ወንጌላዊ አለምነህ ስለ ወንጌል የኖረ፤ በሁሉም የኢትጵያ ክልሎች ገጠር ከተማ ሳይል ወንጌል ሰብኮ ያለፈ፤ ብዙ ጊዜ ከዉጭ ሃገር የአገልግሎት ጥሪ ሲቀርብለት እንኳን ምርጫዉ ሀገር ውስጥ ማገልገል ነበር ምክንያቱ ደግሞ የሁልጊዜ ህልሙ ኢትዮጵያን በወንጌል ተለዉጣ ማየት ስለነበር ነዉ፡፡ እንዲሁም በምድራችን ላይ ታላቅ የመንፈስ ቅዱስን ሪቫይቫል እንዲመጣ ተግቶ የሚፀልይ ብሎም የሚያስተምር ታማኝ ባላደራ እና የወንጌል አርበኛ ነበር፡፡ ይህ ታላቅ የእግዚአብሔር ሰዉ በስጋ ሲለየን ጥልቅ ሀዘን ቢሰማንም ነገርግን ወደተሻለ እና ወደከበረ ስፍራ በመሄዱ ደስታችን ወደር የለዉም (የቅዱሳኑ ሞት፣ በእግዚአብሔር ፊት የተከበረ ነዉ፡፡ መዝ 116፡15 አ.መ.ት ) ሁልጊዜም መድረክ ላይ ፡- መች ረሳሁ... መች ዘነጋሁ ...ሁሉንም አስታዉሳለሁ የሚለዉን ዝማሬ ሳይዘምር የወረደበትን ጊዜ እምብዛም አልነበረም፡፡ የዚህ ታላቅ የእግዚአብሄር ሰዉ የሂወት ታሪክ፣አስተምህሮ ብሎም በአገልግሎቱ ጌታ ለሰራዉ ስራ እራሱ ባለቤቱ ክብሩን እና ምስጋናውን ይውሰድ፡ አሜን፡፡
                </p>
              </div>
              <div className="main-midd-2 col-lg-3 mt-lg-0 mt-4 text-lg-right">
                <Link to="#donate" className="btn btn-style btn-primary">
                  <span className="fa fa-heart mr-1"></span> Donate Now
                </Link>
              </div>
            </div>
            <div className="donar-img mt-5">
              <div className="right-side text-center">
                <span className="fa fa-heart"></span>
                <p>OUR TOP DONAR</p>
                <h3 className="big my-3">$1.6m</h3>
                <Link to="#ViewMore" className="btn btn-text">View More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-aboutblock3 py-5" id="videos">
        <div className="video-recipe py-lg-5 py-md-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 align-self">
                <h3 className="title-big">To help the poor to raise their head and face the future with pride</h3>
                <p className="mt-4">
                  Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae, fugiat consequatur voluptatem nihil
                  ad. Lorem ipsum dolor sit amet
                </p>
              </div>
              <div className="col-lg-7 mt-lg-0 mt-md-5 mt-4">
                <div className="row">
                  <div className="col-md-6">
                    <iframe
                      title="Video 1"
                      src="https://www.youtube.com/embed/MG3jGHnBVQs"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <h3 className="video-title mt-sm-4 mt-3">The man of the poor.</h3>
                  </div>
                  <div className="col-md-6 mt-md-0 mt-5">
                    <iframe
                      title="Video 2"
                      src="https://www.youtube.com/embed/MG3jGHnBVQs"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <h3 className="video-title mt-sm-4 mt-3">Mission of “garbage people”</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-team-main" id="team">
        <div className="team py-5">
          <div className="container py-lg-5">
            <div className="title-content text-center">
              <h3 className="title-big">Happy Volunteers</h3>
            </div>
            <div className="team-row mt-md-5 mt-4">
              {teamMembers.map((member, index) => (
                <div className="team-wrap" key={index}>
                  <div className="team-member text-center">
                    <div className="team-img">
                      <img src={member.imgSrc} alt={member.name} className="radius-image img-fluid" />
                    </div>
                    <Link to="#url" className="team-title">{member.name}</Link>
                    <p>Volunteers</p>
                  </div>
                </div>
              ))}
              <div className="team-apply">
                <Link to="#url" className="team-title m-0">
                  <span className="fa fa-plus-circle d-block mb-3"></span> Apply for Volunteer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-testimonials" id="testimonials">
        <div className="customer-layout py-5">
          <div className="container py-lg-5 py-md-4">
            <div className="heading align-self text-center">
              <h6 className="title-small">Our Testimonials</h6>
              <h3 className="title-big mb-md-5 mb-4">Over 20 Years of Accomplishments</h3>
            </div>
            <div className="row testimonial-row">
              <div id="owl-demo1" className="owl-two owl-carousel owl-theme mb-lg-3 mb-5">
                {testimonials.map((testimonial, index) => (
                  <div className="item" key={index}>
                    <div className="testimonial-content">
                      <div className="testimonial">
                        <blockquote>
                          <q>{testimonial.quote}</q>
                        </blockquote>
                        <div className="testi-des">
                          <div className="test-img">
                            <img src={testimonial.imgSrc} className="img-fluid" alt={testimonial.name} />
                          </div>
                          <div className="peopl align-self">
                            <h3>{testimonial.name}</h3>
                            <p className="indentity">{testimonial.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
}

export default About;
