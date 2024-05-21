import { TableProps } from "../types/songType";
import Row from './Row';

const Table: React.FC<TableProps> = ({ songs }) => {

  return (
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-gray-200 text-gray-600">
        <tr>
          <th className="py-3 px-4 text-center">Number</th>
          <th className="py-3 px-4 text-center">Song Title</th>
          <th className="py-3 px-4 text-center">Artist Name</th>
          <th className="py-3 px-4 text-center">BPM</th>
          <th className="py-3 px-4 text-center">Key</th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        {songs.map((song, index) => (
          <tr key={song.id} className="border-b border-gray-200 cursor-pointer hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300" data-modal-target={`modal${song.id}`} data-modal-toggle={`modal${song.id}`}>
            <Row song={song} index={index}/>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

