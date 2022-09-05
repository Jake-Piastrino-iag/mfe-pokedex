import React, { useState, useEffect } from "react";
import { MegaphoneIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface Banner {
  items: object;
}

export const Banner: React.FC = () => {
  const [bannerData, setBannerData] = useState<any>({});

  const eventNames: string[] = [
    "UserPokemons:tradePokemon",
    "PokemonList:choosePokemon"
  ];

  useEffect(() => {
    for(var i = 0; i < eventNames.length; i++) {
      window.addEventListener(eventNames[i], (ev: any) => setBannerData(ev.detail));
    }
  }, []);

  return bannerData.event?.description ? (
    <div className="bg-green-400 fixed bottom-0 w-screen z-10">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-white p-2">
              <MegaphoneIcon className="h-6 w-6 text-black" aria-hidden="true" />
            </span>
            <p className="ml-3 truncate font-medium text-white">
              <span className="md:hidden text-black">{bannerData.event.shortDescription}</span>
              <span className="hidden md:inline text-black">{bannerData.event.description}</span>
            </p>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex rounded-md p-2 ring-2 ring-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              onClick={() => setBannerData({})}
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (<></>)
}
