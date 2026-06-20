function Card({ title, description }) {
  return (
    <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-6 h-full transition-colors duration-300">
      <h2 className="text-xl font-bold mb-2 dark:text-white">
        {title}
      </h2>

      <p className="dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}

export default Card;