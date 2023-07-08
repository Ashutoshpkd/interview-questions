import AccordianEffect from "@/components/AccordianEffect/AccordianEffect";
import axios from "axios";

const Accordian = (props) => {
    return <AccordianEffect data={props.data} />
}

export async function getServerSideProps (ctx) {
    const response = await axios.get('http://localhost:3000/api/accordian', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = response.data.content;
    console.log('Server side props - ', data);
    return {
        props: {
            data,
        }
    };
}

export default Accordian;