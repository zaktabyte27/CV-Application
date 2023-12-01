const AddButton = (props) => {
    const { onClick } = props;
    return <button onClick={onClick}>Add</button>;
  };
  
  const DeleteButton = (props) => {
    const { onClick } = props;
    return <button id={props.id} onClick={onClick}>Delete</button>;
  };
  
  export { AddButton, DeleteButton };