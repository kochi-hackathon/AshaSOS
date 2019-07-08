import React from 'react';
import { Form } from 'react-bootstrap'
import { Col, Row, Hero } from 'srx';
import { Button, Card, Elevation } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      latitude: '',
      longitude: '',
    }
    this.onhit = this.onhit.bind(this);
  }

  onhit() {
    this.setState({
      visible: false
    })
  }


  getMyLocation() {
    const location = window.navigator && window.navigator.geolocation;

    if (location) {
        location.getCurrentPosition((position) => {
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                source: position.coords.latitude +","+position.coords.longitude
            })
        }, (error) => {
            this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
        })
    }
  }

  componentDidUpdate(){
    this.getMyLocation();
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.visible ?
          <div>
            <div

            >
              <Hero
                align="center"
                bg={{
                  gradient: 'red'
                }}
                elevation={0}
                paragraph=" Please fill in the form below to log into the network and get in touch with the relief authorities."
                title="Asha SOS Service"
              />
            </div>


            <Card interactive>
              <div style={{ marginLeft: '10%' }}>
                <Row>
                  <Form>
                    <Form.Row>
                      <Form.Group >
                        <p>Name</p>
                        <Form.Control type="text" placeholder="Enter Your Name" />
                      </Form.Group>

                    </Form.Row>
                    <Form>
                      {['checkbox'].map(type => (
                        <div key={`default-${type}`} className="mb-3" style={{ marginTop: "10%" }}>
                          <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={`Check this box to give permission to track your location`}
                          />
                        </div>
                      ))}
                    </Form>


                    <Form.Group controlId="formGridAddress1">
                      <p>House Number</p>
                      <Form.Control placeholder="House Number 4" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                      <p>LandMark <font color="grey">(Optional)</font></p>
                      <Form.Control placeholder="Opposite TownHall" />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridState">
                      <p>What Kind of Distress are you facing ?</p>
                      <Row>
                        <Col width={6}>
                          <Form>
                            {['checkbox'].map(type => (
                              <div key={`inline-${type}`} className="mb-3">
                                <Form.Check inline label="Flood" type={type} id={`inline-${type}-1`} />
                                <Form.Check inline label="Distress" type={type} id={`inline-${type}-2`} />
                                <Form.Check inline label="Need FirstAid" type={type} id={`inline-${type}-3`} />

                              </div>
                            ))}
                          </Form>
                        </Col>
                        <Col width={6}>
                          <Form>
                            {['checkbox'].map(type => (
                              <div key={`inline-${type}`} className="mb-3">
                                <Form.Check inline label="Trapped" type={type} id={`inline-${type}-1`} />
                                <Form.Check inline label="Need Food" type={type} id={`inline-${type}-2`} />
                                <Form.Check inline label="Alone" type={type} id={`inline-${type}-3`} />
                              </div>
                            ))}
                          </Form>
                        </Col>
                      </Row>
                    </Form.Group>
                  </Form>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <p>Enter Message <font color="grey">(Optional)</font></p>
                    <Form.Control as="textarea" />
                  </Form.Group>
                </Row>
              </div>
              <div>
                <Button type="submit" intent="success" text="Submit" onClick={this.onhit} style={{ width: "100%" }} />
              </div>
            </Card>
          </div>
          : <div

          >
            <Hero
              align="center"
              bg={{
                gradient: 'red-pink'
              }}
              elevation={0}
              paragraph="Please remain calm your help is arriving soon"
              title="Help is on the way"
            />
          </div>}
      </div>

    );
  }
}


export default App;
