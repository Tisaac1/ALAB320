import Header from "./Header.jsx";
import SearchBar from "./SearchBar.jsx";
import EmployeeList from './EmployeeList.jsx';
import '../styles/homepage.css'

function Homepage() {
    return(
        <div>
            <Header title='Employee Directory' />
            <SearchBar />
            <EmployeeList />
        </div>
    );
}

export default Homepage 