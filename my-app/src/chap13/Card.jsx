function Card(props){
    const { title, backgroundColor, children } = props;

    return (
        <div
            style={{
                margin: 8,
                padding: 8,
                borderRadius: 8,
                boxShadow: "0[x 0[x 4[x grey",
                backgroundColor: backgroundColor || "white",
            }}
            >
                {title && <hi>{title}</hi>}
                {children}
            </div>
    );
}

export default Card;