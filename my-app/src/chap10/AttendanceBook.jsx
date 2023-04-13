import React from "react";

const students = [
    {
        name: "Inje",
    },
    {
        name: "Jin",
    },
    {
        name: "Jung",
    },
    {
        name: "Jane",
    },
];

function AttendanceBook(props) {
    return (
        <ui>
            {students.map((student) => {
                return <li>{student.name}</li>;
            })}
        </ui>
    );
}

export default AttendanceBook;