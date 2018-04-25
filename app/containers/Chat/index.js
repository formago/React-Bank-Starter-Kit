import React, {Component} from 'react'
import {render} from 'react-dom'

import {Launcher} from './src'

class Chat extends  React.Component  {

    constructor() {
      super();
      this.state = {
        messageList: [{
            author: 'them',
            type: 'text',
            data: {
              text: 'Hello, how are you? I can help you!'
            }
          },          
          {
            author: 'me',
            type: 'emoji',
            data: {
              code: 'someCode'
            }
          }]
      };
    }
  
    _onMessageWasSent(message) {
      this.setState({
        messageList: [...this.state.messageList, message]
      })
    }
  
    _sendMessage(text) {
      if (text.length > 0) {
        this.setState({
          messageList: [...this.state.messageList, {
            author: 'them',
            type: 'text',
            data: { text }
          }]
        })
      }
    }
  
    render() {
      return (<div>
        <Launcher
          agentProfile={{
            teamName: 'bank support team',
            imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
          }}
          onMessageWasSent={this._onMessageWasSent.bind(this)}
          messageList={this.state.messageList}
          showEmoji
        />
      </div>)
    }
  }

  export default Chat;