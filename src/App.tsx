import './App.css'
import Table from './Components/Table';
import Modal from './Components/Modal';
import { useState, useEffect } from 'react';
import { Data } from './types/songType';


var data: Promise<Data> = import ('./data/data.json');

const App: React.FC = () => {

  const [songs, setSongs] = useState<Data['songs']>([]);

  useEffect(() => {
    data.then(resolvedData => {
      setSongs(resolvedData.songs);
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  }, [data]);

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center text-black">CLELIA Set List 01.06</h1>
            <Table songs={songs} />
            <Modal songs={songs} />
        </div>
    );
}

export default App;

