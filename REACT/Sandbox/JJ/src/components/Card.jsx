export default function Card(props) {
    return (
        <div className="w3-card" style={{borderRadius: "20px", padding: "10px"}}>

            {props.children}

        </div>
    );
}