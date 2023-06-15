import './Profilebar.scss'
import Sprite from '../Sprite/Sprite'
import profileImg from '../../assets/profile-icons/user1.png'
import { useEffect, useState } from 'react';
import axiosInstance from '../../axios';


const Profilebar = () => {
  const [dataUrl, setDataUrl] = useState(null);

  useEffect(() => {
    const url = 'http://127.0.0.1:8000/api/ipfs/file/QmbYqUSRCmCHudnbv7fTyojszxsbQM4hbjmTPqu6uS6LVS';

    axiosInstance.get(url, { responseType: 'arraybuffer' })
      .then(response => {
        // `response.data` is a byte array containing the contents of the file
        const file = new Uint8Array(response.data);
        const blob = new Blob([file], { type: 'image/jpeg' });
        const dataUrl = URL.createObjectURL(blob);
        setDataUrl(dataUrl);
      })
      .catch(error => {
        // Handle error
      });
  }, []);

  return (
    <div className="profilebar">
      <div>
        <img src={dataUrl || profileImg} alt="" />
      </div>
      <div>
        <h3>Михаил</h3>
      </div>
      <div>
        {/* <Sprite id="dropdown" /> */}
      </div>
    </div>
  )
}

export default Profilebar;
