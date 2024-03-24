import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";

function FetchApi() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => setUsers(json));
  });
  useEffect(
    () => {
      if (userId) {  
        const userBilgi = users.find(us => us.id === userId);
        setUserInfo(userBilgi);
      
      }
    },
    [userId]
  );

  const handleUserName = e => {
    setUserId(e.target.value);
    const userBilgi = users.filter(us => us.id === e.target.value);
    console.log(userBilgi);
  };

  return (
    <div className="container-xl">
      <div className="row">
        <div className="col-4">
          <ListGroup>
            <ListGroup.Item>Kullanıcılar</ListGroup.Item>
            {users.map(user => {
              return (
                <ListGroup.Item
                  key={user.id}
                  value={user.id}
                  action
                  onClick={e => handleUserName(e)}
                >
                  {user.username}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
        <div className="col-8">
          {userId &&
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://cdn0.iconfinder.com/data/icons/education-421/48/83_student_avatar_gender_school_female_male_love-512.png"
              />
              <Card.Body>
                <Card.Title>
                  null
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>}
        </div>
      </div>
    </div>
  );
}

export default FetchApi;
