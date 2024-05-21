import { RowProps } from "../types/songType";

const Row: React.FC<RowProps> = ({song, index}) => {
    return (
        <>
            <td className="py-3 px-4">{index + 1}</td>
            <td className="py-3 px-4">{song["Song Title"]}</td>
            <td className="py-3 px-4">{song["Artist Name"]}</td>
            <td className="py-3 px-4">{song.BPM}</td>
            <td className="py-3 px-4">{song.Key}</td>
        </>
    );
};

export default Row;
