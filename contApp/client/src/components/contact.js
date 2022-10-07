import "../App.css";
import placeholderImg from '../assets/placeholder_user.png';

  

const Contact = (props) =>{

  const {initialContact = {
    id: null,
    name: "",
    email: "",
    number: "",
    image: ""
}} = props;

const [contact, setContact] = useState(initialContact);

    return(
        <div id="container">
        <div className="card">
        <div className="top">
          <h2 className="name">{props.contact.name}</h2>
      <img className="circle-img" src={placeholderImg} alt="avatar_img" />
    </div>
    <div className="bottom">
    <p className="info">{props.contact.email}</p>
    <p className="info">{props.contact.phoneNumber}</p>
      </div>
    </div>
    </div>
    )
};

export default Contact