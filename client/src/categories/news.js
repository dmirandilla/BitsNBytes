import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { FiMoreVertical } from 'react-icons/fi'

export function News(props) {
    return (
        <div className='newsList'>
            <div key={props.id} className='newsCard'>
                <img style={{height:300, width:300}} src={props.image} alt='news-img' className='newsImage'></img>

                <FaRegBookmark className={"newsCard_save"} />
                <FaShareAlt className={"newsCard_share"} />
                <FiMoreVertical className={"newsCard_more"} />

                <div className='newsCard_content'>
                    <h3 className='newsTitle'>{props.title}</h3>
                </div>
                <div className='newsSource'>{props.source}</div>
                <div className='newsPosted'>{props.posted}</div>
            </div>
        </div>
    )
}