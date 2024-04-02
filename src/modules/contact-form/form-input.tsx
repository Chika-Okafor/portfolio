interface IFormInput {
  wrapper: string;
  type: string;
  placeholder: string;
  input: string; //button className
  preIconWrapper: string;
  preIcon: string;
  postIconWrapper: string;
  postIcon: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

const FormInput = ({
  wrapper,
  type,
  placeholder,
  input,
  preIconWrapper,
  preIcon,
  postIconWrapper,
  postIcon,
  setInput,
  value,
}: IFormInput) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.value) return;
    console.log("e.target.value =", e.target.value);
    setInput(e.target.value);
  };
  return (
    <div className={`input-section ${wrapper}`}>
      <input
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        className={input}
        value={value}
        onChange={(e) => handleInputChange(e)}
      />
      <button className="animated-btn">
        <span className={preIconWrapper}>
          <i className={`fa fa-${preIcon}`}></i>
        </span>
        <span className={`next-btn ${postIconWrapper}`}>
          <i className={`fa fa-${postIcon}`}></i>
        </span>
      </button>
    </div>
  );
};

export default FormInput;
