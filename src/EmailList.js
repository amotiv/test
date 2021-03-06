import React, { useEffect, useState } from "react";
import InboxIcon from "@material-ui/icons/Inbox";
import "./EmailList.css";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
        </div>
        <div className="emailList__settingsRight">
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Main" color="red" selected />
      </div>

      <div className="emailList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp,avatar } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            avatar={avatar}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>
    </div>
  );
}

export default EmailList;