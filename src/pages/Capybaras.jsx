import capyIntelectual from "../imgs/capy-intelectual.jpeg";
import capyFuego from "../imgs/capy-fuego.jpeg";
import capyPink from "../imgs/capy-pink.jpeg";

const Capybaras = () => {
  const capybaras = [
    { name: "naruto-san", img: capyFuego },
    { name: "steve-san", img: capyIntelectual },
    { name: "hana-san", img: capyPink },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-top py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-brand mb-8">
        meet the family
      </h1>
      <div className="flex flex-cols gap-6 max-w-6xl">
        {capybaras.map((capy, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition duration-300"
          >
            <h2 className="text-2xl font-bold text-brand mb-4">{capy.name}</h2>
            <img
              src={capy.img}
              alt={capy.name}
              className="w-full h-64 md:h-72 object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Capybaras;
