import React from 'react';
import { Song } from '../types/songType';

interface ModalProps {
  songs: Song[];
}

const Modal: React.FC<ModalProps> = ({ songs }) => {

  const closeModal = (id: string) => {
          const modal = document.getElementById(id);
          modal?.classList.toggle('hidden');
      }

  const modals = songs.map((song) => (
    <div
      key={song.id}
      id={`modal${song.id}`}
      tabIndex={-1}
      aria-hidden="true"
      className="hidden overflow-y-auto overflow-x-hidden fixed top-0 left-2/3 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-center text-center right-2/4 p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3  className="text-xl font-semibold text-gray-900 dark:text-white align-middle items-center">
              {song["Song Title"]}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">
          <p>
              <a className="text-blue-600 underline decoration-blue-600 hover:opacity-80" target="_blank" href={`${song.URL}`}>
                Listen to song
              </a>
            </p>
          <p
              className="text-base leading-relaxed text-gray-500 dark:text-gray-400"
              dangerouslySetInnerHTML={{ __html: song.Lyrics.replace(/\n/g, '<br />') }} >
          </p>
          </div>
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto"
              onClick= {() => {closeModal(`modal${song.id}`)}}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  ));

  return <>{modals}</>;
};

export default Modal;

