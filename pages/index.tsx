import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const selfImage = "/images/image-product-desktop.jpg";
  return (
    <>
      <Head>
        <title>Product Preview Card Component</title>
      </Head>
      <main>
        <div className='flex items-center justify-center min-h-screen bg-cream'>
          <div className="flex flex-col m-4 my-10 bg-white rounded-lg md:flex-row md:w-3/4 md:h-1/2 lg:w-1/2">
            <div className="hidden relative w-1/2 md:block">
              <Image
                src={selfImage}
                alt="image-product-desktop"
                className="rounded-l-lg"
                fill
              />
            </div>
            <Image
              src="/images/image-product-mobile.jpg"
              alt="image-product-desktop"
              className="mx-auto rounded-t-lg md:hidden"
              width={686}
              height={480}
            />
            <div className="flex flex-col p-6 space-y-6 md:p-8 md:w-1/2 md:pt-12">
              <h2 className='text-darkgrayishblue text-sm font-montserrat tracking-widest'>PERFUME</h2>
              <h1 className='text-verydarkblue text-4xl font-fraunces'>Gabrielle Essence Eau De Parfum</h1>
              <p className='text-darkgrayishblue text-lg font-montserrat'>
                A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
              </p>
              <div className="flex flex-row items-center space-x-10">
                <p className='text-4xl text-darkcyan font-fraunces'>
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
                <span className='text-white text-lg font-montserrat font-bold'>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </main>

    </>
  )
}
