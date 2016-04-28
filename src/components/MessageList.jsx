import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import LinearProgress from 'material-ui/lib/linear-progress';
import Firebase from 'firebase';
import _ from 'lodash';

var {Card, List} = mui;

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages : {}
    };
    this.firebaseRef = new Firebase('https://jacjos-react-stack.firebaseio.com/messages');
    this.firebaseRef.on("child_added",(msg)=>{
      if(this.state.messages[msg.key()]){
        return;
      }
      let msgVal = msg.val();
      msgVal.key = msg.key();
      this.state.messages[msgVal.key] = msgVal;
      this.setState({messages: this.state.messages});
    });//End of firebase-child-added event callback
    this.firebaseRef.on("child_removed",(msg)=>{
      var msgKey = msg.key();
      delete this.state.messages[msgKey];
      this.setState({messages: this.state.messages});
    });//End of firebase-child-removed event callback
  }//End of constructor

  render(){
    console.log("messages :"+ _.values(this.state.messages)+":");
    var messageNodes = _.values(this.state.messages).map((message) => {
      return (
        <Message message={message.message} />
      );
    });
    console.log("messageNodes ="+messageNodes+":");
    if(messageNodes == ''){
      console.log("fetching messages from firebase");
      return (
        <Card style={{
            flexGrow:2,
            marginLeft:30
          }}>
          <div style={{paddingLeft: 30, paddingRight: 30}}>
            <LinearProgress mode="indeterminate" style={{marginTop: 50}}/>
          </div>
        </Card>
      );
    }else{
      console.log("rendering msgs list");
      return (
        <Card style={{
            flexGrow:2,
            marginLeft:30
          }}>
          <List>
            {messageNodes}
          </List>
        </Card>
      );
    }

  }
}

export default MessageList;
