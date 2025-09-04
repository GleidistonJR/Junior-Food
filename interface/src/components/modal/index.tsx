type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#33333380]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md h-full overflow-y-scroll">
        <button
          onClick={onClose}
          className="ml-auto block text-xl font-bold text-gray-700 hover:text-black"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}