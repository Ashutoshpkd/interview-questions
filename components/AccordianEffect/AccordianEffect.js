import { useState } from 'react';
import * as S from './AccordianEffect.styles';
import AccordianItem from './AccordianItem';

export default function AccordianEffect({
    data,
}) {
    const [activeIdx, setActiveIdx] = useState(-1);

    const handleAccClick = (idx) => {
        console.log('Idx - ', idx);
        setActiveIdx( pIdx => {
            if (idx === pIdx) return -1;
            return idx;
        });
    }

    return (
        <S.UL>
            {data?.length && data.map((item, idx) => (
                <AccordianItem
                    key={idx}
                    question={item.question}
                    answer={item.answer}
                    isActive={idx === activeIdx}
                    handleClick={handleAccClick.bind(null, idx)}
                />
            ))}
        </S.UL>
    );
}