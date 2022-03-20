import react from 'react';

const About = (props) => {
    return (
        <>
            <div className="container my-3" style={{border: `2px solid ${props.mode === 'light' ? 'black' : 'white'}` , borderRadius: '5px' , color: `${props.mode === 'light' ? 'black' : 'white'}`}}>
                <div className="row">
                    <div className="col">
                        <h1 className='my-3' style={{color: `${props.mode === 'light' ? '#0d6efd' : '#0dcaf0'}`}}> 1. Analyze your Text </h1>
                        <ul style={{color: `${props.mode === 'light' ? '#198754' : '#20c997'}`}}>
                            <li> Word Editor gives you a way to analyze your text quickly and efficiently. </li>
                            <li> On this website one can find Word-Count as well as character-Count in text. </li>
                            <li> By providing a text one can also find reading time required for it. </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container my-3" style={{border: `2px solid ${props.mode === 'light' ? 'black' : 'white'}` , borderRadius: '5px' , color: `${props.mode === 'light' ? 'black' : 'white'}`}}>
                <div className="row">
                    <div className="col">
                        <h1 className='my-3' style={{color: `${props.mode === 'light' ? '#0d6efd' : '#0dcaf0'}`}}> 2. Analyze your Text </h1>
                        <ul style={{color: `${props.mode === 'light' ? '#198754' : '#20c997'}`}}>
                            <li> Word Editor is Free character counting tool that provides instant word & char realted statistics for given text. </li>
                            <li> It provides count of number of words & chars in text. That's why it is suitable for writing with word/character limit. </li>
                            <li> By having extensions like grammarly one can also find gramatical mistakes in text and do improvization. </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="container my-3" style={{border: `2px solid ${props.mode === 'light' ? 'black' : 'white'}` , borderRadius: '5px' , color: `${props.mode === 'light' ? 'black' : 'white'}`}}>
                <div className="row">
                    <div className="col">
                        <h1 className='my-3' style={{color: `${props.mode === 'light' ? '#0d6efd' : '#0dcaf0'}`}}> 3. Browser Compatible </h1>
                        <ul style={{color: `${props.mode === 'light' ? '#198754' : '#20c997'}`}}>
                            <li> This word counter software works on any browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera etc. </li>
                            <li> It is perfect tool to count characters in facebook, blogs, books, excel documents etc. </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
export default About;