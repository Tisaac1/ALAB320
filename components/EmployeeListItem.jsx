import '../styles/employeeListItem.css'

function EmployeeListItem() {
    const name = "Mirko"
    const title = "Rabbit Hero"
    const imgSRC = 'https://i.redd.it/megan-thee-stallions-dressed-up-as-mirko-for-halloween-v0-5tigeougk8x91.jpg?width=1179&format=pjpg&auto=webp&s=1d7644b087a4b75809e4fec2273284b7eb429ffe';
    const alt = 'Meg'

    return (
        <div id='emp-list-item'>
            <img src={imgSRC} alt={alt} style={{float: 'left'}}/>
            <div className='info'>
                <h4>{name}</h4>
                <h5>{title}</h5>
            </div>
        </div>
    )
}

export default EmployeeListItem