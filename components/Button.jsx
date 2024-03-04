function Button({ children, ...props }) {
  return (
    <button
      className="flex w-fit items-center gap-2 rounded-xl bg-primary px-4 py-2 disabled:animate-pulse"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
