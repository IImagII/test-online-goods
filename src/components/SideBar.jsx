import Menu from './menu/Menu'
import { menu } from './menu/menu.data'

const SideBar = () => {
  return <Menu title="Меню" items={menu} />
}

export default SideBar
