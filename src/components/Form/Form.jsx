import Button_Component from "../Button/Button"
import Input_Component from "../Input/Input"
import '../../styleshiets/form_design.css'


const Form_Component = ({ value, button_text, onInputChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="form_design">
      {value.map((data) => (
        <Input_Component
          key={data.id}
          data={data}
          onChange={onInputChange}
        />
      ))}
      <Button_Component value={button_text} />
    </form>
  );
};

export default Form_Component;