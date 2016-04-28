import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import mui from 'material-ui';

// var ThemeManager = new mui.Styles.ThemeManager();
// var Colors = mui.Styles.Colors;
var AppBar = mui.AppBar;

class App extends React.Component{
  constructor(){
    super();

  }
  render(){
    return(
      <div>
        <AppBar title="React Stack Chat App" />
        <div style={{
            display:'flex',
            flexFlow:'row wrap',
            maxWidth: 1200,
            width:'100%',
            margin: '30px auto 30px'
          }}>
            <ChannelList/>
            <MessageList/>
        </div>
        <MessageBox />
      </div>
    );
  }
}

export default App;
