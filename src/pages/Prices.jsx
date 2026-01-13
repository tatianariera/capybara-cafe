const Prices = () => {
  const items = [
    { name: "entrance", price: "¥1000", description: "entry to our cozy café and meet the capybaras" },
    { name: "coffee", price: "¥450", description: "a delicious freshly brewed coffee" },
    { name: "juice", price: "¥400", description: "we offer fresh orange, apple, and peach juices" },
    { name: "photo", price: "¥800", description: "take a memorable photo with our friendly capybaras" },
    { name: "capybara food", price: "¥300", description: "feed our adorable capybaras" },
    { name: "plushie", price: "¥500", description: "bring a memory home" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-top py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-pink-400 mb-8">
        prices
      </h1>
      <div className="flex flex-wrap justify-center sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl ">
        {items.map((item, index) => (
          <div key={index} className="bg-pink-100 rounded-2xl shadow p-6 flex flex-col items-center text-center hover:scale-105 transition duration-300  ">
            <h2 className="text-2xl font-bold text-pink-400 mb-2">{item.name}</h2>
            <p className="text-gray-700 text-lg mb-2">{item.price}</p>
            <p className="text-gray-500 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prices;
