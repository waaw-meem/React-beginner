// 4. Create a component

function ProfileCard({title,handle,image,description}){
    return (
    // <div>
    //   <img src={image} alt='pad image'/>
    //   <div>{title}</div>
    //   <div>{handle}</div>
    // </div>


<div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
     <img src={image} alt='Placeholdar Image'/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4">{title}</p>
        <p className="subtitle is-6">{handle}</p>
      </div>
    </div>

    <div className="content">
      {description}
      <a>{handle}</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
    </div>
  </div>
</div>
)
}

export default ProfileCard;