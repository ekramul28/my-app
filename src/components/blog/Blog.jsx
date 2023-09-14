import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';
const Blog = ({ data, handelAddToBookMark, evenTimeAdd }) => {

    const { cover, title, author_name, author_img, reading_time, date, categories, id } = data;
    return (
        <div >
            <img className='w-full my-2' src={cover} alt="" />
            <div className='flex justify-between items-center my-6'>
                <div className='flex gap-4 items-center'>
                    <img className='w-14 h-14' src={author_img} alt="" />
                    <div>
                        <h4 className='text-2xl font-bold'>{author_name}</h4>
                        <p>{date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p>{reading_time} min read </p>
                    <button onClick={() => handelAddToBookMark(data)} >  <FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h1 className='text-4xl font-bold py-2'>{title}</h1>
            <p>{categories.map((categori, indx) => <span key={indx} className='mx-1'>#{categori}</span>)}</p>
            <button onClick={() => evenTimeAdd(reading_time, id)} className='text-xl font-semibold text-[#6047EC] py-3 hover:text-black '>Make as read</button>
        </div>
    );
};

Blog.propTypes = {
    data: PropTypes.object.isRequired,
    handelAddToBookMark: PropTypes.func,
    evenTimeAdd: PropTypes.func
}
export default Blog;