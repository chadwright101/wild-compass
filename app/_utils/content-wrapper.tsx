interface Props {
  children: React.ReactNode;
}

const ContentWrapper = ({ children }: Props) => {
  return (
    <div className="px-7 max-w-[1280px] mx-auto desktop:px-10">{children}</div>
  );
};

export default ContentWrapper;
