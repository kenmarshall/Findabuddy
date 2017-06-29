class CreateRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: '',
      description: '',
      postDateTime: '',
      gender: '',
      minAge: '',
      maxAge: '',
      zipCode: '',
      activityVerb: '',
      activityNoun: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    //console.log('event.target.value: ', event.target.value);
    var name = event.target.name;
    //console.log('target.name: ', event.target.name);

    this.setState({
      [name]: event.target.value
    });

    //console.log('this.state: ', this.state)
  }

  submitBuddyRequest(e) {
    e.preventDefault();
    $.ajax({
      url: 'http://localhost:3000/buddyRequest',
      type: 'POST',
      data: this.state,
      
      success: function() {
        console.log('success');

        // this.setState({
        //   postTitle: '',
        //   description: '',
        //   postDateTime: '',
        //   gender: '',
        //   minAge: '',
        //   maxAge: '',
        //   zipCode: '',
        //   activityVerb: '',
        //   activityNoun: ''
        // });

        $.ajax({
          url: 'http://localhost:3000/buddyRequest',
          type: 'GET'
        })
        .done(function(response) {
          this.props.handleSubmitRequest(response);
          this.props.showResults();
        }.bind(this))
        .fail(function(err){
          console.log('ERROR fetching', err)
        });
      }.bind(this),
      error: function() {
        console.log('failed to post buddy request');
      }
    });
  }

/*
    app.startSpinner();
    $.ajax({
      url: app.server,
      type: 'POST',
      data: message,
      success: function() {
        app.$message.val('');
        app.fetch();
      },
      error: function (error) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', error);
      }
    });

*/




  //**************need to change htmlFors****************//
  render() {
    return (
    	<form className="form-horizon"> 
        <div className="form-group">
          <label htmlFor="noun">Post Title</label>
          <input type="text" value={this.state.postTitle} className="form-control" placeholder="Enter a Post Title" name="postTitle" onChange={this.handleInputChange}/>
        </div>    
        <div className="form-group">
          <label htmlFor="noun">Event Description</label>
          <textarea type="text" value={this.state.description} className="form-control" rows="3" placeholder="Enter a Description of the Event" name="description" onChange={this.handleInputChange}></textarea>
        </div>    
        <div className="form-group">
          <label htmlFor="noun">Event Date/Time</label>
          <input type="text" value={this.state.postDateTime} className="form-control" placeholder="Enter the Date/Time of the Event" name="postDateTime" onChange={this.handleInputChange}/>
        </div>   
        <div className="form-group">
          <label htmlFor="noun">Gender</label>
          <select className="form-control" name="gender" onChange={this.handleInputChange} defaultValue="No Preference">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="No Preference">No Preference</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="noun">Minimum Age</label>
          <input type="text" value={this.state.minAge} className="form-control" placeholder="Enter Minimum Preferred Buddy Age" name="minAge" onChange={this.handleInputChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="noun">Maximum Age</label>
          <input type="text" value={this.state.maxAge} className="form-control" placeholder="Enter Maximum Preferred Buddy Age" name="maxAge" onChange={this.handleInputChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="noun">Zip Code</label>
          <input type="text" value={this.state.zipCode} className="form-control" placeholder="Enter Preferred Buddy Zip Code" name="zipCode" onChange={this.handleInputChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="noun">Activity Verb</label>
          <input type="text" value={this.state.activityVerb} className="form-control" placeholder="Enter a Verb" name="activityVerb" onChange={this.handleInputChange}/>
        </div>       
        <div className="form-group">
          <label htmlFor="noun">Activity Noun</label>
          <input type="text" value={this.state.activityNoun} className="form-control" placeholder="Enter a Noun" name="activityNoun" onChange={this.handleInputChange}/>
        </div>     

        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default" onClick={this.submitBuddyRequest.bind(this)}>Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

window.CreateRequest = CreateRequest;

/* John's
	user: String,
	gender: String,
	age: Number,
	zipCode: Number,
  activityNoun: String,
  activityVerb: String,
	postTitle: String,
  postDateTime: String,
	description: String
*/



//POST Request Create Activity

/*var activityRequest = {
  User: this.requestUser,
  ActivityNoun: this.reauestActivityNoun,
  AcvtivityVerb: this.requestAactivityVerb,
  Zip: this.zipCode,
  ActivityDate: this.requestDate,
  ActivityTime: this.requestTime,
  PostDate: this.requestPostDate,
  PostTime: this.requestPostTime,
  Description:  this.requestDescription

}*/