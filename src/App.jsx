import Card from './Cards'
import data from './Data'
const react = require('react');

const ncard = (val) => {
    return (
        <Card key = {val.id} imgsrc = {val.imgsrc} title = {val.title} sname = {val.sname} link = {val.links} />
    )
}

const app = () => (
    <>
        <h1 className='heading_style'> List of Top Web Series </h1>
        {data.map(ncard)}
    </>
);

export default app;