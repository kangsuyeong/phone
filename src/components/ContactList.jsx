import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const keyword = useSelector((state) => state.keyword);
  const contactList = useSelector((state) => state.contactList);
  const [selectedList, setSelectedList] = useState([]);

  useEffect(() => {
    if (keyword == "") {
      setSelectedList(contactList);
    } else {
      let list = contactList.filter((item) => item.name.includes(keyword));
      setSelectedList(list);
    }
  }, [keyword, contactList]);

  return (
    <div>
      <SearchBox />
      {selectedList.map((item, index) => (
        <ContactItem item={item} key={index} />
      ))}
    </div>
  );
};

export default ContactList;
