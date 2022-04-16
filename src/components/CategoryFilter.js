import React from "react";

function CategoryFilter(props) {

  function handleButtonClick(event) {
    let siblings = [...event.target.parentElement.children];

    siblings.map(sibling => {
      sibling.className = ""
    });
     
    event.target.className = "selected";
    props.filterTasksByCategory(event);
  }

  function renderButtons() {
    return props.categories.map(category => {
      return (
        <button key={category} onClick={handleButtonClick}>{category}</button>
      )
    })
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderButtons()}
    </div>
  );
}

export default CategoryFilter;
