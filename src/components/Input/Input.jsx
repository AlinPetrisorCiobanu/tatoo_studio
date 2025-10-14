import '../../styleshiets/input_design.css'


const Input_Component = ({ data, onChange }) => {
  return (
    <div className='input_contianer'>
      <label className='label_design'>{data.label}</label>
      <input
        className='input_design'
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