import { useState, useEffect } from 'react';
import Login from './Login';
import Registration from './Registration';

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem('authToken');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {showLogin ? (
        <Login setToken={setToken} />
      ) : (
        <Registration />
      )}
      <div className="text-center mt-4">
        {showLogin ? (
          <p className="text-sm">
            Don't have an account?{' '}
            <button
              onClick={() => setShowLogin(false)}
              className="text-blue-500 underline"
            >
              Register here
            </button>
          </p>
        ) : (
          <p className="text-sm">
            Already have an account?{' '}
            <button
              onClick={() => setShowLogin(true)}
              className="text-blue-500 underline"
            >
              Login here
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default Auth;
