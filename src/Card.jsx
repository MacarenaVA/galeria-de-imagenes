import React from "react"
import { Card as BootstrapCard } from "react-bootstrap"

const Card = (props) => {
  return (
    <BootstrapCard style={{ width: "200px" }}>
      <BootstrapCard.Img variant="top" src={props.url} />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{props.title}</BootstrapCard.Title>
        <BootstrapCard.Text>{props.description}</BootstrapCard.Text>
      </BootstrapCard.Body>
    </BootstrapCard>
  )
}
export default Card
