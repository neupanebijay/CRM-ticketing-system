import PropTypes from 'prop-types';
import React from 'react';
// import './TicketConversation.style.css';
import './TicketConversation.style.css';

export const TicketConversation = ({msgs}) => {
    if(!msgs) return null;
    return msgs.map((msg, i)=>(
        <div key={i} className="message-history mt-4">
            <div className="send-list">
                <div className="sender">
                    {msg.messageBy}
                </div>
                <div className="client">
                    {msg.date}
                </div>
            </div>
            <div className="message-area">
                {msg.message}
            </div>             
        </div>
    ));
}


TicketConversation.protoTypes ={
    msgs: PropTypes.array.isRequired
}