import { observable } from "mobx";
import { observer, PropTypes } from "mobx-react";
import * as React from "react";
import { Button, Intent, Checkbox } from "@blueprintjs/core";

@observer
export class StudiesList extends React.Component {
  @observable studies = [];
  state = { selected: false };

  getStudies = () => {
    const {
      studiesStore: { getStudies }
    } = this.props;
    getStudies();
  };

  componentDidMount() {
    this.getStudies();
    this.studies = this.props.studiesStore.studies;
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", margin: "16px" }}>
        <div style={{ display: "flex" }}>
          <ul>
            {this.studies.map(study => (
              <li key={study.object_ref_id}>{study.slug}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

StudiesList.propTypes = {
  studiesStore: PropTypes.objectOrObservableObject
};
