interface Props {
  children: React.ReactNode;
  cssClasses?: string;
}

const ContentWrapper = ({ children, cssClasses }: Props) => {
  return (
    <div
      className={`px-7 overflow-hidden desktop:px-10 max-w-[1280px] mx-auto ${cssClasses}`}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
