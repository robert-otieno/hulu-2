import React, { useState } from 'react'

const News = () => {
  const [isClicked, setIsClicked] = useState('live-sports')

  const news_content = [
    {
      id: "live-sports",
      heading: "Live Sports",
      description: "Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.",
      channels: [
        { image: "/img/live-sports-logo-1.png" },
        { image: "/img/live-sports-logo-2.png" },
        { image: "/img/live-sports-logo-3.svg" },
        { image: "/img/live-sports-logo-4.png" },
      ]
    },
    {
      id: "breaking-news",
      heading: "Breaking News",
      description: "Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.",
      channels: [
        { image: "/img/breaking-news-logo-1.png" },
        { image: "/img/breaking-news-logo-2.svg" },
        { image: "/img/breaking-news-logo-3.png" },
        { image: "/img/breaking-news-logo-4.svg" },
      ]
    },
    {
      id: "biggest-events",
      heading: "Biggest Events",
      description: "Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.",
      channels: [
        { image: "/img/biggest-events-logo-1.png" },
        { image: "/img/biggest-events-logo-2.png" },
        { image: "/img/biggest-events-logo-3.png" },
        { image: "/img/biggest-events-logo-4.png" },
      ]
    }
  ]

  return (
    <section className={`news ${isClicked}`} >
      <div className="news__content">
        <div className="tabs">
          <ul className="flex flex-wrap gap-2 -mb-px">
            <li className="mr-2"><button onClick={() => setIsClicked('live-sports')} className={`tab__links ${isClicked === 'live-sports' && 'active'}`}>Live Sports</button></li>
            <li className="mr-2"><button onClick={() => setIsClicked('breaking-news')} className={`tab__links ${isClicked === 'breaking-news' && 'active'}`} aria-current="page">Breaking News</button></li>
            <li className="mr-2"><button onClick={() => setIsClicked('biggest-events')} className={`tab__links ${isClicked === 'biggest-events' && 'active'}`}>Biggest Events</button></li>
          </ul>
        </div>
        {news_content.map((content, i) => (
          <div key={i} id={content.id} className={`${isClicked === content.id ? 'block' : 'hidden'} space-y-4`}>
            <div className="text--heading mt-10">{content.heading}</div>
            <div className="text--description">{content.description}</div>
            <div className="channels">
              {content.channels.map((channel, i) => (
                <div key={i} className="channel">
                  <img src={channel.image} alt="" />
                </div>
              ))}
            </div>
            <div className="legal__text max-w-xs mx-auto md:max-w-md">Live TV plan required. Regional restrictions, blackouts and additional terms apply. <span className='underline'>See details</span></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default News