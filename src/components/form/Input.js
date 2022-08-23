import "./Input.css";

function Input({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div className="form__control">
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        onChange={handleOnChange}
        defaultValue={value}
      />
    </div>
  );
}

export default Input;
