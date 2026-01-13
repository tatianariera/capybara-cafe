import { useNavigate } from 'react-router-dom'
import homeImg from '../imgs/home.jpeg'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-pink-50">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-pink-50 opacity-50"
        style={{
          backgroundImage: `url(${homeImg})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 py-12">
        <h1 className="text-5xl md:text-7xl font-extrabold text-pink-100 mb-4 mt-40">
          welcome to capybara café
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
          cozy vibes, fresh drinks, and cute companions await you!
        </p>

        <button
          className="bg-pink-100 text-pink-400 font-bold px-8 py-4 rounded-full transition mb-10 cursor-pointer"
          onClick={() => navigate("/reservations")}
        >
          make a reservation
        </button>

        <div className='h-100'></div>

        <div className="w-full max-w-4xl h-96 rounded-3xl overflow-hidden bg-pink-100">
          <h2 className="text-2xl font-bold text-pink-400 mb-4 mt-4 text-center">
            our location
          </h2>
          <iframe
            title="location"
            src="https://www.google.com/maps?q=35.666535,139.688530&hl=es&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Home
