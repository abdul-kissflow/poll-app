import { Button, Layout } from "antd";
import { Poll as PollComp } from "../components/poll";
import { useEffect, useState } from "react";
import { createPoll, getPollDoc } from "../firebase";
import { getAuth } from "firebase/auth";
import { useParams } from "react-router-dom";

const { Header, Content } = Layout;

export function Poll() {
  const { pollId } = useParams();

  const [data, setData] = useState([]);
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    getPollDoc(pollId).then((data) => {
      setData(data);
    });
  }, [pollId]);

  function onSelection() {}

  function onSubmit() {
    // const auth = getAuth();
    // createPoll(auth.currentUser.uid, { name, type, options }).then(() =>
    //   console.log("Added a poll")
    // );
  }

  const { name, type, options } = data || {};
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
          <PollComp
            mode="runtime"
            name={name}
            options={options}
            type={type}
            onSelection={onSelection}
          />
        </div>
        <Button onClick={onSubmit}>Submit</Button>
      </Content>
    </Layout>
  );
}
