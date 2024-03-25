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
    }, []);

    useEffect(() => {
        if (userId) {
            const userBilgi = users.find(us => us.id.toString() === userId);
            setUserInfo(userBilgi);
        }
    }, [userId]);

    const handleUserName = e => {
        setUserId(e.target.value);
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
                    {userInfo && (
                        <Card style={{ width: "18rem" }}>
                            <Card.Img
                                variant="top"
                                src="https://cdn0.iconfinder.com/data/icons/education-421/48/83_student_avatar_gender_school_female_male_love-512.png"
                            />
                            <Card.Body>
                                <Card.Title>{userInfo.name}</Card.Title>
                                <Card.Text>

                                    Adres: {userInfo.address.street + " " + userInfo.address.suite}<br /> 
                                    {userInfo.address.city}<br /> 
                                    {userInfo.address.zipcode}<br /> 
                                    Konum: {userInfo.address.geo.lat+"-"+userInfo.address.geo.lng}
                                   
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">                           
                                <ListGroup.Item>E-Mail: {userInfo.email}</ListGroup.Item>
                                <ListGroup.Item>Telefon: {userInfo.phone}</ListGroup.Item>
                                <ListGroup.Item>Web: {userInfo.website} </ListGroup.Item>                                
                                <ListGroup.Item>Firma: {userInfo.company.name} </ListGroup.Item>                               
                            </ListGroup>
                           
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FetchApi;
