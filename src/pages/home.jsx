import { Button, Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Layout } from "antd";

const { Header, Content } = Layout;

export function Home() {
  return (
    <Layout
      style={{
        display: "grid",
        gridTemplateRows: "1fr",
        gridTemplateColumns: "1fr",
      }}
    >
      <Header style={{ display: "flex", alignItems: "center" }}>
        <p style={{ color: "#ffffff" }}>Home</p>
      </Header>
      <Content style={{ padding: "20px 48px", flex: 1 }}>
        <div
          style={{
            background: "lightgray",
            minHeight: "280px",
            padding: "24px",
            borderRadius: "4px",
          }}
        >
          <Button>
            <PlusOutlined /> Create
          </Button>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Card.Meta
              title="Europe Street beat"
              description="www.instagram.com"
            />
          </Card>
        </div>
      </Content>
    </Layout>
  );
}
