import friendName from "/friendName";
import companyNmae from "/companyName"

const Friend = (props) => {
  
    const {name,companyName} = props;
    return(
        <div>
            <h3>{name}</h3>
            <friendname>
                        <hr />
            <p>{companyName}</p>
        </div>
    )
}

export default Friend;