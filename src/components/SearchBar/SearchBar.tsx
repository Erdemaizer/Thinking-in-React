import './SearchBar.css';

export type SearchBarProps = {
    changeFilterText: (text: string) => void;
    changeInStockOnly: () => void;
}

export default function SearchBar({ changeFilterText, changeInStockOnly }: SearchBarProps){
    return(
        <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
            <input type="search" className="search-input" placeholder='Search...' onChange={(e) => changeFilterText(e.currentTarget.value)}/>
            <label>
                <input type="checkbox" onChange={changeInStockOnly}/>
                Only show products in stock
            </label>
        </form>
    )
}