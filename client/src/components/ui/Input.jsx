/**
 * Input Component
 * @param {string} placeholder
 * @param {string} value
 * @param {function} onChange
 * @param {string} type
 */

const Input = ({
  placeholder,
  value,
  onChange,
  type = "text",
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default Input;