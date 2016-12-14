import React from "react";

const ImageForm = () => {
  return (
    <div className="post_form_container group">
      <div className="profile_pic">
        <img src={this.profile_pic}></img>
      </div>
      <section className="post_form">
        <form className="form_content" onSubmit={this.handleSubmit}>
          <h1>{this.props.currentUser.username} ♥ </h1>
          <input type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.update("title")}
            className="post_title-input"/>
          <input type="file" id="image_input_field" name="file"
            onChange={this.update("content")}/>
        </form>
        <button className="submit_post"
                onClick={this.handleSubmit}>Post</button>
        <button className="close_post_form" onClick={this.resetDisplay}>Close</button>
      </section>
    </div>
  );
};
