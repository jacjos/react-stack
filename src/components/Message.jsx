import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

class Message extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <ListItem leftAvatar={<Avatar src="https://lh3.googleusercontent.com/-sbwXYsTMvc4/AAAAAAAAAAI/AAAAAAAAAAA/ADhl2ypeof6Htlf-KRFxljCYqQHa7bhoOA/s32-c-mo/photo.jpg" />}>
        {this.props.message}
      </ListItem>
    );
  }
}

export default Message;
