import React from 'react';
import {SlotMac} from './SlotMac';

export const App = () => {
  return (
    <>
      <h4 className="text-center mt-5">
        🎰 Welcome to <span className="font-weight-bold"> Slot Machine Game </span> 🎰
      </h4>

      <div>
        <SlotMac x='😄' y='😄' z='😄' />
        <SlotMac x='😆' y='😁' z='😅' />
        <SlotMac x='🍌' y='🍎' z='🍍' />
        <SlotMac x='👨' y='👨' z='👨' />
      </div>

    </>
  )
}
