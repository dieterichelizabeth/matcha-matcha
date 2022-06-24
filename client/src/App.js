import React from "react";
import { Button } from "antd";
import "./App.css";
import { Card } from "antd";
const { Meta } = Card;

function App() {
  return (
    <div>
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
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
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </div>
  );
}

export default App;
