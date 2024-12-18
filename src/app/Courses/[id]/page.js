import { fetchCourseDetails } from "@/app/lib/db";
const courseDetails = async function({params})  {
    const {id} = await params;
    console.log(id);
    const courseDetails = await fetchCourseDetails(id);
    console.dir(courseDetails)

      return (
        <div className='container'>
        <h1>{courseDetails.CourseTitle}</h1>
        <h2>Course Details</h2>
        <div className="grouping">
          <h3>Subject Of The Course: {courseDetails.CourseSubject}</h3>
          <h3>Course Type: {courseDetails.CourseType}</h3>
          <h3>Award Type: {courseDetails.CourseAwardName}</h3>
          <h3>Year of Entry: {courseDetails.YearOfEntry}</h3>
          <h3>Study Length: {courseDetails.StudyLength}</h3>
          <h3>UCAS Code: {courseDetails.UcasCode}</h3>
          <h3>UCAS points needed: {courseDetails.UcasPoints}</h3>
          <h3>Still Accepting Applications: {courseDetails.NoLongerRecruiting ? "Yes" : "No"}</h3>
          <h3>Course Summary:</h3>
          <p>{courseDetails.CourseSummary}</p>
          <h3>Attendance Type: {courseDetails.ModeOfAttendance}</h3>
          <h3>Has Foundation Year: {courseDetails.HasFoundationYear ? "Yes" : "No"}</h3>
        </div>
        <br></br>
      </div>
    );
  }
  export default courseDetails