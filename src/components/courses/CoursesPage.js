import React from "react";
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {

  componentDidMount () {
    this.props.actions.loadCourses().catch(error=>{
      console.log('loading courses failed. '+ error);
    })
  }
  render () {
    return (
      <>
        <h3>Courses</h3>
        {
          this.props.courses.map(course => (
            <div key={course.title}>{course.title}</div>
          ))
        }
      </>
      );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    courses: state.courses,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);