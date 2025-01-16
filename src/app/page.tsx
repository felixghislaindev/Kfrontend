export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg max-w-2xl w-full p-6">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          The Challenge
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            1. Backend API
          </h2>
          <p className="text-gray-600">
            The backend API provides delivery details for a specific user via
            the endpoint:
            <code className="bg-gray-100 px-1 py-0.5 rounded">
              /comms/your-next-delivery/&lt;USER-ID&gt;
            </code>
            .
          </p>
          <p className="text-gray-600 mt-2">The API:</p>
          <ul className="list-disc list-inside text-gray-600 ml-4 mt-2 space-y-1">
            <li>Fetches the user's data based on their ID.</li>
            <li>Generates a JSON response with the following fields:</li>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                <strong>Title:</strong> Includes the names of active cats,
                formatted appropriately.
              </li>
              <li>
                <strong>Message:</strong> A personalized delivery notification.
              </li>
              <li>
                <strong>Total Price:</strong> Calculated based on active
                subscriptions and pouch sizes.
              </li>
              <li>
                <strong>Free Gift:</strong> Indicates if the total price exceeds
                £120.
              </li>
            </ul>
            <li>Ensures grammatically correct formatting for cat names.</li>
          </ul>
          <p className="text-gray-600 mt-4">
            Check out the backend repository on GitHub:
            <a
              href="https://github.com/felixghislaindev/KBackend/"
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Backend API Repository
            </a>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            2. Frontend Application
          </h2>
          <p className="text-gray-600">
            The frontend is a single-page application that fetches data from the
            backend API and displays it. The page can be accessed at:
            <code className="bg-gray-100 px-1 py-0.5 rounded">
              /welcome/&lt;USER-ID&gt;
            </code>
            .
          </p>
          <p className="text-gray-600 mt-2">The page:</p>
          <ul className="list-disc list-inside text-gray-600 ml-4 mt-2 space-y-1">
            <li>Calls the backend API to retrieve delivery details.</li>
            <li>Displays the personalized title, message, and total price.</li>
            <li>
              Highlights if the user qualifies for a free gift with a badge.
            </li>
          </ul>
          <p className="text-gray-600 mt-4">
            Check out the frontend repository on GitHub:
            <a
              href="https://github.com/felixghislaindev/Kfrontend"
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend Application Repository
            </a>
          </p>
        </section>

        <section className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Deployment
          </h2>
          <p className="text-gray-600">
            Both the backend API and the frontend application have been deployed
            on Railway and are accessible via the following links:
          </p>
          <ul className="list-disc list-inside text-gray-600 ml-4 mt-2 space-y-1">
            <li>
              <strong>Backend API:</strong>
              <a
                href="https://kbackend-production.up.railway.app/comms/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://kbackend-production.up.railway.app
              </a>
            </li>
            <li>
              <strong>Frontend Application:</strong>
              <a
                href="https://kfrontend-production.up.railway.app"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://kfrontend-production.up.railway.app
              </a>
            </li>
          </ul>
        </section>

        <section className="mt-4 mb-5">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Example Usage
          </h2>
          <p className="text-gray-600">To test the full flow:</p>
          <ol className="list-decimal list-inside text-gray-600 ml-4 mt-2 space-y-1">
            <li>
              Use the backend API to fetch data by hitting the endpoint:
              <code className="bg-gray-100 px-1 py-0.5 rounded">
                /comms/your-next-delivery/ff535484-6880-4653-b06e-89983ecf4ed5
              </code>
              .
            </li>
            <li>
              Access the frontend at:
              <code className="bg-gray-100 px-1 py-0.5 rounded">
                /welcome/ff535484-6880-4653-b06e-89983ecf4ed5
              </code>
              .
            </li>
          </ol>
          <p className="text-gray-600 mt-2">
            The frontend will fetch data for the user with ID
            <code className="bg-gray-100 px-1 py-0.5 rounded">
              ff535484-6880-4653-b06e-89983ecf4ed5
            </code>
            , and display the personalized message along with other details.
          </p>
        </section>
      </div>
    </div>
  );
}
