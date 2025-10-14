import '../../styleshiets/button.css'
const Button_Component = (value) => {

    return (
        <div>
            <button className='button_design'>{value.value.toString()}</button>
        </div>
    )
}

export default Button_Component 