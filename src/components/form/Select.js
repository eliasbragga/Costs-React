import "./Select.css";

function Input({ text, name, options, handleOnChange, value }) {
  return (
    <div className="form__control">
      <label htmlFor={name}>{text}</label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        defaultValue={value}
      >
        <option  disabled>
          Selecione o Opção
        </option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Input;
