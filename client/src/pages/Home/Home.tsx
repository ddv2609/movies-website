import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { default as HomeHeader } from "../../components/layout/Header/Header";

function Home() {
  return (
    <Layout>
      <Header>
        <HomeHeader />
      </Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default Home;