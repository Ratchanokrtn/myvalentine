'use client';


type PopupVideoProps = {
  onClose: () => void;
};
export default function Popupvideo({onClose} : PopupVideoProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
      <video autoPlay loop controls className="w-full max-w-[800px] h-[450px] rounded-lg shadow-lg">
        <source src="/spacial.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}


