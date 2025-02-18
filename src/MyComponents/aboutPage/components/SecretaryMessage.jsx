import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";

const data = [
  {
    title: "SWAMI SHIVARUPANANDA JI MAHARAJ   (SECRETARY)",
    text: "The Prophet of the age Yugacharya Srimat Swami 10. Pranavananda ji Maharaj, the founder of Bharat Sevashram Sangha, set an objective to spread man-making education along with host of other social and spiritual services to the nation. B.S.S. Parnavananda Academy at Raipur run By The Bharat Sevashram Sangha was established with the objective set by Swami Pranavananda ji Maharaj and so has been engaged in imparting value based man making education. We strongly believe that if education does not inculcate values with a view to build character it is no education at all. We sincerely try to render education by making an excellence blend of modern methodology with Indian Cultural heritage. We strongly believe that each child is an individual with a dream and so this school certainly helps the child to realize his/her dream, thereby affirming the ultimate goodness of man. B.S.S. Parnavananda Academy has been trying to release unlocked potential in every child in scholastic as well as co-scholastic areas. I take the opportunity to express my sincere thanks to the parents and guardians who have reposed trust on us and supported our philosophy on education. I believed that more number of education concerned people come forward to strengthen our hands in imparting value based character building as well as right career building education to meet the need of our nation.",
    image: "/images/SWAMISHIVARUPANANDAJIMAHARAJ.jpg",
  },
];

const SecretaryMessage = () => {
  return (
    <Container>
      {data.map((item, index) => (
        <Row key={index} className="my-4">
          {/* Image First on Small Screens, Second on Larger Screens */}
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-center order-1 order-md-2"
          >
            <img
              src={item.image}
              alt="example"
              style={{
                maxWidth: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
          </Col>

          {/* Text Second on Small Screens, First on Larger Screens */}
          <Col
            xs={12}
            md={6}
            className="d-flex align-items-center order-2 order-md-1"
          >
            <Typography variant="body1" textAlign="justify">
              <h5 style={{ fontWeight: "bold" }}>{item.title}</h5> {item.text}
            </Typography>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default SecretaryMessage;
