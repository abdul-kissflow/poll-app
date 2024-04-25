import { Button, Layout } from "antd";
import { Poll } from "../components/poll";
import { useState } from "react";
import { createPoll } from "../firebase";
import { getAuth } from "firebase/auth";
import { auth } from "../firebase/config";

const { Header, Content } = Layout;

export function Creation() {
  const [options, setOptions] = useState([
    { id: 1, name: "Beach", count: 2 },
    { id: 2, name: "Netflix", count: 3 },
    { id: 3, name: "Sleep", count: 5 },
  ]);
  const [type, setType] = useState("single");
  const [name, setName] = useState("");

  function onAddOptions() {
    setOptions((options) => {
      const newOptions = options;
      newOptions.push({ id: options.length + 1, name: "" });
      return newOptions;
    });
  }

  const handleSignOut = () => {
    auth.signOut();
  };

  function onOptionsUpdate(opt, value) {
    setOptions((options) => {
      return options.map((item) => {
        if (item.id === opt.id) {
          item.name = value;
        }
        return item;
      });
    });
  }

  function onCreate() {
    const auth = getAuth();
    createPoll(auth.currentUser.uid, { name, type, options }).then(() =>
      console.log("Added a poll")
    );
  }
  console.log("data", name, type, options);
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
        <button
          style={{ position: "absolute", right: "15px" }}
          onClick={handleSignOut}
        >
          Logout
        </button>
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
            name={name}
            options={options}
            type={type}
            onTypeChange={setType}
            onAddOptions={onAddOptions}
            onNameChange={setName}
            onOptionsUpdate={onOptionsUpdate}
          />
        </div>
        <Button onClick={onCreate}>Create</Button>
      </Content>
    </Layout>
  );
}
