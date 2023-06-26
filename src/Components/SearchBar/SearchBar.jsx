import '../SearchBar/SearchBar.css'

const SearchBar = () =>  {

  return ( 
    <div className='searchBar-general'>
        <select name="select" defaultValue='value1' className='select'>
            <option value="value1" > Select a game</option>
        </select>
         <input className='input' /> 
        <select className='select-search' defaultValue='value2' placeholder='ALL'> 
            <option value="value2" > Price</option>
        </select>
        <select className='select-search'defaultValue='value3' placeholder='ALL'> 
            <option value="value3" > Type</option>
        </select>
    </div>
  )
}

export default SearchBar