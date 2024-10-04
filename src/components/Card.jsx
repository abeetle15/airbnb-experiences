
export default function Card({title, photoUrl, stars, ratings, country, price}) {
  return(
    <article className="card-cont">
      <img src="src/images/heart-icon.svg" className="like-icon" />
      <img src={photoUrl} className="card-photo"/>
      <div className="rating-cont">
        <img src="src/images/star-icon.svg" className="star-icon" />
        <span className="rating-text">{stars}</span>
        <span className="rating-amount">({ratings})</span> &#183; <span className="location-text">{country}</span>
      </div>
      <p className="card-title">
        {title}
      </p>
      <p className="price-text">
        From <span className="price-number">{price}</span>$ / person
      </p>
    </article>
  )
}