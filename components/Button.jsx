function Button({ children }) {
  return (
    <button className="bg-primary flex w-auto items-center gap-2 rounded-xl px-4 py-2">
      {children}
    </button>
  );
}

export default Button;
