import cl from './Massage.module.css';
import moment from "moment";

export default function Massage({massage, imgAva}) {
    let styleMSG = {};
    let contentDivStyle = {};
    massage.sender ? styleMSG = {backgroundColor: '#60656c', color: '#e5e7ea'} : styleMSG = {
        backgroundColor: '#d9d7d7',
        color: 'grey'
    };
    massage.sender ? contentDivStyle = {justifyContent: 'flex-start'} : contentDivStyle = {justifyContent: 'end'};

    return (
        <div className={cl.mainMassageDiv}>
            <div className={cl.contentDiv} style={contentDivStyle}>
                {massage.sender &&
                <div className={cl.avaDiv} style={{backgroundImage: `url(${imgAva})`}}>
                </div>
                }
                <div className={cl.massageDiv} style={styleMSG}>
                    {massage.value}
                </div>
            </div>
            <div className={cl.timeDiv} style={contentDivStyle}>
                {moment(massage.time).format('L')} {moment(massage.time).format('LT')}
            </div>
        </div>
    );
};
