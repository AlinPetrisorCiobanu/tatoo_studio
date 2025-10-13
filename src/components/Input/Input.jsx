


const Input_Component = ({ data, onChange }) => {
  return (
    <div>
      <label>{data.label}</label>
      <input
        type={data.type}
        name={data.name}
        value={data.value}
        placeholder={data.placeholder}
        onChange={onChange}
        required={data.required}
      />
    </div>
  );
};

export default Input_Component;