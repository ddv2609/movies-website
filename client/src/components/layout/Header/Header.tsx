import { Col, Row } from "antd";
import styles from "./Header.module.css";
import MenuItems from "../MenuItems/MenuItems";
import Utilities from "../Utilities/Utilities";

function Header() {
  return (
    <header className={styles.header}>
      <Row justify={"space-between"}>
        <Col>
          <Row align={"middle"} gutter={[12, 0]}>
            <Col>
              <div className={styles.trademark}>
                <img src="/logo192.png" alt="Logo Website" />
                <span>CINEMA</span>
              </div>
            </Col>

            <Col>
              <MenuItems />
            </Col>
          </Row>
        </Col>

        <Col>
          <Utilities />
        </Col>
      </Row>
    </header>
  );
}

export default Header;
