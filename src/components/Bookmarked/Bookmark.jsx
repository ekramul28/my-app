import PropTypes from 'prop-types';

const Bookmark = ({ bookmark, evenTime }) => {
    console.log(bookmark)
    return (
        <div className="w-1/3 ">
            <div className='bg-[#1111110D] mb-5 rounded-xl border my-4'>
                <p className='p-5 mx-4 text-xl font-bold text-[#6047EC]'>Spent time on read :{evenTime} min</p>

            </div>
            <div className='bg-[#1111110D] pb-5'>
                <h1 className='text-2xl font-bold text-center'>bookmark Blogs:{bookmark.length}</h1>
                <div className='text-lg font-semibold  mx-7 '>
                    {
                        bookmark.map(book => <p key={book.id} className=' bg-white p-3 rounded-lg my-3 '>{book.title}</p>)
                    }
                </div>
            </div>

        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
    evenTime: PropTypes.func
}
export default Bookmark;