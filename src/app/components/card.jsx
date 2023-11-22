"use client"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

export default function Card ({titulo, nota}) {
  const [favorito, setFavorito] = useState(true)

  function favoritar() {
    setFavorito(true)
  }

  function desfavoritar() {
    setFavorito(false)
  }
  
  return (
    <div className="flex flex-col items-center w-48 relative">
      {
        favorito ? 
        <FavoriteIcon onClick ={desfavoritar} className='text-red-700  cursor-pointer absolute top-2 right-2'/>:
        <FavoriteBorderIcon onClick ={favoritar}  className='absolute top-2 right-2'/>
      }
      <img className="rounded" src= "https://media.fstatic.com/FAqiJo4Cg9Jp8V8M-buR2RCMunI=/322x478/smart/filters:format(webp)/media/movies/covers/2011/07/2bdad8aa4b0bcd0dbc6d820214ec591f.jpg" alt="" />
      <span className="text-lg font-bold line-clamp-1">Matilda</span>
      {titulo}
      <div>
        <i></i>
        <span>{nota}</span>
      </div>
      <a href="" className="bg-amber-400 text-black w-full rounded py-1 text-center">Sinopse</a>
    </div>
  )
}