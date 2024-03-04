export default function Card(props) {
    return (
        <div className="w3-card-4" style={{borderRadius: "20px", padding: "1rem 2rem", marginBottom: "3rem"}}>

            {props.children}

        </div>
    );
}