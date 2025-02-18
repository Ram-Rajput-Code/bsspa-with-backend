import React from "react";
import { Container, Card, CardBody } from "reactstrap";

const rules = [
  "Coming to school regularly is the most important discipline which a student needs to inculcate.",
  "It is compulsory for every student to be present on the reopening day after each of the vacations except for medical reasons.",
  "Cautionary notice to the student whose conduct is harmful to other students will be issued twice for rectification. If even after that indisciplinary conduct is reported against that every student, straightway T.C. will be served to that concerned student without any further notice.",
  "The school is not responsible for goods lost. It is not advisable to bring valuable articles to school.",
  "Those who are coming to school by own conveyance must reach the school at least five minutes before the first bell.",
  "The warning bell before class is a sign for all to go for assembly or to their respective classrooms. This should be done in silence. Changing of classroom between periods should be done in silence and in order.",
  "Students should show respect and reverence to the school authorities and teaching staff. They should be gentle and polite to their companions.",
  "Students are strictly forbidden to use abusive language in the school.",
  "Student will not be called to answer phone calls during class hours.",
  "Student should be habitually clean and always neatly dressed. The uniform is to be worn every day and for all the school functions, celebrations, and PTM days.",
  "No books other than textbooks or library books, magazines or papers, mobile phones, cameras, etc. may be brought to school without the principal’s permission.",
  "The principal has a right to confiscate books, newspapers, periodicals, mobile phones, cameras, and any other electronic gadgets which may be considered objectionable.",
  "Students who do not attend school on a particular day must state the reason for being absent in the school diary, which should be duly signed by their parents. In case of sickness, a proper medical certificate should be submitted.",
  "All students must take utmost care in keeping the campus clean.",
  "No students should scratch or spoil the desk, chair, benches, wall, or damage any school property. Any damage done will be made good by the one who does it.",
  "Students should not bring crackers, transistors, mobile phones, cameras, etc., to the school. Bursting of crackers is liable to lead to the expulsion of students from school.",
  "Students are not supposed to miss any teaching/games/activity period and celebration day (mentioned in the list).",
  "Since it is a co-ed school, it is expected that students behave in a manner which brings a good name to the school community and do not indulge in any anti-social activity in or outside the school."
];

const SchoolRules = () => {
  return (
    <Container className="mt-4 mb-4">
      <Card className="p-3 shadow">
        <CardBody>
          <h4 className="text-center text-primary">School Rules</h4>
          <ul className="list-group list-group-flush">
            {rules.map((rule, index) => (
              <li key={index} className="list-group-item list-group-item-primary">
                {index + 1}. {rule}
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Container>
  );
};

export default SchoolRules;
