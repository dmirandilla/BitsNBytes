import React from "react";
import world_content  from "../categories/world_content";
import { News } from '../categories/news';

const World = () => {
    return (
        <div className='News'>
            {world_content.map(world_content => (
                <News
                    key={world_content.id}
                    image={world_content.image}
                    title={world_content.title}
                    source={world_content.source}
                    posted={world_content.posted}
                />
            ))}
        </div>
    );
};

export default World;