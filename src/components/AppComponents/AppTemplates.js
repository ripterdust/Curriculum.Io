import React from 'react'
import { data } from '../../data/data';
import { useFilter } from '../../hooks/useFilter';
import { ResumeItem } from './ResumeItem';
import { Splide, SplideSlide  } from '@splidejs/react-splide'


export const AppTemplates = () => {


    const [list] = useFilter({data})

    return <Splide
        option={{
            rewind : true,
            perPage: 2,
			perMove: 1,
            gap: '1rem'
        }}
        onMoved={ ( splide, newIndex ) => {  } }
    >
         {
            list.map((el, i) => <SplideSlide key={i} > 
                <ResumeItem data={el} />
            </SplideSlide> )
        }

    </Splide>
}
