export default function Button({ children, href, variant = 'primary', className = '', ...props }) {
  const baseStyles = 'inline-block px-8 py-3 rounded-[33px] font-semibold transition-all duration-200 text-center';

  const variants = {
    primary: 'bg-accent text-primary hover:bg-[#d49215] hover:shadow-lg',
    secondary: 'bg-primary text-secondary hover:bg-[#5a4a37] hover:shadow-lg',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-primary',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
