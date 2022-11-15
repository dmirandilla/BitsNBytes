import React from "react";
import tech_content  from "../categories/tech_content";
import { News } from '../categories/news';

const Tech = () => {
    return (
        <div className='News'>
            {tech_content.map(tech_content => (
                <News
                    key={tech_content.id}
                    image={tech_content.image}
                    title={tech_content.title}
                    source={tech_content.source}
                    posted={tech_content.posted}
                />
            ))}
        </div>
    );
};

export default Tech;