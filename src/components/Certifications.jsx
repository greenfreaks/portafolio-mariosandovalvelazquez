


const Certifications = ({ img, imgAlt, imgTitle, children }) => {
    return (
        <div className="certifications">
            <img src={img} alt={imgAlt} title={imgTitle} />
            <ul>
                {children}
            </ul>
        </div>
    )
}

export default Certifications;