import styles from './Menu.module.scss'
import MenuItem from './MenuItem'

const Menu = ({ title, items }) => {
  return (
    <nav className={styles.menu}>
      <h3 className={styles.title}>{title}</h3>
      <ul>
        {items.map((menuItem) => (
          <MenuItem item={menuItem} key={menuItem.link} />
        ))}
      </ul>
    </nav>
  )
}

export default Menu
