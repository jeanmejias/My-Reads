import React, {Component} from 'react';


class Book extends Component {

    render(){

       // console.log(this.props.book.shelf)
        let {cover,
            book,
            title,
            authors,
            shelf,
            selectOptions
            } = this.props;

        return(
            <div className="book">
                <div className="book-top">
                <div className="book-cover" 
                    style={{ width: 128,
                        height: 193,
                        backgroundImage: `url(${cover ? book.imageLinks.thumbnail : 'No Book cover'})`}}>
                </div>

                <div className="book-shelf-changer">
                    <select
                        value = {shelf||'none'}
                        onChange = {(event) =>
                            {selectOptions(book, event.target.value)}
                        }
                    >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    
                    </select>
                </div>

                </div>

                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>

            </div>
        );
    }
}

export default Book;