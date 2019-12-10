import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {UserContext} from "../../context/UserContext";
import DareCardStyling from "../../styling/DareCard.module.css"
import {Card} from "react-bootstrap";

export default function PreCard({row}) {
    const {user} = useContext(UserContext);
    return (
        <div className={`${DareCardStyling.card} ${DareCardStyling.pre_card}`}>
            <Link to={`${user.id}/dare/${row.id}`} className={DareCardStyling.dare_link}>
                <Card className={DareCardStyling.card_top}>
                    <Card.Body>
                        <h2>{row.title}</h2>
                        <p>Progress:{row.progress}</p>
                    </Card.Body>
                    <Card.Footer className={DareCardStyling.card_footer}>
                        <span>Deadline:{row.deadline}</span>
                    </Card.Footer>
                </Card>
            </Link>
        </div>
    )
}