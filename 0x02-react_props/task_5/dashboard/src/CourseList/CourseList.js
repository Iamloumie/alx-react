import React from 'react';
import "./CourseList.css";
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

export default function CourseList({ listCourses }) {
    return (
        <table id="CourseList">
            <thead>
                <CourseListRow textFirstCell="Available courses" textSecondCell={null} isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                {listCourses.length > 0 ? (
                    listCourses.map(({ id, name, credit }) => <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />)
                ) : (
                    <CourseListRow textFirstCell="No available course yet" textSecondCell={null} isHeader={false} />
                )}
            </tbody>
        </table>
    );
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
    listCourses: [],
};