import { useNavigate } from 'react-router-dom'
import homeImg from '../imgs/home.jpeg'

const Home = () => {
  const navigate = useNavigate();

  const scrollTo = (id) => {
    const element = document.querySelector(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>

      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-center bg-no-repeat opacity-70"
          style={{
            backgroundImage: `url(${homeImg})`,
            backgroundSize: 'cover',
          }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-pink-100 mb-4 animate-fade-in">
            welcome to capybara café
          </h1>

          <p className="text-lg md:text-2xl font-semibold text-white mb-8 max-w-2xl mx-auto">
            cozy vibes, fresh drinks, and cute companions await you!
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button
              className="bg-pink-100 text-pink-400 font-bold px-8 py-4 rounded-full transition cursor-pointer hover:bg-pink-200 hover:scale-105 active:scale-95"
              onClick={() => navigate("/reservations")}
            >
              make a reservation
            </button>

            <button
              className="bg-pink-100 text-pink-400 font-bold px-8 py-4 rounded-full transition cursor-pointer hover:bg-pink-200 hover:scale-105 active:scale-95"
              onClick={() => scrollTo("#map")}
            >
              find us
            </button>
          </div>
        </div>
      </section>

      <section id="features" className="bg-pink-50 flex flex-col items-center text-center px-4 py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-pink-400 mb-10">
          why you'll love capybara café
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl w-full">
          {[
            {
              title: "adorable companions",
              desc: "our friendly capybaras love calm company and cozy naps",
            },
            {
              title: "fresh drinks",
              desc: "freshly brewed coffee and natural juices, we also have plushies and capybara food!",
            },
            {
              title: "relaxing atmosphere",
              desc: "soft music, warm lights and stress-free vibes",
            },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-pink-400 mb-2">{title}</h3>
              <p className="text-gray-500">{desc}</p>
            </div>
          ))}
        </div>

        <div
          id="map"
          className="w-full max-w-4xl rounded-3xl overflow-hidden bg-white mt-16 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-pink-400 m-3 text-center">
            our location
          </h2>
          <div className="h-80 w-full">
            <iframe
              title="Capybara Café location map"
              src="https://www.google.com/maps?q=35.666535,139.688530&hl=es&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <p className="font-semibold text-gray-500 max-w-2xl mx-auto mt-6 text-sm md:text-base">
          relax, sip your favorite coffee, and enjoy the calmest café experience in tokyo
        </p>
      </section>

    </div>
  );
};

export default Home;