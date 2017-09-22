import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  componentWillMount(){
    console.log(this.props.newTweets)
    this.state.tweets = this.props.newTweets
  }
  // TODO: shouldComponentUpdate()
  shouldComponentUpdate(nextProps){
    return(nextProps.newTweets.length !==  0)
  }
  // TODO: componentWillReceiveProps()
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    console.log(this.state.tweets)
    this.setState({
      tweets: nextProps.newTweets.concat(this.state.tweets)
    })
    console.log(this.state.tweets)
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
