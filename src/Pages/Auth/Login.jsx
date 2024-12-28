import { useState } from 'react';
import FormContainer from '../Share/FormContainer';
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://react-interview.crd4lc.easypanel.host/api/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (data?.status_code === 200) {
        alert('Login successful!');
        const token = data?.data?.token;
        localStorage.setItem('authToken', token);
        setToken(token);
        navigate('/')
      } else {
        alert(`Error: ${data?.status_message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong.');
    }
  };

  return (
    <FormContainer title="Login">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </FormContainer>
  );
};

export default Login;
