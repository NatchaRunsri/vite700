const Picture = ({picture,title }) => {
    return (
        <img src={picture} alt={title} className="w-5/6 rounded-md"></img>
    )
}
export default Picture;