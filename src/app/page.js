'use client'
import React, { useState, useEffect } from 'react';
import Card from './components/card';
import Titulo from './components/titulo';
import Image from 'next/image';

export default function Home() {
  const [filmes, setFilmes] = useState({ filmes2000: [], filmes1900: [] });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTkyMjY2NzQ4MWFiMjA3ZDY0MjQ1MGIwZWZiNDYxZSIsInN1YiI6IjVlYTA5ZTZiYmU0YjM2MDAxYzU5NWExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vhu0pPCiIwmtrpyOHdBlQid8HJJllaHthn1MERS_ANg',
    },
  };


  const fetchMovies = () => {
    fetch('https://api.themoviedb.org/3/trending/movie/week?language=pt-BR', options)
      .then((response) => response.json())
      .then((response) => {

        const filmes2000 = response.results.filter((filme) => {
          const anoLancamento = parseInt(filme.release_date?.split('-')[0]);
          return anoLancamento >= 2000;
        });
  
    
        const filmes1900 = response.results.filter((filme) => {
          const anoLancamento = parseInt(filme.release_date?.split('-')[0]);
          return anoLancamento >= 1900 && anoLancamento < 2000;
        });
  
        setFilmes({ filmes2000, filmes1900 });
      })
      .catch((err) => console.error(err));
  };
 
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <nav className="flex gap-4 justify-between items-end bg-purple-950 w-full p-3">
        <h1 className='flex items-center gap-2 text-5xl text-white font-bold uppercase'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z" clipRule="evenodd" />
        </svg>
          Nostalgic Movie
        </h1>
        <a href="/sobre">Sobre</a>
      </nav>

      <Titulo>Os mais procurados</Titulo>
      <section className='flex flex-wrap gap-4 p-4'>
        {filmes.filmes2000 &&
          filmes.filmes2000.map((filme) => <Card filme={filme} key={filme.id} />)
        }
        {filmes.filmes1900 &&
          filmes.filmes1900.map((filme) => <Card filme={filme} key={filme.id} />)
        }
      </section>

      <Titulo>2000...</Titulo>
      <section className='flex flex-wrap gap-4 p-4'>
        {filmes.filmes2000 &&
          filmes.filmes2000.map((filme) => <Card filme={filme} key={filme.id} />)
        }
      </section>

      <Titulo>1990...</Titulo>
      <section className='flex flex-wrap gap-4 p-4'>
        {filmes.filmes1900 &&
          filmes.filmes1900.map((filme) => <Card filme={filme} key={filme.id} />)
        }
      </section>
    </main>
  );
}