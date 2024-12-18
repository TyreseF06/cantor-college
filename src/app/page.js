import Image from "next/image";
export const metadata = {
  title:"Home",
  decription:"The Home Page"
}
export default function Home() {
  return (
    <div>
      <img src="src\app\Images\main_2529_image4.png" alt="Image of Our Building"></img>
      <h2>Summary Of Our Facilities</h2>
      <div className="grouping">
        <p>
          The College is located in the attractive and pleasantly refurbished Building
          The building houses computing laboratories, and lecture/tutorial rooms.
          It has its own catering facilities and student work areas.
          There is also a car park to the back of the building.
        </p>
        <p>
          Our building has space of 9500m², houses over 240 staff and provides teaching space for more than 1600 students.
        </p>
        <h3>
          Our facilities Include:
        </h3>
        <ul>
          <li>wi-fi technology</li>
          <li>pool teaching rooms, including classrooms to teach from 25 - 80 students</li>
          <li>specialist faculty facilities</li>
          <li>a double height lecture theatre at first and second floor level</li>
          <li>dramatic three-storey glass open atrium</li>
          <li>meeting rooms</li>
          <li>office accommodation</li>
          <li>specialist IT facilities</li>
          <li>reception desk area</li>
          <li>catering outlet</li>
          <li>parking for disabled badge holders</li>
          <li>cycle racks</li>
          <li>gallery</li>
          </ul>
      </div>
      <h2>Summary Of Our Courses:</h2>
      <div className="grouping">
        <h3>Computing courses</h3>
        <p>
        The College offers a range of courses to suit applicants with varying backgrounds and educational abilities. 
        At undergraduate level, there are single BSc Honours Degree courses in Computing, Computer Networks, Software Engineering and Cyber Security with Forensics amongst others.
        <br></br>
        The College teaches undergraduate and postgraduate courses in a wide range of specialisms, including computer science, software development, information systems, networking and software engineering.
        It is at the heart of a passionate computing community, including student societies devoted to games development, digital forensics and programming.
        <br></br>
        The courses are British Computer Society accredited and are highly relevant to modern industry. 
        They are designed to prepare students for professional occupations in Computing and related fields. Many graduates continue their studies to pursue a higher degree such as an MSc. or PhD.
        </p><br></br>
        <h3>Design Courses</h3>
        <p>
        The College is an internationally connected creative community of diverse disciplines housed under one roof. 
        We shape our students' futures, preparing them to shape the world through applied knowledge and creativity.
        <br></br>
        The College's art and design courses don't just train you, they promote alternative ways of thinking, making and communicating; they provide you with space, tools and inspiration to develop your creative practice and a clear career path. 
        You'll get expert teaching from active practitioners and researchers who will encourage you to adopt innovative and resourceful approaches that both perceive and create opportunities for better lives.
        <br></br>
        You’ll develop your creative practice whilst interacting with your peers in well-equipped studios, making and digital workshops.
        At the same time, you'll learn professional skills by working on applied briefs facilitated through our links with commercial clients, cultural institutions, businesses and organisations.
        </p>
      </div>

      <br></br>
    </div>
  );
}