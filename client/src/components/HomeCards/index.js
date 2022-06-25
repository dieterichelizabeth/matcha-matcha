import React from "react";
import { Card, Row, Col, Image } from "antd";

const HomeCards = () => {
  const cards = [
    {
      name: "Nourishing",
      image:
        "https://images.unsplash.com/photo-1556010656-e60700d4c0d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8emVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Sourced Ethically",
      image:
        "https://images.unsplash.com/photo-1528535661949-5dac90a11fb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8emVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Comforting",
      image:
        "https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHplbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <Row justify={"center"}>
      {cards.map((card) => (
        <Col className="gutter-row" span={7} key={card.name}>
          <Card style={{ width: "80%", margin: "20px 10%", border: "none" }}>
            {/* <p style={{ textAlign: "center" }}>{card.name}</p> */}
            <Image
              style={{
                height: "200px",
              }}
              alt="example"
              src={card.image}
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default HomeCards;
