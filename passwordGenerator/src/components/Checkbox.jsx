/* eslint-disable react/prop-types */
function CheckBox(props){
    return (
        <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={props.dC}
              id={props.id}
              onChange={() => {
                props.callFunc((prev) => {
                  return !prev;
                });
              }}
            />
            <label htmlFor={props.For}>{props.label}</label>
        </div>

    )
}


export default CheckBox