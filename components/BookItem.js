import classes from "../styles/Books.module.css"
function BookItem({name, description, id, imgUrl}) {
  return <li className={classes.listItem}>
    <img src={imgUrl} alt={name} />
    <h3>{name}</h3>
    <p>{description}</p>

  </li>
}

export default BookItem