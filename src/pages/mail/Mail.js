import React, { useEffect, useState } from "react";
import './Mail.css';
import { SideBar } from "../../component/sideBar/SideBar";
import { Header } from "../../component/header/Header";
import { MailBar} from "../../component/mailBar/MailBar";
import { MailList } from "../../component/mailList/MailList";
import { SelectMenu } from "../../component/selectMenu/SelectMenu";
import { HEADER_INITIAL } from "../../constant";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ComposeMail } from "../../component/composeMail/ComposeMail";
import { getUserEmail } from "../../apiCall";
import { useParams } from "react-router-dom";

export const Mail = () => {

    const [mails, setMails] = useState([]);

    const { type, selectedMail } = useParams();

    useEffect(() => {

        getEmails(type);
    }, [type, selectedMail]);

    const getEmails = (type = 'inbox') => {
        getUserEmail(type).then(res => {
            console.log(res);
            setMails(res.data);
        })
    }

    const getSelectedMails = () => {
        console.log(mails)
        console.log(mails.filter(item => item._id === selectedMail))
        const selected = mails.filter(item => item._id === selectedMail);
        if (selected.length)
            return selected[0];
        else
            return {}
    }

    return (
        <>
            <Header/>
            <div className="mail-container">
                <div>
                    <SideBar tab={type}/>
                </div>
                <div className="mail-list-show">
                    <div className="mail-list-show1"><SelectMenu HEADER_MENU_MAIL={HEADER_INITIAL}/></div>
                    {selectedMail ? <MailBar mail={getSelectedMails()}/> : mails.map(item => <div className="mail-list-show2" key={item._id}><MailList mail={item} /></div>)}
                    <ComposeMail/>
                </div>
            </div>   
        </>
    )
}