import React from "react";
import { Container, Card, CardBody, Row, Col } from "reactstrap";

const feesRules = [
  "Fee deposition is the responsibility of parents.",
  "Tuition fee is payable for 10 months for an academic session.",
  "Maintenance fee / admission fee should be cleared by 30th June 2022 or else late fee of Rs. 50/- per month shall be charged.",
  "Tuition fees is payable by cash or by cheque or on online mode either in advance for the whole session or monthly basis.",
  "If tuition fee is paid in advance for the whole session by 30th April 2022, only then he is entitled for 5% discount.",
  "No concession will be allowed after the due date is over. An additional discount of 25% for second child will be given in tuition fee and Rs. 1000/- discount in maintenance charge for second child.",
  "For monthly payment the tuition fee is to be deposited by 15th of every month. If the fee is deposited after the due date, late fee @ Rs.1/- per day will be charged.",
  "Fees paid by cheque if bounces back will be treated under the category of non-payment of fees. Hence payer will be liable for fine as per Rule no 7.",
  "In case the cheque bounces /returns for any reason an additional fine of 500/- will be charged because of the fine to be paid to the bank.",
  "If the fee is not deposited for consecutive two months, the name of your ward will be struck off from the school roll and this shall attract re-admission process.",
  "Clearance of all dues before the end of an academic session is a must for promotion policy.",
  "Parents are requested to kindly preserve the receipts issued by the school of fee payments. In case of emergency, the school may ask to produce the same as a proof of payment. Failing which will be considered as non-payment of fee."
];

const FeesDepositionRules = () => {
  return (
    <Container className="mt-4 mb-4">
      <Card className="p-3 shadow">
        <CardBody>
          <h4 className="text-center text-primary">Fees Deposition Rules</h4>
          <Row>
            {feesRules.map((rule, index) => (
              <Col md={6} key={index} className="mb-2">
                <div className="p-3 border rounded bg-light text-dark">
                  <strong>{index + 1}.</strong> {rule}
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default FeesDepositionRules;
