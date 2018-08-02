
import React, { Component } from 'react';




class Time extends Component {
constructor()
{
super()

this.state = 
{
  date: new Date(),
 second: this.getTime().second,
 minutes: this.getTime().minutes,
 hours : this.getTime().hours,


}

}





getTime =  () =>
{
var d = new Date();
var second = d.getSeconds();
var minutes = d.getMinutes();
var hours = d.getHours();
return {

second: second,
minutes: minutes,
hours: hours,

};
}


	
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }


render() 
{
return <div className='center ma'> 
{this.state.date.toLocaleTimeString('en-US')}

</div>

}
}
export default Time;

