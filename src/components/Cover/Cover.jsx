import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/blog";
import PropTypes from 'prop-types';

const Cover = ({ handelAddToBookMark, evenTimeAdd }) => {
    const [covers, setCovers] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCovers(data))
    }, [])
    return (
        <div className="w-2/3">
            <div className="border-b-2 my-4">
                {covers.map(cover => <Blog key={cover.id} data={cover} handelAddToBookMark={handelAddToBookMark} evenTimeAdd={evenTimeAdd}></Blog>)
                }
            </div>
        </div>
    );
};

Cover.propTypes = {
    handelAddToBookMark: PropTypes.func,
    evenTimeAdd: PropTypes.func
}
export default Cover;