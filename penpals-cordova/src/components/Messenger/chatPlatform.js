import React from "react";
import { connect } from "react-redux";
import { Segment, Input, Button, Image } from "semantic-ui-react";
import { getUserInfo } from "../../store/user";
import { getAllPlans } from "../../store/plan";
import { createMesssage } from "../../store/posts";
import { getMesssages } from "../../store/messages";

class ChatPlatform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messages: [],
    };
  }
  componentDidMount = async () => {
    await this.props.getAllPlans(this.props.userId);
    await this.props.getMesssages(this.props.postId);
    let all_messages = [this.props.messages].map((message) => {
      return message;
    });
    await this.setState({
      messages: all_messages[0],
    });
    await this.props.getUserInfo(this.props.userId);
  };

  handleChange = async (event) => {
    await this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleMessage = async () => {
    await this.props.createMesssage(this.props.postId, {
      message: this.state.message,
      postId: this.props.postId,
      senderId: this.props.userId,
    });
    await this.props.getMesssages(this.props.postId);
    let current_messages = [this.props.messages].map((message) => {
      return message;
    });
    await this.setState({
      messages: current_messages[0],
    });
  };

  render() {
    let imgStyle1 = {
      width: 30,
      height: 30,
      borderRadius: 60,
      left: 88,
      top: -25,
    };
    let imgStyle2 = {
      width: 30,
      height: 30,
      borderRadius: 60,
      left: 5,
      top: -15,
    };
    return (
      <div
        style={{
          textAlign: "center",
          position: "absolute",
          top: 105,
          width: 300,
          backgroundColor: "white",
          height: 450,
          left: 20,
        }}
      >
        <div
          style={{
            overflow: "auto",
            maxHeight: "44.5vh",
          }}
        >
          {this.state.messages.map((chat) => (
            <>
              {chat.sender.id == this.props.userId ? (
                <div
                  key={chat.id}
                  style={{
                    position: "relative",
                    overflow: "auto",
                    maxWidth: "17.5vh",
                    left: 135,
                    height: 50,
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      top: 10,
                      borderRadius: 30,
                      padding: 10,
                      backgroundColor: "#38c272",
                    }}
                  >
                    {chat.message}
                  </div>
                  <Image src={chat.sender.imgUrl} style={imgStyle1} />
                </div>
              ) : (
                <div
                  key={chat.id}
                  style={{
                    position: "relative",
                    overflow: "auto",
                    width: "43%",
                    height: 50,
                  }}
                >
                  <div
                    key={chat.id}
                    style={{
                      position: "relative",
                      top: 10,
                      height: 40,
                      borderRadius: 30,
                      backgroundColor: "#5aabe6",
                    }}
                  >
                    {chat.message}
                    <Image src={chat.sender.imgUrl} style={imgStyle2} />
                  </div>
                </div>
              )}
            </>
          ))}
        </div>

        <Segment
          style={{
            backgroundColor: "#B8B8B8	",
            width: 292,
            left: -21,
            position: "absolute",
            bottom: 0,
          }}
        >
          <Input
            inverted
            placeholder="Type Message..."
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
          />
          <Button
            style={{ position: "relative", top: -1 }}
            onClick={this.handleMessage}
          >
            Enter
          </Button>
        </Segment>
      </div>
    );
  }
}
const mapToState = (state) => ({
  messages: state.messages,
  message: state.message,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPlans: (id) => dispatch(getAllPlans(id)),
    getUserInfo: (id) => dispatch(getUserInfo(id)),
    createMesssage: (id, message) => dispatch(createMesssage(id, message)),
    getMesssages: (postId) => dispatch(getMesssages(postId)),
  };
};

export default connect(mapToState, mapDispatchToProps)(ChatPlatform);
