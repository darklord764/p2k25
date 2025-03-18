import React from 'react'
import TeamCard from "../../Team/TeamCard";
import "./Team1.css"
import Hero from '../Hero/Hero';
import dete from "./images/dete.webp"
import tejas from "./images/tjasbhatakr.webp"
import silpa from "./images/silpa.webp"
import jadhav from "./images/jadhav.webp"

function FacultyComponants() {
  return (
    <>
      <div className="team-page">
        <div className="hero-background">
          <Hero />
         </div>
        <div>
      <div className='team-content' >
        <div className="flex flex-col justify-start items-center min-h-[570px] pt-8 px-4 pb-24">
          <h1 className="text-white text-4xl font-semibold mb-8 text-center p-8">
            Meet Our Faculty
          </h1>
          <h2 className="main-coordinator-heading">Director </h2>
          <div className="team-container">
            <div className="team-card">
              <TeamCard
                name="Dr. M. B. Kokare"
                position="Director"
                instagram=""
                linkedin="adsfasfd"
                email="2022BIN008@sggs.ac.in" jpg
                image="https://res.cloudinary.com/dg6qtpags/image/upload/v1740042908/your-cloudinary-folder-name/qwkltvblsinungxiaiq3.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-start items-center min-h-[570px] pt-8 px-4 pb-24">
          <h2 className="main-coordinator-heading">Director </h2>
          <div className="team-container">
            <div className="team-card">
              <TeamCard
                name="Dr. s. B. dethe"
                position="dean of student afffairs"
                instagram=""
                linkedin="adsfasfd"
                email="2022BIN008@sggs.ac.in" jpg
                image={dete}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center min-h-[570px] pt-8 px-4 pb-24">
        <h2 className="main-coordinator-heading">Director </h2>
        <div className="team-container">
          <div className="team-card">
            <TeamCard
              name="Dr. a.s. shinde"
              position="faculty cordinator"
              instagram=""
              linkedin="adsfasfd"
              email="2022BIN008@sggs.ac.in" jpg
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1740042905/your-cloudinary-folder-name/e5o86puxmjzc2wne4gas.jpg"
            />
          </div>
          <div className="team-card">
            <TeamCard
              name="Dr. d. g. wagre"
              position="faculty co-cordinator"
              instagram=""
              linkedin="adsfasfd"
              email="2022BIN008@sggs.ac.in" jpg
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1740042907/your-cloudinary-folder-name/kqcsjqnh30jw2ft74ugg.jpg"
            />
          </div>
          <div className="team-card">
            <TeamCard
              name="Dr. aslam khan"
              position="faculty co-cordinator"
              instagram=""
              linkedin="adsfasfd"
              email="2022BIN008@sggs.ac.in" jpg
              image=""
            />
          </div>

        </div>
      </div>
      <div className="flex flex-col justify-start items-center min-h-[570px] pt-8 px-4 pb-24">
        <h2 className="main-coordinator-heading">Director</h2>
        <div className="team-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="team-card">
            <TeamCard
              name="Dr. Padama bagde"
              position="Extc deparment"
              instagram=""
              linkedin="adsfasfd"
              email="2022BIN008@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1740042910/your-cloudinary-folder-name/gdgecvwnzjk89uzzfhsh.jpg"
            />
          </div>

          <div className="team-card">
            <TeamCard
              name="Dr. anand chavan"
              position="chemical deparment"
              instagram=""
              linkedin="adsfasfd"
              email="2022BIN008@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1740042904/your-cloudinary-folder-name/aghcpvz7n5mxlubhuh2z.jpg"
            />
          </div>
          <div className="team-card">
            <TeamCard
              name="Dr. tejas bhatkar"
              position="civil deparment"
              instagram=""
              linkedin="adsfasfd"
              email="2022BIN008@sggs.ac.in"
              image={tejas}
            />
          </div>
          <div className="team-card">
            <TeamCard
              name="Dr. a. d. sawarkar"
              position="it deparment"
              instagram=""
              linkedin="adsfasfd"
              email="2022BIN008@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1740042912/your-cloudinary-folder-name/tvsjw0efukyzorrdyys7.jpg"
            />
          </div>
        </div>
        <div className="team-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="team-card">
            <TeamCard
              name="mr.mahendra sukre"
              position="mechanical deparment"
              instagram=""
              linkedin="adsfasfd"
              email="2022BIN008@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1740042907/your-cloudinary-folder-name/gbeu8elfwd7ggv2l49ub.jpg"
            />
          </div>

          <div className="team-card">
            <TeamCard
              name="Dr. d . g. wagre"
              position="production deparment"
              instagram=""
              linkedin="adsfasfd"
              email="2022BIN008@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1740042907/your-cloudinary-folder-name/kqcsjqnh30jw2ft74ugg.jpg"
            />
          </div>
          <div className="team-card">
            <TeamCard
              name="Dr. prakash khunde"
              position="textile deparment"
              instagram=""
              linkedin="adsfasfd"
              email="2022BIN008@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1740042912/your-cloudinary-folder-name/xfcg791l7q0nb3hibiky.jpg"
            />
          </div>
          <div className="team-card">
            <TeamCard
              name="mr. nayan bijwe"
              position="electrical deparment"
              instagram=""
              linkedin="adsfasfd"
              email="2022BIN008@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1740042909/your-cloudinary-folder-name/zgr8u9rny0i4p51cs99c.jpg"
            />
          </div>
        </div>
        <div className="team-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="team-card">
            <TeamCard
              name="mr. a. s. jadhav"
              position="instru deparment"
              instagram=""
              linkedin="adsfasfd"
              email="2022BIN008@sggs.ac.in"
              image={jadhav}
            />
          </div>

          <div className="team-card">
            <TeamCard
              name="p . g . kolapwar"
              position="cse deparment"
              instagram=""
              linkedin="adsfasfd"
              email="2022BIN008@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1740042911/your-cloudinary-folder-name/u0nerzw28h86chp0yykc.jpg"
            />
          </div>

          <div className="team-card">
            <TeamCard
              name="Dr.shilpa chavhan "
              position="Fy cordinator"
              instagram=""
              linkedin="adsfasfd"
              email="2022BIN008@sggs.ac.in"
              image={silpa}
            />
          </div>
        </div>
      </div>

</div>
</div>
    </>
  )
}

export default FacultyComponants;
