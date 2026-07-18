import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

const Auth = () => {
  const location = useLocation();
  const [isFlipped, setIsFlipped] = useState(location.pathname === '/register');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const primaryColor = "bg-[#814df2]"; // Matching the purple from the reference image
  const textColor = "text-[#814df2]";

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      if (isFlipped) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate('/');
    } catch (err: any) {
      let errorMessage = 'Authentication failed. Please try again.';
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        errorMessage = 'Incorrect email or password. Please try again.';
      } else if (err.code === 'auth/email-already-in-use') {
        errorMessage = 'This email is already registered. Please sign in instead.';
      } else if (err.code === 'auth/weak-password') {
        errorMessage = 'Password is too weak. Please use at least 6 characters.';
      } else if (err.code === 'auth/invalid-email') {
        errorMessage = 'Please enter a valid email address.';
      } else if (err.code === 'auth/too-many-requests') {
        errorMessage = 'Too many failed attempts. Please try again later.';
      } else if (err.message) {
        // If it's a raw Firebase message but not caught above, try to clean it
        if (err.message.includes('auth/')) {
           errorMessage = 'An authentication error occurred. Please check your details.';
        } else {
           errorMessage = err.message;
        }
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    try {
      setError('');
      setLoading(true);
      await loginWithGoogle();
      navigate('/');
    } catch (err: any) {
      setError('Failed to authenticate with Google');
    } finally {
      setLoading(false);
    }
  };

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
    setError('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col justify-center bg-gray-50/50">
      <div className="w-full max-w-6xl mx-auto px-4 h-[750px] flex rounded-3xl shadow-2xl bg-white overflow-hidden">
        
        {/* LEFT COLUMN - FLIP CONTAINER */}
        <div className="w-full md:w-1/2 relative perspective-[1500px]">
          <motion.div
            className="w-full h-full relative"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50, damping: 15 }}
          >
            {/* FRONT - LOGIN */}
            <div 
              className="absolute inset-0 w-full h-full bg-white flex flex-col p-8 md:p-14 lg:p-20"
              style={{ backfaceVisibility: "hidden" }}
            >
              {/* Logo */}
              <div className="mb-12">
                <img src="/black_themed_Nutirla_Svg_LOGO.png" alt="Nutrila" className="h-10 object-contain" />
              </div>

              <div className="mb-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-sans tracking-tight mb-3">Welcome Back</h2>
                <p className="text-gray-500 text-sm">Hey, welcome back to your special place</p>
              </div>

              {error && !isFlipped && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-6 border border-red-100">
                  {error}
                </div>
              )}

              <form onSubmit={handleAuth} className="space-y-6 flex-1">
                <div>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#814df2] focus:border-[#814df2] bg-white text-gray-800 transition-all text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#814df2] focus:border-[#814df2] bg-white text-gray-800 transition-all text-sm"
                      placeholder="••••••••••••"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-[#814df2] focus:ring-[#814df2] border-gray-300 rounded cursor-pointer"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-xs font-medium text-gray-600 cursor-pointer">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-xs font-medium text-gray-500 hover:text-gray-800 transition-colors">
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full md:w-auto px-10 mt-4 py-3.5 rounded-xl shadow-md text-white font-medium focus:outline-none transition-all duration-300 ${primaryColor} hover:opacity-90`}
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </button>
              </form>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={handleGoogleAuth}
                  disabled={loading}
                  className="w-full flex justify-center items-center gap-3 py-3.5 border border-gray-200 rounded-xl bg-white text-gray-600 text-sm font-medium hover:bg-gray-50 transition-all mb-6"
                >
                  <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                  Continue with Google
                </button>
                <p className="text-xs font-medium text-gray-500">
                  Don't have an account?{' '}
                  <button type="button" onClick={toggleFlip} className={`font-bold ${textColor} hover:opacity-80 transition-opacity cursor-pointer`}>
                    Sign Up
                  </button>
                </p>
              </div>
            </div>

            {/* BACK - REGISTER */}
            <div 
              className="absolute inset-0 w-full h-full bg-white flex flex-col p-8 md:p-14 lg:p-20"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              {/* Logo */}
              <div className="mb-12">
                <img src="/black_themed_Nutirla_Svg_LOGO.png" alt="Nutrila" className="h-10 object-contain" />
              </div>

              <div className="mb-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-sans tracking-tight mb-3">Create Account</h2>
                <p className="text-gray-500 text-sm">Join Nutrila to start managing your orders</p>
              </div>

              {error && isFlipped && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-6 border border-red-100">
                  {error}
                </div>
              )}

              <form onSubmit={handleAuth} className="space-y-6 flex-1">
                <div>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#814df2] focus:border-[#814df2] bg-white text-gray-800 transition-all text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#814df2] focus:border-[#814df2] bg-white text-gray-800 transition-all text-sm"
                      placeholder="Create a strong password"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full md:w-auto px-10 mt-8 py-3.5 rounded-xl shadow-md text-white font-medium focus:outline-none transition-all duration-300 ${primaryColor} hover:opacity-90`}
                >
                  {loading ? 'Creating...' : 'Sign Up'}
                </button>
              </form>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={handleGoogleAuth}
                  disabled={loading}
                  className="w-full flex justify-center items-center gap-3 py-3.5 border border-gray-200 rounded-xl bg-white text-gray-600 text-sm font-medium hover:bg-gray-50 transition-all mb-6"
                >
                  <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                  Continue with Google
                </button>
                <p className="text-xs font-medium text-gray-500">
                  Already have an account?{' '}
                  <button type="button" onClick={toggleFlip} className={`font-bold ${textColor} hover:opacity-80 transition-opacity cursor-pointer`}>
                    Sign In
                  </button>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN - STATIC IMAGE */}
        <div className="hidden md:block w-1/2 p-4">
          <div className="w-full h-full rounded-2xl overflow-hidden relative shadow-inner">
            <img 
              src="/Login.jpg" 
              alt="Login illustration" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Auth;
