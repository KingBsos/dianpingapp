import React from "react";
import { withRouter } from "react-router-dom";
import SearchInput from "../SearchInput";
import "./style.less";

//搜索结果页头部

class SearchHeader extends React.Component {
  handleClick() {
    this.props.history.push("/"); //返回上一页
  }
  handleEnter(value) {
    if (this.props.keyword === value) {
      return;
    }
    this.props.history.push(`/search/all/${value}`);
  }
  render() {
    return (
      <div className="search-header">
        <span
          onClick={this.handleClick.bind(this)}
          className="search-header-back"
        >
          <i className="icon-chevron-left" />
        </span>
        <div className="input-container">
          <i className="icon-search" />
          <SearchInput
            searchWord={this.props.keyword}
            onEnter={this.handleEnter.bind(this)}
          />
        </div>
      </div>
    );
  }
}
export default withRouter(SearchHeader);
