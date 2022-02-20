import React, { useEffect, useRef } from "react";
import './MailBar.css';
import { SelectMenu } from "../selectMenu/SelectMenu";
import { HEADER_MENU_MAIL } from "../../constant";

export const MailBar = ({mail}) => {
    
    let bodyRef = useRef(null);

    useEffect(() => {
        bodyRef.current.innerHTML = mail.body.replaceAll('\n', '<br/>');
    }, [])

    return (
        <div className="mail-bar-container">
            <SelectMenu HEADER_MENU_MAIL={HEADER_MENU_MAIL}/>
            <div>
                <div>
                    <div className="subject-container">{mail.subject}</div>
                </div>
                <div className="mail-body-container">
                    <div className="mail-display-header1">
                        <img className="user-mail-img" width="40" height="40" src="https://ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png" alt="" />
                    </div>
                    <div className="mail-display-header2">
                        <div className="sender-name">
                            {mail.from}
                        </div>
                        <div className="to-list">
                            <span>{mail.emailTo.join(', ')}</span>
                            <img src="https://www.gstatic.com/images/icons/material/system/1x/arrow_drop_down_black_20dp.png" alt="" />
                        </div>
                    </div>
                    <div className="mail-display-header3">
                        <div className="send-date-time">{mail.createdAt.split('T')[0]}</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="mail-text-container" id='mail-body-injection' ref={bodyRef}>
                    {mail.body}
                </div>
            </div>
            <div className="mail-display-footer">
                <button><img src="https://www.gstatic.com/images/icons/material/system/1x/reply_black_20dp.png" alt="" /><span>Reply</span></button>
                <button><img src="https://www.gstatic.com/images/icons/material/system/1x/reply_all_black_20dp.png" alt="" /><span>Reply all</span></button>
                <button><img src="https://www.gstatic.com/images/icons/material/system/1x/forward_black_20dp.png" alt="" /><span>Forward</span></button>
            </div>
            
        </div>
        
    )
}
