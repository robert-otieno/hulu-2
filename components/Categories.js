import Image from 'next/image'

const Categories = () => {
  return (
    <section className="section categories">
          <div className="categories__content">
            <h4>included in all plans</h4>
            <div className="text--heading">All The TV You Love</div>
            <div className="text--description">Stream full seasons of exclusive series, current-season episodes, hit movies, Hulu Originals, kids shows, and more.</div>
          </div>

          <div className="categories__grid covers">
            <div className="cover--1">
              <Image src='/img/cover-1.jpg' height={500} width={300} />
              <div className="cover__overlay"></div>
              <div className="cover__text">
                <div className="cover__subheading">Past & Current Seasons</div>
                <div className="cover__heading">TV Shows</div>
              </div>
            </div>

            <div className="cover--2">
              <Image src='/img/cover-2.jpg' height={500} width={300} />
              <div className="cover__overlay"></div>
              <div className="cover__text">
                <div className="cover__subheading">New & Classic</div>
                <div className="cover__heading">Movies</div>
              </div>
            </div>

            <div className="cover--3">
              <Image src='/img/cover-3.jpg' height={500} width={300} />
              <div className="cover__overlay"></div>
              <div className="cover__text">
                <div className="cover__subheading">Groundbreaking</div>
                <div className="cover__heading">Hulu Originals</div>
              </div>
            </div>

            <div className="cover--4">
              <Image src='/img/cover-4.jpg' height={500} width={300} />
              <div className="cover__overlay"></div>
              <div className="cover__text">
                <div className="cover__subheading">Add-on</div>
                <div className="cover__heading">Premiums</div>
              </div>
            </div>
          </div>
          <div className="legal__text">Premium network add-ons available for an additional cost</div>
        </section>
  )
}

export default Categories