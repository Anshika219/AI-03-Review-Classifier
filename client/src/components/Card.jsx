import {
  FaSmile,
  FaTags,
  FaBrain,
  FaArrowRight,
} from "react-icons/fa";

function Card({ title, description }) {
  const getIcon = () => {
    switch (title) {
      case "Sentiment Analysis":
        return (
          <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
            <FaSmile className="text-green-600 text-2xl" />
          </div>
        );

      case "Theme Detection":
        return (
          <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center">
            <FaTags className="text-purple-600 text-2xl" />
          </div>
        );

      default:
        return (
          <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
            <FaBrain className="text-blue-600 text-2xl" />
          </div>
        );
    }
  };

  return (
    <div
      className="
      group
      bg-white
      dark:bg-slate-900
      rounded-3xl
      p-8
      border
      border-slate-200
      dark:border-slate-700
      shadow-sm
      hover:shadow-2xl
      hover:-translate-y-2
      transition-all
      duration-300
      h-full
      "
    >
      {getIcon()}

      <h2 className="text-2xl font-bold mt-6 text-slate-900 dark:text-white">
        {title}
      </h2>

      <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
        {description}
      </p>

      <button
        className="
        mt-8
        flex
        items-center
        gap-2
        text-blue-600
        font-semibold
        group-hover:gap-3
        transition-all
        "
      >
        Learn More
        <FaArrowRight />
      </button>
    </div>
  );
}

export default Card;