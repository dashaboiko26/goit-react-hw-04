import s from "./ImageCard.module.css";

const ImageCard = ({ urls: { small }, alt_description, onShowModal }) => {
  return (
    <div>
      <img
        className={s.image}
        src={small}
        alt={alt_description}
        loading="lazy"
        onClick={onShowModal}
      />
    </div>
  );
};

export default ImageCard;
