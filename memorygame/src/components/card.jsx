const Card = ({ image, selected, onClick }) => {
  return (
    <div onClick={onClick} className="card">
      <div className={selected && 'selected'}>
        <img src={image} className="card-face" />
        <img src={'/assets/javascript.png'} className="card-back" />
      </div>
    </div>
  );
}

export default Card;
