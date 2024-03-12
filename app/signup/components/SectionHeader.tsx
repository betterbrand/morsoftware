type SectionHeaderProps = { header: string; subheader: string };

const SectionHeader = ({ header, subheader }: SectionHeaderProps) => {
  return (
    <div>
      <div className="text-3xl font-semibold">{header}</div>
      <div>{subheader}</div>
    </div>
  );
};

export default SectionHeader;
