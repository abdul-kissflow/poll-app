import { Button, Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import {useHistory} from "react-router-dom";


const { Header, Content } = Layout;

export function Home() {
  const history = useHistory();
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
            margin:"20px"
          }}
        >
          <Button style={{margin:"16px"}} onClick={()=>{
history.push(`/poll/${pollId}`)
          }}>
            <PlusOutlined /> Create
          </Button>
          <Card
            hoverable
            style={{ width: 240 }}
          >
            <Card.Meta
              title="poll name"
              description="poll desc"
            />
          </Card>
        </div>
      </Content>
    </Layout>
  );
}
