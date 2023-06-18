import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function Testimonials() {
  const DinoMap = [
    {
      imgSrc: 'images/GuitarDinosaur.png',
      title: '2023 Q2',
      content: (
        <p>
          1. 2000 Holders<br/>
          2. 5000 Telegram Members<br/>
          3. Launch On PinkSale<br/>
          4. Launch On PancakeSwap<br/>
          5. Website Launch
        </p>
      ),
    },
    {
      imgSrc: 'images/PlayPhone.png',
      title: '2023 Q3-4',
      content: (
        <p>
          1. 5000 Holders<br/>
          2. 10000 Telegram Members<br/>
          3. Listing On CEX<br/>
          4. Listing On CG/CMC<br/>
          5. Website Redesign
        </p>
      ),
    },
    {
      imgSrc: 'images/GuitarDinosaur.png',
      title: '2024 ~',
      content: (
        <p>
          1. 10000 Holders<br/>
          2. 20000 Telegram Members<br/>
          3. Dinosaur DApp<br/>
          4. Dinosaur Game<br/>
          5. Dinosaur Merchandise
        </p>
      ),
    },
  ]
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">DinoMap</h2>
            <p className="text-xl text-gray-400">
              Reviving dinosaur is impossible.
              But
              <span className="text-blue-500 ml-2 mr-2">
                $Dinosaur
              </span>
              can live forever.
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {
              DinoMap.map((dino, index) => {
                return (
                  <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
                    <div>
                      <div className="relative inline-flex flex-col mb-4">
                        <img className="rounded-full" src={dino.imgSrc} width={48} height={48} alt="Cute Dinosaur" />
                      </div>
                    </div>
                    <blockquote className="text-lg text-gray-400 grow">
                      {dino.content}
                    </blockquote>
                    <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                      <cite className="text-gray-200 not-italic">
                        {dino.title}
                      </cite>
                    </div>
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>
    </section>
  )
}
