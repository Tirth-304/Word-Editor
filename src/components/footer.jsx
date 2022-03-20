import react from 'react';

const footer = (props) => {
    return(
        <>
            <div className = {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} fixed-bottom`} style = {{alignItems: 'center' , justifyContent: 'center' , color: props.mode==='dark'?'white':'#042743'}}>
                <h4> Made By - Tirth Bhimani </h4>
            </div>
        </>
    );
};

export default footer;