import SavedSearchesList from "./saved-searches-list";
import classes from "./search-form-autocomplete.module.css";


const SuggestionsListComponent = ({filteredSuggestions, activeSuggestionIndex, onClick, showList}) => {
    return filteredSuggestions.length ? (
        <div className={classes.autosuggestionContainer}>
            <ul>
                {filteredSuggestions.map((suggestion, index) => {
                    let className;

                    // Flag the active suggestion with a class
                    if (index === activeSuggestionIndex) {
                        className = classes.activeSuggest;
                    }

                    return (
                        <li className={className} key={suggestion.slug}>
                            <button onClick={onClick} data-slug={suggestion.slug}>{suggestion.title}</button>
                        </li>
                    );
                })}
            </ul>
        </div>

    ) : (
        <SavedSearchesList showList={showList}/>
    );
};

export default SuggestionsListComponent;