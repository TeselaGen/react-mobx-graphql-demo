import React from "react";
import { observable } from "mobx";
import { observer, PropTypes } from "mobx-react";

@observer
export class StudiesList extends React.Component {
  constructor(props) {
    super(props);
    props.studiesStore.fetchData();
  }

  @observable studies = this.props.studiesStore.studies;

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", margin: "16px" }}>
        <div style={{ display: "flex" }}>
          <ul>
            {this.studies.map(study => {
              const st = JSON.stringify(study);
              return <li key={study.object_ref_id}>{st}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

StudiesList.propTypes = {
  studiesStore: PropTypes.objectOrObservableObject
};
