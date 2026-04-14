const Prices = () => {
  const items = [
    { name: "entrance", price: "¥1000", description: "entry to our cozy café and meet the capybaras", emoji: "🎟️" },
    { name: "coffee", price: "¥450", description: "a delicious freshly brewed coffee", emoji: "☕" },
    { name: "juice", price: "¥400", description: "we offer fresh orange, apple, and peach juices", emoji: "🧃" },
    { name: "photo", price: "¥800", description: "take a memorable photo with our friendly capybaras", emoji: "📸" },
    { name: "capybara food", price: "¥300", description: "feed our adorable capybaras", emoji: "🥕" },
    { name: "plushie", price: "¥500", description: "bring a memory home", emoji: "🧸" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-brand mb-10">
        prices
      </h1>
      <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
        {items.map((item, index) => (
          <div key={index} className="bg-brand-soft rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:scale-105 transition duration-300">
            <span className="text-4xl mb-3">{item.emoji}</span>
            <h2 className="text-xl font-bold text-brand mb-2">{item.name}</h2>
            <p className="text-text-body text-lg mb-2">{item.price}</p>
            <p className="text-text-muted text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prices;
