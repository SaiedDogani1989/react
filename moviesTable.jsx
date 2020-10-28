import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import Like from "./like";
import Table from './table';


class MoviesTable extends Component {

    columns = [
        {path:'title' , label: 'Title' ,
        content : movie =><Link to={`/movies/${movie._id}`}>{movie.title}</Link>  },
        
        {path:'genre.name' , label: 'Genre'},
        {path:'numberInStock' , label: 'Stock'},
        {path:'DailyRentalRate' , label: 'Rate'},
        {key:"Like" , 
        content : (movie) =><Like
        Liked={movie.liked}
        onClick={() => this.props.onLike(movie)}
        />
        },
        {key:"delete", 
         content : (movie) => 
         <button
         onClick={() => this.props.onDelete(movie)}
         className="btn btn-danger"
        >
         Delete
        </button>
    }
    ]
    render() { 
        const {movies , onSort, sortColumn } = this.props;
        return (  
            
         <Table 
         columns = {this.columns} 
         data ={movies} 
         onSort = {onSort}  
         sortColumn = {sortColumn} />
        );

    }
}
 
export default MoviesTable;