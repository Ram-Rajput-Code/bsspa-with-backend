import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";

const data = [
  {
    title: "SWAMI BUDHANANDA JI MAHARAJ (FOUNDER OF SCHOOL)",
    text: "Swami Buddhananda, former General Secretary, Bharat Sevashram Sangha, expired on 26th January at 3:45 p.m.. He was 92. Swamiji came in contact with Swami Pranavananda Maharaj, the great founder of Bharat Sevashram Sangha in 1940 and renounced his life. He took Sannyas in 1952. He stayed in Gujarat, Jamshedpur, Ranchi and travelled all over India and abroad to preach the message of Swami Pranavananda. He started a movement of Leprosy eradication in the East Singhbhum tribal belt and ran 4 Leprosy Hospitals and 92 Clinics in this belt and made a successful rehabilitation of the Lepers. He also made a hectic effort for the upliftment of backward class and Tribal welfare in several districts of Jharkhand by running large number of Tribal Students Homes, Charitable Dispensaries, Mobile Medical Units, Hospitals, Schools Employment generation projects etc. His efforts for the poor and downtrodden was of exceptional quality.",
    image: "/images/SwamiBuddhananda.jpg",
    reverse: false,
  },
  {
    title: "SWAMI SHIVARUPANANDA JI MAHARAJ   (SECRETARY)",
    text: "The Prophet of the age Yugacharya Srimat Swami 10. Pranavananda ji Maharaj, the founder of Bharat Sevashram Sangha, set an objective to spread man-making education along with host of other social and spiritual services to the nation. B.S.S. Parnavananda Academy at Raipur run By The Bharat Sevashram Sangha was established with the objective set by Swami Pranavananda ji Maharaj and so has been engaged in imparting value based man making education. We strongly believe that if education does not inculcate values with a view to build character it is no education at all. We sincerely try to render education by making an excellence blend of modern methodology with Indian Cultural heritage. We strongly belive that each child is an individual with a dream and so this school certainly helps the child to realize his/her dream, thereby affirming the ultimate goodness of man. B.S.S. Parnavananda Academy has been trying to release unlocked potential in every child in scholastic as well as co-scholastic areas. I take the opportunity to express my sincere thanks to the parents and guardians who have reposed trust on us and supported our philosophy on education. I believed that more number of education concerned people come forward to strengthen our hands in imparting value based character building as well as right career building education to meet the need of our nation.",
    image: "/images/SWAMISHIVARUPANANDAJIMAHARAJ.jpg",
    reverse: true,
  },
];

const FoundersMaharajJi = () => {
  return (
    <Container>
      {data.map((item, index) => (
        <Row key={index} className="my-4">
          <Col
            xs={12}
            md={6}
            className={`d-flex align-items-center ${
              item.reverse ? "order-md-2" : ""
            }`}
          >
            <Typography variant="b2">
              {" "}
              <span>
                <h5>{item.title}</h5>
              </span>{" "}
              {item.text}{" "}
            </Typography>
          </Col>
          <Col
            xs={12}
            md={6}
            className={`d-flex justify-content-center ${
              item.reverse ? "order-md-1" : ""
            }`}
          >
            <img
              src={item.image}
              alt="example"
              className="img-fluid"
              style={{ borderRadius: "4px" }}
            />
          
          </Col>
       
        </Row>
           
      ))}
        
    </Container>
    
  );
};

export default FoundersMaharajJi;
