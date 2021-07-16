

export default function Button({buttonContent, buttonFunction }){
    return(
        <>
            <button onClick={buttonFunction}> {buttonContent} </button>
        </>
    );
}