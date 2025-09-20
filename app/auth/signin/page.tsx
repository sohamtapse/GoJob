import { login } from "@/lib/auth";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center space-y-6">
        {/* Heading */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Welcome to JobList
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Sign in to post jobs or apply for opportunities
          </p>
        </div>

        {/* GitHub Button */}
        <button
          onClick={login}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 text-gray-700 hover:bg-gray-50 transition"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.21 1.78 1.21 1.04 1.77 2.72 1.26 3.39.96.1-.76.41-1.26.74-1.55-2.55-.29-5.23-1.27-5.23-5.64 0-1.25.45-2.27 1.2-3.07-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.18a11.1 11.1 0 012.91-.39c.99 0 1.99.13 2.91.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.77.11 3.06.75.8 1.2 1.82 1.2 3.07 0 4.38-2.69 5.34-5.25 5.63.42.36.79 1.06.79 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.52 10.52 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"
              clipRule="evenodd"
            />
          </svg>
          Continue with GitHub
        </button>

        {/* Terms */}
        <p className="text-xs text-gray-500">
          By signing in, you agree to our
          <a href="#" className="text-blue-600 hover:underline">
            Terms of Service
          </a>
          and
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
