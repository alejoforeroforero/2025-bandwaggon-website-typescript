import './Button.css';

type ButtonType = {
  label: string;
  classTitle:string;
  onClick: () => void;
};

const Button = ({ label, classTitle, onClick }: ButtonType) => {
  return <button className={classTitle} onClick={onClick}>{label}</button>;
};

export default Button;
