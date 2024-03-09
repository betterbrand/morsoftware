type SubsectionHeaderProps = { header: string };

const SubsectionHeader = ({ header }: SubsectionHeaderProps) => {
  return (
    <div className="mb-2">
      <div>{header}</div>
      <div className="border-t border-gray-300 h-px"></div>{' '}
    </div>
  );
};

export default SubsectionHeader;
