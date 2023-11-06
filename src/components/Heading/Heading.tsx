interface Props {
  title: string;
  desc: string;
}
const Heading = ({ title, desc }: Props) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl text-[#333] font-bold">{title}</h1>
      <p className="text-sm text-color-gray mt-2">{desc}</p>
    </div>
  );
};

export default Heading;
