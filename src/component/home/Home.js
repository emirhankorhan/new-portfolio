import React from 'react'
import "./home.css"
import { useState } from 'react';

function Home() {

  const [degis, setDegis] = useState(true);

    const degisButton = (e) => {
      e.preventDefault();
      setDegis(false);
    }
  
    const degisButton2 = (e) => {
      e.preventDefault();
      setDegis(true);
    }


  return (
    <div className='home-ana-div'>
    <div className='kısa-bilgi'>
            <div className='kısa-bos'></div>
            <div className='kısa-yazi'>Copyright © 2023, All Rights Reserved.</div>
            <div className='kısa-button'>
              <div className='dark-mode'>
                {degis ? <button onClick={degisButton} className='moon-button'>
                  {degis ? <i class="fa-solid fa-moon"></i> : <i class="fa-solid fa-sun"></i>}
  
                </button> : <button onClick={degisButton2} className='sun-button'>
                  {degis ? <i class="fa-solid fa-moon"></i> : <i class="fa-solid fa-sun"></i>}
  
                </button>}
  
  
              </div>
            </div>
          </div>
    <div className='home-div'>
      
      <div className='large-div'>
        <div className='img-div'></div>
        <div className='text-div'>
          <div className='baslik-text'>Merhaba, ben Emirhan Körhan<i class="fa-solid fa-hand fa-shake"></i><i class="fa-solid fa-heart fa-bounce"></i></div>
          <div className='text-text'>Front-End Web Geliştiricisiyim ve bu konuda yeni şeyler öğreniyorum. 
          Bunun yanında Grafik Tasarım üzerinde uzun zamandan beri çalışıyorum. Kitap okumaya ve yazmaya bayılırım. 
          Kariyerimi yazarlık alanında da geliştirmeye çalışıyorum, şu ana kadar yayımlanan bir şiir kitabım var. 
          Beni daha fazla tanımak için 'hakkımda' kısmına göz atmayı unutma!</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home