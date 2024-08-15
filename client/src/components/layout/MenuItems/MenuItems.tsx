import { ConfigProvider, Menu } from "antd";
import { ItemType, MenuItemType } from "antd/es/menu/interface";

import styles from "./MenuItems.module.css";
import { menuThemes } from "../../../utils/themes";

interface MenuItemProps {
  items?: ItemType<MenuItemType>[],
  mode?: "horizontal" | "vertical",
  theme?: "dark" | "light"
}

function MenuItems({ 
  items, 
  mode="horizontal", 
  theme="dark"
} : MenuItemProps) {
  const menuItems: ItemType<MenuItemType>[] = [
    {
      key: "1",
      label: <span className={styles.menuItem}>Movies</span>,
      children: [
        {
          key: "1.1",
          label: <span>Popular</span>
        },
        {
          key: "1.2",
          label: <span>Now Playing</span>
        },
        {
          key: "1.3",
          label: <span>Upcoming</span>
        },
        {
          key: "1.4",
          label: <span>Top Rated</span>
        }
      ]
    },
    {
      key: "2",
      label: <span className={styles.menuItem}>TV shows</span>,
      children: [
        {
          key: "2.1",
          label: <span>Popular</span>
        },
        {
          key: "2.2",
          label: <span>Airing Today</span>
        },
        {
          key: "2.3",
          label: <span>On TV</span>
        },
        {
          key: "2.4",
          label: <span>Top Rated</span>
        }
      ]
    },
    {
      key: "3",
      label: <span className={styles.menuItem}>People</span>,
      children: [
        {
          key: "3.1",
          label: <span>Popular People</span>
        }
      ]
    }
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          ...menuThemes
        }
      }}
    >
      <Menu 
        className={styles.menu}
        mode={mode}
        theme={theme}
        items={items || menuItems}
      />
    </ConfigProvider>
  );
}

export default MenuItems;