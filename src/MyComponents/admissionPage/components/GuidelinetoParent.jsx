import React from "react";
import { Container, Card, CardBody } from "reactstrap";

const recommendations = [
  "In order that your ward develops into a respectable citizen you must develop a respect for school, teacher and learning.",
  "Do regularly spend quality time with your ward.",
  "Any change in address or telephone number must be intimated to school office at the earliest.",
  "Turning up late to the school is undesirable. Please ensure that your ward reaches school on or before reporting time. Late comers will be sent back home.",
  "Motivate your child to maintain a proper code of conduct.",
  "No sharp objects namely blade, knife, scissors, nail cutters, needle etc. should be sent to school to ensure safety.",
  "Bringing of valuable articles like gold, silver jewelry, facial, make up is strictly prohibited in school.",
  "Application of mehendi should be restricted to inner side of palm only and colouring of hair is prohibited.",
  "Parents of pre-primary section should ensure to attach a neat handkerchief regularly. Also make sure that a spare set of dress (T-shirt & Pant) is always kept in your ward's school bag.",
  "See that your ward carries books / exercise books according to the time table for that day. No extra books are allowed.",
  "Visit the school on the specific day (PTM) to remain in touch with the teachers even though there is no problem with your child.",
  "Encourage your ward to take a balanced interest in studies, co-curricular activities and sports.",
  "Students driving to school: Please do not permit your children coming to school on two wheelers without valid driving license. This is very serious, illegal and unsafe practice. For any untoward consequence concerned parents / guardians will be held responsible. It is mandatory to wear a helmet.",
  "Please also check that your ward does not carry electronic gadgets like I-pods, cell phone, camera etc. In case any student is found with any of those items – those will not only be confiscated but also a heavy fine will be imposed additionally.",
  "When the children return home from the school, dear parents please check the contents of your ward's school bag. If any item not belonging to him is found, the same should be submitted to the school office.",
  "Please do not send your ward to school if he/she is sick.",
  "Please do not send your ward to school, if school tariff is not cleared within given time.",
  "Very important: once students enter the school campus to attend their classes, no one can go out of the school campus during school hours without written permission obtained by the school Principal. Violation of this rule will be viewed seriously and appropriate action (may even lead to expulsion from the school) will be taken.",
];

const GuidelinetoParents = () => {
  return (
    <Container className="mt-4 mb-4">
      <Card className="p-3 shadow">
        <CardBody>
          <h4 className="text-center text-success">
            Recommendations to Parents / Guardian
          </h4>
          <ul className="list-group list-group-flush">
            {recommendations.map((rec, index) => (
              <li key={index} className="list-group-item">
                {index + 1}. {rec}
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Container>
  );
};

export default GuidelinetoParents;
