export default function NotFound() {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-extrabold text-gray-800">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mt-4">Sorry, we couldn't find the page you're looking for.</p>
        <a
          href="/"
          className="mt-6 text-blue-500 hover:text-blue-700 underline"
        >
          Go back to the homepage
        </a>
      </div>
    )
  }
  