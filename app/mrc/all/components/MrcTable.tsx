import { classNames } from '../../../helpers';

type TableEntry = {
  number: number;
  title: string;
  author: string;
};

const MrcTable = ({ tableData }: { tableData: TableEntry[] }) => {
  return (
    <table className="table-auto w-full">
      <thead className="text-left bg-gray-200">
        <tr>
          <th className="px-4 py-2 border border-gray-300">Number</th>
          <th className="px-4 py-2 border border-gray-300">Title</th>
          <th className="px-4 py-2 border border-gray-300">Author</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((entry, i) => (
          <tr
            key={entry.number}
            className={classNames(
              'border-b',
              i % 2 === 0 ? 'bg-gray-100' : 'bg-white'
            )}
          >
            <td className="px-4 py-2 border border-gray-300">{entry.number}</td>
            <td className="px-4 py-2 border border-gray-300">{entry.title}</td>
            <td className="px-4 py-2 border border-gray-300">{entry.author}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MrcTable;
