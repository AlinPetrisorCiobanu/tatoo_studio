import Button_Component from "../Button/Button"
import Input_Component from "../Input/Input"


const Form_Component = ({ value, button_text, onInputChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      {value.map((data) => (
        <Input_Component
          key={data.id}
          data={data}
          onChange={onInputChange} // pasa el handler del padre
        />
      ))}
      <Button_Component value={button_text} />
    </form>
  );
};

export default Form_Component;