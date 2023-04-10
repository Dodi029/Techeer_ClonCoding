import React from "react";
import Comment from "./\bComment";

const comments = [
    {
        name: "asd",
        comment: "hello",
    },
    {
        name: "qwe",
        comment: "world",
    },
    {
        name: "zxc",
        comment: "react",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })
            }
        </div>
    );
}

export default CommentList;