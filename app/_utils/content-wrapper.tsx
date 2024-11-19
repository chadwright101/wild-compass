interface Props {
  children: React.ReactNode;
}

const ContentWrapper = ({ children }: Props) => {
  return (
    <div className="px-7 desktop:px-10 max-w-[1280px] mx-auto">{children}</div>
  );
};

export default ContentWrapper;
