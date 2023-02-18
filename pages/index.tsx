import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const selfImage = "/images/image-product-desktop.jpg";
  return (
    <>
      <div className='flex justify-center min-h-screen bg-cream'>
        <div className="flex flex-col mx-4 my-10 bg-white rounded-lg md:flex-row md:items-center">
            <div>
              <Image
                src={selfImage}
                alt="image-product-desktop"
                className="mx-auto rounded-l-lg hidden md:block"
                width={300}
                height={450}
              />
              <Image
                src="/images/image-product-mobile.jpg"
                alt="image-product-desktop"
                className="mx-auto rounded-t-lg md:hidden"
                width={686}
                height={480}
              />
            </div>
            <div className="flex flex-col p-8 space-y-6">
              <h2 className='text-darkgrayishblue text-xl font-montserrat'>PERFUME</h2>
              <h1 className='text-verydarkblue text-5xl font-fraunces'>Gabrielle Essence Eau De Parfum</h1>
              <p className='text-darkgrayishblue text-xl font-montserrat'>
                A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
              </p>
              <div className="flex flex-row space-x-10">
                <p className='text-5xl text-darkcyan font-fraunces'>
                  $149.99
                </p>
                <p className='line-through text-darkgrayishblue'>
                  $169.99
                </p>
              </div>
              <button className='flex items-center justify-center py-4 px-8 rounded-md bg-darkcyan space-x-4 hover:bg-hoverdarkcyan'>
                <Image
                alt='cart'
                src='/images/icon-cart.svg'
                width={16}
                height={16}
                />
                <span className='text-white text-xl font-montserrat font-bold'>Add to Cart</span>
              </button>
            </div>
        </div>
      </div>
    </>
  )
}
