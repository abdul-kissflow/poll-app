import { Layout } from "antd";
import { Poll } from "../components/poll";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";

const { Header, Content } = Layout;

export function Report() {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
      console.log("Current data: ", doc.data());
      const list = doc.data().reduce((acc, curr) => {
        acc.push(...curr.reponse);
        return acc;
      }, []);

      let graphData = list.reduce((acc, curr) => {
        if (acc[curr]) {
          acc[curr] += 1;
        } else {
          acc[curr] = 1;
        }

        return acc;
      }, {});
      setGraphData(graphData);
    });
  }, []);

  console.log("report", graphData);

  return (
    <Layout
      style={{
        display: "grid",
        gridTemplateRows: "1fr",
        gridTemplateColumns: "1fr",
      }}
    >
      <Header style={{ display: "flex", alignItems: "center" }}>
        <p style={{ color: "#ffffff" }}>Create</p>
      </Header>
      <Content style={{ padding: "20px 48px", flex: 1 }}>
        <div
          style={{
            minHeight: "280px",
            padding: "24px",
            borderRadius: "4px",
          }}
        >
          <Poll
            mode="report"
            // name={name}
            // options={options}
            // type={type}
            // onTypeChange={setType}
            // onAddOptions={onAddOptions}
          />
        </div>
      </Content>
    </Layout>
  );
}
