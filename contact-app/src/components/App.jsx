import React from "react";
import Header from "./Header";
import ContactCard from "./ContactCard";
import Diary from "./ContactList";

const ContactBody = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
}

function App() {
    return (
        <>
            <Header />
            <div style={ContactBody}>
                {Diary.map((contact) => (
                <ContactCard key={contact} image={contact.picture} username={contact.name} cell={contact.cell} />
                ))}

            </div>
        </>
    );
}

export default App;
