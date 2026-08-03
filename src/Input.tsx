type InputProps = {
  label: string;
  type: string;
  placeholder: string;
};

const Input = ({ label, type, placeholder }: InputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;