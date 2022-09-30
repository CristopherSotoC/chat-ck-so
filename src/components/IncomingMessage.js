import React from 'react'
import { horaMes } from '../helpers/horaMes'

export const IncomingMessage = ({ msg}) => {


    horaMes( msg.createdAt)
    return (
        <div className="incoming_msg">
            <div className="incoming_msg_img">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png" alt="sunil" />
            </div>
            <div className="received_msg">
                <div className="received_withd_msg">
                    <p>{ msg.mensaje}</p>
                    <span className="time_date"> {horaMes(msg.createdAt)}</span>
                </div>
            </div>
        </div>
    )
}
