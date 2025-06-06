import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const headerStyle = { backgroundColor: "#deb5b545"};
  const rowStyle = { backgroundColor: "#f5f5f5ab"};

  const listRowStyles = StyleSheet.create({
    thcenter: {
      borderBottom: "1px solid gray",
      margin: 0,
      padding: 0,
      textAlign: "center",
    },

    th: {
      borderBottom: "1px solid gray",
      margin: 0,
      padding: 0,
      textAlign: "left",
    },

    td: {
      paddingLeft: 3
    }
  });

  const selectedStyle = isHeader ? headerStyle : rowStyle;

  return (
    <tr style={selectedStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2} className={css(listRowStyles.thcenter)}>{textFirstCell}</th>
        ) : (
          <>
            <th className={css(listRowStyles.th)}>{textFirstCell}</th>
            <th className={css(listRowStyles.th)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(listRowStyles.td)}>{textFirstCell}</td>
          <td className={css(listRowStyles.td)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};