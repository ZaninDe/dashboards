import { useState, useEffect } from 'react'
import axios from 'axios';
import { AxiosError } from '../node_modules/axios/index';

export default function Home() {
  async function getUser() {
    const user = await axios.get('https://api.github.com/users/ZaninDe')
      .then(res => res.data)
    console.log(user)
  }

  return (
    <>
      <button
        className='p-5 bg-sky-600 hover:bg-sky-700 text-white m-20 rounded'
        onClick={getUser}
      >
        Show User
      </button>
    </>
  )
}
