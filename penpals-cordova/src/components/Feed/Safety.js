import React from "react";
import {
  Grid,
  Icon,
  Image,
  Segment,
  Sidebar,
  Card,
  Button,
} from "semantic-ui-react";
import logo from "../../imgs/logo.png";
import { getUserInfo } from "../../store/user";
import SideBar from "../Search/Sidebar";

import { connect } from "react-redux";
class Safety extends React.Component {
  constructor() {
    super();
    this.state = {
      emergency_number: "",
    };
  }
  componentDidMount = async () => {
    await this.props.getUserInfo(this.props.match.params.id);
  };

  onCall = (event) => {
    const countryOptions = {
      "New York": "911",
      London: "112",
      "New Jersey": "911",
      Paris: "112",
      Athens: "112",
      Rejavik: "112",
      Rome: "112",
      Boston: "911",
      "Los Angeles": "911",
      Denver: "911",
      Amsterdam: "112",
      Oslo: "112",
      "Hong Kong": "112",
      Singapore: "999",
      Syndey: "000",
      Vienna: "112",
      Malaga: "112",
      Bahamas: "919",
      Stockholm: "112",
      Brussels: "112",
      "Virgin Islands": "911",
    };
    this.setState({
      emergency_number: countryOptions[event.target.name],
    });
    console.log("STAAAA", this.state.emergency_number);
  };

  render() {
    return (
      <>
        <Image src={logo} centered size="small" style={{ top: 15 }} />
        <br />
        <br />
        <Card centered>
          <Grid columns={1}>
            <Grid.Column>
              <Sidebar.Pushable as={Segment}>
                <SideBar sidebarId={this.props.match.params.id} />
                <Image
                  style={{
                    width: 50,
                    borderRadius: "60%",
                  }}
                  src={this.props.user.imgUrl}
                  centered
                />
                <div
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    margin: 8,
                    padding: 6,
                    width: "95%",
                    fontWeight: "bold",
                  }}
                  as="h3"
                  block
                >
                  {this.props.user.name}'s Safety
                </div>
                <Card centered style={{ padding: 20, width: "80%" }}>
                  <h3 style={{ textAlign: "center", color: "#4183c4" }}>
                    {" "}
                    Emergency in...{" "}
                  </h3>
                  <Button
                    color="red"
                    name={this.props.user.fromCity}
                    onClick={this.onCall}
                  >
                    <Icon color="white" name="home" />
                    {this.props.user.fromCity}{" "}
                  </Button>
                  <Button
                    color="red"
                    name={this.props.user.toCity}
                    onClick={this.onCall}
                  >
                    <Icon color="white" name="plane" />
                    {this.props.user.toCity}{" "}
                  </Button>

                  <div>
                    {this.state.emergency_number != 0 ? (
                      <h4 style={{ textAlign: "center", padding: 10 }}>
                        <a href="tel://+7323205306">Call Here: </a>
                        {this.state.emergency_number}
                      </h4>
                    ) : (
                      <></>
                    )}
                  </div>
                </Card>
              </Sidebar.Pushable>
              <br />
            </Grid.Column>
          </Grid>
        </Card>
      </>
    );
  }
}
const mapToState = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: (id) => dispatch(getUserInfo(id)),
  };
};
export default connect(mapToState, mapDispatchToProps)(Safety);
