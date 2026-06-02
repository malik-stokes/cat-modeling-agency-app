// components/CatCard.js
export default function CatCard({ cat, onBook }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
      <img
        src={cat.image}
        alt={cat.name}
        className="w-64 h-64 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-bold">{cat.name}</h2>
      <p className="text-sm text-gray-600">
        {cat.breed} — {cat.age} years old
      </p>
      <p className="my-2 text-center">{cat.description}</p>
      <button
        onClick={() => onBook(cat)}
        disabled={!cat.available}
        className={`mt-auto w-full px-4 py-2 rounded-md ${
          cat.available
            ? 'bg-blue-600 text-white'
            : 'bg-gray-400 text-white cursor-not-allowed'
        }`}
      >
        {cat.available ? "Book This Model" : "Unavailable"}
      </button>
    </div>
  );
}