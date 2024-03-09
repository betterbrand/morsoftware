import { PlusIcon } from '@heroicons/react/24/outline';

type AddButtonProps = { onClick: () => void; text: string };

const AddButton = ({ onClick, text }: AddButtonProps) => {
  return (
    <button
      className="rounded-lg items-center w-full flex px-4 py-2 cursor-pointer text-blue-500 hover:bg-sky-300 hover:bg-opacity-10 duration-200 text-sm"
      onClick={onClick}
    >
      <PlusIcon className="w-4 text-blue-500 mr-4" />
      {text}
    </button>
  );
};

export default AddButton;
