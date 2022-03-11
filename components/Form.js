import classNames from "classnames";

export const Form = (props) => {
    return (
        <form {...props}>
            {props.children}
        </form>
    )
}

export const InputGroup = (props) => (
    <div {...props}>
        {props.children}
    </div>
)

export const Input = (props) => (
    <input  {...props} className={classNames(props.className, "active:outline-0 outline-0 px-2 focus:outline-0")}/>

)

export const Label = (props) => (
    <label {...props}>
        {props.children}
    </label>
)