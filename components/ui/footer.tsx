import React from 'react'
import Link from 'next/link'

export default function Footer() {

  const Contents = [
    {
      title: 'Socials',
      part: [
        {
          title: 'Telegram',
          link: 'https://t.me/Dinosaur_talk',
        },
        // {
        //   title: 'Twitter',
        //   link: '',
        // },
      ]
    }
  ]

  const IconContents = [
    {
      svgPath: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
        </svg>
      ),
      label: 'Twitter',
      link: ''
    },
    {
      svgPath: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
        </svg>
      ),
      label: 'GitHub',
      link: ''
    },
    {
      svgPath: '',
      label: 'GitHub',
      link: ''
    },
  ]
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                  <img src='images/GuitarDinosaur.png' width={40} />
                </Link>
              </div>
              <div className="text-gray-400">
                Dinosaur is the cutiest meme in BSC.
                Looking forward to ETH, ARB and all chain
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {
                Contents.map((content, index) => {
                  return (
                    <div className="text-sm" key={content.title}>
                      <h6 className="text-gray-200 font-medium mb-1">{content.title}</h6>
                      <ul>
                        {
                          content.part.map((partContent, indexed) => {
                            return (
                              <li
                                className="mb-1"
                                key={partContent.title}
                              >
                                <Link
                                  href={partContent.link}
                                  className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                                >
                                  {partContent.title}
                                </Link>
                              </li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  )
                })
              }
            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              {
                IconContents.map((icon, index) => {
                  return (
                    <li
                      key={icon.link}
                    >
                      <Link
                        href={icon.link}
                        className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                        aria-label={icon.label}
                      >
                        {icon.svgPath}
                      </Link>
                    </li>
                  )
                })
              }
            </ul> */}

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; Dinosaur 2023. All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
