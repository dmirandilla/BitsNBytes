import React from "react";
import sports_content  from "../categories/sports_content";
import { News } from '../categories/news';

const Sports = () => {
    return (
        <div className='News'>
            {sports_content.map(sports_content => (
                <News
                    key={sports_content.id}
                    image={sports_content.image}
                    title={sports_content.title}
                    source={sports_content.source}
                    posted={sports_content.posted}
                />
            ))}
        </div>
    );
};

export default Sports;