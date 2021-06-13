import React from 'react'
import { data } from '../../data/data';
import { useFilter } from '../../hooks/useFilter';
import { ResumeItem } from './ResumeItem';
import { Splide, SplideSlide  } from '@splidejs/react-splide'


export const AppTemplates = () => {


    const [list] = useFilter({data})
    const options= {
        type      : 'loop',
        perPage   : 3,
        perMove   : 1,
        gap       : '1rem',
        pagination: false,
        focus     : 'center',

    }
    return <div >

        <Splide
            className='carousel'
            options={options}
            onMoved={ ( splide, newIndex ) => {  } }
        >
            {
                list.map((el, i) => <SplideSlide key={i} > 
                    <ResumeItem data={el} />
                </SplideSlide> )
            }

        </Splide>
    </div>
}
