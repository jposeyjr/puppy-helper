import React from 'react';

export default class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }

  handleChange(e) {
    // get the files
    let files = e.target.files;

    // Process each file
    var allFiles = [];
    for (var i = 0; i < files.length; i++) {
      let file = files[i];

      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load something...
      reader.onload = () => {
        // Make a fileInfo Object
        let fileInfo = {
          name: file.name,
          type: file.type,
          size: Math.round(file.size / 1000) + ' kB',
          base64: reader.result,
          file: file,
        };
        reader.onerror = (error) => {
          alert('Something went wrong trying to upload your image');
          console.error(error);
        };
        // Push it to the state
        allFiles.push(fileInfo);

        // If all files have been proceed
        if (allFiles.length === files.length) {
          // Apply Callback function
          if (this.props.multiple) {
            this.props.onDone(allFiles);
          } else {
            this.props.onDone(allFiles[0]);
          }
        }
      }; // reader.onload
    } // for
  }

  render() {
    return (
      <input
        id={this.props.id}
        type='file'
        onChange={this.handleChange.bind(this)}
        multiple={this.props.multiple}
        //accept attribute to be passed on to the underlying `input` component, e.g. `image/jpeg`
        accept={this.props.accept}
      />
    );
  }
}

FileUpload.defaultProps = {
  multiple: false,
};
