import React from 'react'
import Corousel from '../Corousel';
import Card from '../Card'
import Card2 from '../Card2';


const Home = () => {
  const gamesData = [
    {
      id: 1,
      name: 'Fortnite',
      status: 'playNow',
      usersWatchingLive: 5000,
      image: 'https://th.bing.com/th/id/OIP.NKG8hq_8k2mAjKi3FAsBygHaK8?w=115&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    },
    {
      id: 2,
      name: 'Cyberpunk',
      status: 'download',
      usersWatchingLive: 0,
      image: 'https://cdn-l-cyberpunk.cdprojektred.com/wallpapers/2560x1600/V-Female-en.jpg',
    },
    {
      id: 3,
      name: 'Clash of Clans',
      status: 'install',
      usersWatchingLive: 10000,
      image: 'https://th.bing.com/th/id/OIP.hoh5JN6HAAdVIGW22YAeHAHaEK?rs=1&pid=ImgDetMain',
    },
    {
      id: 4,
      name: 'Apex Legends',
      status: 'uninstall',
      usersWatchingLive: 0,
      image: 'https://cdn.wccftech.com/wp-content/uploads/2019/02/apex-legends-keyart.jpg',
    },
    {
      id: 1,
      name: 'Fortnite',
      status: 'playNow',
      usersWatchingLive: 5000,
      image: 'https://th.bing.com/th/id/OIP.NKG8hq_8k2mAjKi3FAsBygHaK8?w=115&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    }
  ];
  const streamers = [
    {
      imagelink: 'https://static.vecteezy.com/system/resources/previews/000/674/733/original/vector-gamer-mascot-logo-sticker-design.jpg',
      name: 'MysticGamerX',
      followers: 100000,
    },
    {
      imagelink: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gamer-logo-design-template-b5dc581d653e8d4c9974445a0e9bf702_screen.jpg?ts=1619011598',
      name: 'PixelNinja',
      followers: 75000,
    },
    {
      imagelink: 'https://www.freepngimg.com/thumb/league_of_legends/81136-league-legends-of-sports-green-gamer-logo.png',
      name: 'ElectroChampion',
      followers: 50000,
    },
    {
      imagelink: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gamer-logo-design-template-84b6bb1128e9cc80ac53113fa717f321_screen.jpg?ts=1619013081',
      name: 'TechWarrior89',
      followers: 30000,
    },
    {
      imagelink: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gamer-logos-design-template-ef850a1f6ef35e2d9101586306422e8b_screen.jpg?ts=1619010269',
      name: 'GalacticGamer',
      followers: 20000,
    },
    {
      imagelink: 'https://www.freepngimg.com/thumb/league_of_legends/81136-league-legends-of-sports-green-gamer-logo.png',
      name: 'QuantumStreamer',
      followers: 15000,
    },
   
  ];


  return (
    <div className='w-full h-full mt-5'>

      <div className=' flex flex-row w-full justify-between '>

        <div className='w-[65%]  flex justify-center'>
          <Corousel />
        </div>

        <div className='px-3  w-[35%]'>
          <div className='font-semibold text-2xl text-white'>Live Streaming</div>
          <div className='flex flex-col gap-6 mt-4'>
            {
              gamesData.map((items, index) => (
                <Card key={index} items={items} />
              ))
            }
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <div className='w-[90%] mx-auto mt-5 '>
          <div className='text-2xl text-gray-300 font-semibold'>Recommended Streamers</div>
          <div className='flex w-[100%]'>
            {
              streamers.map((items, index) => (
                <Card2 key={index} items={items} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;