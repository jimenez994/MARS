import React, {useState} from 'react';

const SearchBar = ({onSearchInputSubmit}) => {

  const [searchInput, setSearchInput] = useState('');
  
  const onChange = (event) => {
    setSearchInput(event.target.value);
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    onSearchInputSubmit(searchInput);
  }

    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={onSubmitForm}>
          {/* <label>Video Search </label> */}
          <input type="text" placeholder="Search " value={searchInput} onChange={onChange}></input>
        </form>
      </div>
    )
}

export default SearchBar;