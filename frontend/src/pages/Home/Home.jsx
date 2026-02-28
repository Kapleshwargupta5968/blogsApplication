import FeatureCard from "./FeartureCard";
import StepsCard from "./StepsCard";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <section className="relative bg-linear-to-br from-blue-50 to-white">
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              Organize Your Tasks.
              <span className="block text-blue-600">
                Accomplish More Every Day.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-600">
              A modern task management app built with the MERN stack. Secure,
              fast, and beautifully designed.
            </p>

            <div className="mt-10 flex justify-center gap-4">
              <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition duration-300 shadow-lg hover:shadow-xl">
                Get Started
              </button>

              <button className="px-8 py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Powerful Features
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Everything you need to stay organized and productive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {FeatureCard.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-lg p-6 flex flex-col gap-4 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-40 flex items-center justify-center bg-blue-50 rounded-full text-blue-600 font-semibold">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>{" "}
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>{" "}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm text-blue-600 font-semibold mb-2">
              HOW IT WORKS
            </p>
            <h2 className="text-4xl font-bold">
              Get Started in 3 Simple Steps
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Organize your tasks and boost productivity effortlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            {StepsCard.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="text-6xl font-bold text-blue-100 mb-4">
                  {item.step}
                </div>

                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
