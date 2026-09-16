import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Account
          </h1>

          <p className="mt-2 text-gray-500">
            Join SecureCloud
          </p>
        </div>

        <form className="space-y-5">

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-900"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-900"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-900"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-gray-900 py-3 font-medium text-white transition hover:bg-gray-700"
          >
            Create Account
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-gray-900 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;