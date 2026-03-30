type NavButtonProps = {
  text?: string;
  onClick?: () => void;
};

export function NavButton({ text = "", onClick }: NavButtonProps) {
  return (
    <button type="button" className="nav-button" onClick={onClick}>
      {text}
    </button>
  );
}
