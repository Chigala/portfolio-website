import React from 'react'
import Image from 'next/image';

const FollowLinks = () => {
  const icons = [
    {
      name: "instagram",
      path: "/svg/instagram.svg",
      link: "https://www.instagram.com/chigala.dev/",
    },
    {
      name: "github",
      path: "/svg/github.svg",
      link: "https://www.github.com/chigala",
    },
    {
      name: "Twitter",
      path: "/svg/twitter.svg",
      link: "https://www.twitter.com/chigalakingsley",
    },
  ];
  return (
          <div className="flex gap-x-4 pt-12 ">
            <p className="text-xs">follow me: </p>
            <div className="flex flex-row gap-2">
              {icons.map(({ name, path, link }) => (
                <a
                  href={link}
                  key={name}
                  target="_blank"
                  className="flex w-fit items-center rounded-full bg-white  p-1 lg:p-5" rel="noreferrer"
                >
                  <Image alt={name} src={path} width={25} height={25} />
                </a>
              ))}
            </div>
          </div>
  )
}

export default FollowLinks