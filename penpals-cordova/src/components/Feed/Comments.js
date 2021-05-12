import React from "react";
import { Grid, Segment, Image, Card, Button, Input } from "semantic-ui-react";
import { connect } from "react-redux";
import { getUserInfo } from "../../store/user";
import { getAllPlans } from "../../store/plan";
import { createComment } from "../../store/posts";
import { getComments } from "../../store/comments";

class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      comment: "",
    };
  }

  componentDidMount = async () => {
    this.props.getUserInfo(this.props.userId);
    await this.props.getComments(this.props.postId);
    let all_comments = [this.props.comments].map((comment) => {
      return comment;
    });
    await this.setState({
      comments: all_comments[0],
    });
    console.log(this.state.comments, "COM");
  };

  handleChange = async (event) => {
    await this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleComment = async () => {
    await this.props.createComment(this.props.postId, {
      comment: this.state.comment,
      postId: this.props.postId,
      commenterId: this.props.userId,
    });
    await this.props.getComments(this.props.postId);
    let current_comments = [this.props.comments].map((comment) => {
      return comment;
    });
    await this.setState({
      comments: current_comments[0],
    });
    console.log(this.state.comments, "help");
  };
  render() {
    let imgStyle1 = {
      width: 30,
      height: 30,
      borderRadius: 60,
      position: "relative",
      left: 10,
      top: -18,
      padding: 2,
    };
    return (
      <div
        style={{
          overflow: "auto",
          maxHeight: "24.5vh",
        }}
      >
        {this.state.comments.map((comment) => (
          <div style={{ overflow: "auto" }}>
            <div
              key={comment.id}
              style={{
                border: "solid 1px lightgray",
                height: 35,
                margin: 3,
              }}
            >
              {comment.comment}
              <Image src={comment.commenter.imgUrl} style={imgStyle1} />
            </div>
          </div>
        ))}

        <Segment
          centered
          color="blue"
          style={{
            backgroundColor: "#2185d0",
            display: "flex",
          }}
        >
          <Input
            inverted
            placeholder="Type Message..."
            name="comment"
            value={this.state.comment}
            onChange={this.handleChange}
            style={{ width: "60%" }}
          />
          <Button style={{ width: "50%" }} onClick={this.handleComment}>
            Enter
          </Button>
        </Segment>
      </div>
    );
  }
}
const mapToState = (state) => ({
  comments: state.comments,
  comment: state.comment,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPlans: (id) => dispatch(getAllPlans(id)),
    getUserInfo: (id) => dispatch(getUserInfo(id)),
    createComment: (id, comment) => dispatch(createComment(id, comment)),
    getComments: (postId) => dispatch(getComments(postId)),
  };
};
export default connect(mapToState, mapDispatchToProps)(Post);
