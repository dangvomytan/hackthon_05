import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const ListNote = () => {
     
     return (
          <Container>
               <Row>
                    <Col>
                         <Card style={{ width: '15rem' }}>
                              <Card.Body>
                                   <Card.Text>
                                     hello world
                                   </Card.Text>
                                   <Button variant="warning" style={{float:'right'}}>-</Button>
                              </Card.Body>
                         </Card>
                    </Col>
               </Row>
          </Container>
     )
}

export default ListNote