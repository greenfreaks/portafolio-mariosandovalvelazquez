import {link, LinkImg, LinkBtn} from './Links'
const CardImg = ({img, imgAlt, imgTitle, cardTitle, text, btnLink, btnText, btnBlank = true}) =>{
    return(
        <div className="cardImg boxShadow semiRounded">
            <img className='semiRounded' src={img} alt={imgAlt} title={imgTitle} />
            <div className="cardImg__text">
                <h3 className='boldTx'>{cardTitle}</h3>
                <p>{text}</p>
            </div>
            <a href={btnLink} class="smBtn green whiteTx semiBold" target = {btnBlank ? '_blank' : ''}>{btnText}</a>
            
        </div>
    )
}

const CardVid = ({vid, cardTitle, text, btnLink, btnText, btnTarget = true}) =>{
    return(
        <div className="cardVid boxShadow semiRounded">
            <video className='semiRounded' src={vid} controls></video>
            <div className="cardVid__text">
                <h3>{cardTitle}</h3>
                <p>{text}</p>
            </div>
            <a href={btnLink} class="smBtn green whiteTx semiBold" target = {btnTarget ? '_blank' : ''}>{btnText}</a>
            
        </div>
    )
}

const CardYt = ({LinkYt, cardTitle, text, btnLink, btnText, btnTarget = true}) =>{
    return(
        <div className="cardYt boxShadow semiRounded">
            <iframe className='semiRounded' src={LinkYt} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className="cardYt__text">
                <h3>{cardTitle}</h3>
                <p>{text}</p>
            </div>
            <a href={btnLink} class="smBtn green whiteTx semiBold" target = {btnTarget ? '_blank' : ''}>{btnText}</a>
            
        </div>
    )
}


export{
    CardImg,
    CardVid,
    CardYt
};
