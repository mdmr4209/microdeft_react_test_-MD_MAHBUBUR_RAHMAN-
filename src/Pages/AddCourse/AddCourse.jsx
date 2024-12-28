import { useState } from 'react';

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    badge_text: '',
    badge_color: '',
    instructor_name: '',
  });

  const [token] = useState(localStorage.getItem('authToken'));

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCourseData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      alert('Please log in to create a course.');
      return;
    }

    try {
      const response = await fetch(
        'https://react-interview.crd4lc.easypanel.host/api/course',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(courseData),
        }
      );

      const data = await response.json();
      if (data?.status_code === 200) {
        alert('Course created successfully!');
      } else {
        alert(`Error: ${data?.status_message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong.');
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Create a Course</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Course Title
          </label>
          <input
            type="text"
            id="title"
            value={courseData.title}
            onChange={handleChange}
            placeholder="Enter course title"
            className="w-full px-4 py-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Course Description
          </label>
          <textarea
            id="description"
            value={courseData.description}
            onChange={handleChange}
            placeholder="Enter course description"
            className="w-full px-4 py-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
        </div>
        <div>
          <label htmlFor="badge_text" className="block text-sm font-medium text-gray-700">
            Badge Text
          </label>
          <input
            type="text"
            id="badge_text"
            value={courseData.badge_text}
            onChange={handleChange}
            placeholder="Enter badge text"
            className="w-full px-4 py-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="badge_color" className="block text-sm font-medium text-gray-700">
            Badge Color
          </label>
          <input
            type="text"
            id="badge_color"
            value={courseData.badge_color}
            onChange={handleChange}
            placeholder="Enter badge color (e.g., #ff0000)"
            className="w-full px-4 py-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="instructor_name" className="block text-sm font-medium text-gray-700">
            Instructor Name
          </label>
          <input
            type="text"
            id="instructor_name"
            value={courseData.instructor_name}
            onChange={handleChange}
            placeholder="Enter instructor's name"
            className="w-full px-4 py-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 text-lg text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
