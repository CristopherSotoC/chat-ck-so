import React, { useContext } from 'react'
import { ChatContext } from '../context/chat/ChatContext'
import { fetchConToken } from '../helpers/fetch';
import { scrollToBottom } from '../helpers/scrollToBottom';
import { types } from '../types/types'

export const SidebarChatItem = ({ usuario }) => {
    const { chatState, dispatch } = useContext(ChatContext);
    const { chatActivo } = chatState;

    const onClick = async () => {
        dispatch({

            type: types.activarChat,
            payload: usuario.uid
        });

        // Cargar mensajes chat especifico
        const resp = await fetchConToken(`mensajes/${usuario.uid}`);


        dispatch({

            type: types.cargarMensajes,
            payload: resp.mensajes


        });
        scrollToBottom('mensajes');
    }
    return (
        <div className={`chat_list ${(usuario.uid === chatActivo) && 'active_chat'}`}
            onClick={onClick}
        >

            {/* active_chat */}
            <div className="chat_people">
                <div className="chat_img">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png" alt="sunil" />
                </div>
                <div className="chat_ib">
                    <h6
                        className="text-white"
                    > {usuario.nombre}</h6>
                    {

                        (usuario.online)
                            ? <span className="text-success">Online</span>
                            : <span className="text-white">Offline</span>
                    }

                </div>
            </div>
        </div>
    )
}
