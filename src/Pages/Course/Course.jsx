import { useState, useEffect } from 'react';

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [token] = useState(localStorage.getItem('authToken'));

  useEffect(() => {
    const fetchCourses = async () => {
      if (!token) {
        alert('Please log in to view courses.');
        return;
      }

      try {
        const response = await fetch('https://react-interview.crd4lc.easypanel.host/api/course', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (data?.status_code === 200) {
          setCourses(data?.data); // Assuming response contains the 'data' array with courses
        } else {
          alert(`Error: ${data?.status_message}`);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
        alert('Something went wrong while fetching courses.');
      }
    };

    fetchCourses();
  }, [token]);

  return (
    <div className="courses-container">
      <h2 className="heading">Available Courses</h2>
      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-card-header" style={{ backgroundColor: course.badge_color }}>
              <span className="badge">{course.badge_text}</span>
            </div>
            <div className="course-card-body">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
            </div>
            <div className="course-card-footer">
              <span className="instructor">Instructor: {course.instructor_name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
