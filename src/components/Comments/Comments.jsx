import React, { useContext, useEffect } from "react";
import { useAuth } from "../../contexts/authContext";

import { commentsContext } from "../../contexts/commentsContext";
import CommItem from "./CommItem";

import { List } from "antd";

const Comments = ({id}) => {
    const {user: {email}} = useAuth();
  const { getComments, deleteComment, comments } = useContext(commentsContext);
  console.log("comments", comments);
  useEffect(() => {
    getComments(id);
  }, [id]);
    return (
        < div style={{ display:"flex"}}>
        <div style={{textAlign:"center", width:"50%"}}>
            <h3 style={{marginTop:"20px"}}>
                Reviews <img style={{width:"50px"}} src="https://cdn-icons.flaticon.com/png/512/2065/premium/2065224.png?token=exp=1640457973~hmac=f503415aaa15fed65c320bd97b517549" alt="" />
            </h3>
             <List
      className="demo-loadmore-list items-list"
      itemLayout="horizontal"
      dataSource={comments}
      renderItem={(item) => (
        <List.Item
          actions={email === "burul.baktybekova05@gmail.com"?[
            <button key="list-loadmore-edit" onClick={() => deleteComment(item.id, id)}>
              delete
            </button>,
          ] : null}
        >
          <List.Item.Meta
            title={
            <p>
                {<p>{{email} ? <span> {item.email}</span> : <span>Гость</span>} </p>}
                {item.comment}
            </p>
        }
          />
        </List.Item>
        
      )}
    />
    <CommItem />
     </div>
        </div>
    );
};

export default Comments;